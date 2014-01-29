
// more visible nodes should increase the charge or the link distance
// 
(function() {
  function redraw() {
  svg.attr("transform",
      "translate(" + d3.event.translate + ")"
      + " scale(" + d3.event.scale + ")");
}

var width = window.innerWidth,
    height = window.innerHeight,
    root;

var defaultSize = 25;

var force = d3.layout.force()
    .linkDistance(140)
    .charge(-80)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("body").append("svg")
      .attr({
        "width": "100%",
        "height": "100%"
      })
      .attr("viewBox", "0 0 " + width + " " + height )
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("pointer-events", "all")
    .call(d3.behavior.zoom().on("zoom", redraw));

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

var toggleRec = function toggleAll(d) {
  if(!d.children) return;
  d.children.forEach(toggleAll); 
  toggle(d);
}

d3.json("resume.json", function(error, json) {
  root = json;
  root.y0 = height / 2;
  root.x0 = width / 2;

  //I hate things sometimes
  update();
  toggleRec(root);
  toggle(root);
  update();
});

function update() {
  var nodes = flatten(root);
  var links = d3.layout.tree().links(nodes);

  force
      .nodes(nodes)
      .links(links)
      .start();

  link = link.data(links, function(d) { return d.target.id; });

  link.exit().remove();

  link.enter().insert("line", ".node")
      .attr("class", "link");

  node = node.data(nodes, function(d) { return d.id; });

  node.exit().remove();

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .on("click", click)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return d.size || defaultSize; });

  nodeEnter.append("text")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  node.select("circle")
      .style("fill", color);
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function color(d) {
  return d._children ? "#a7af00" // collapsed package
      : d.children ? "#c6dbef" // expanded package
      : "#fd8d3c"; // leaf node
}

function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.link) {
    window.open(d.link, '_blank');
  }
  toggle(d);
  update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}
})();
