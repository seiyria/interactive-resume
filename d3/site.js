
// more visible nodes should increase the charge or the link distance

(function() {

var width = window.innerWidth,
    height = window.innerHeight,
    root;

var defaultSize = 25;

var colors = {
  collapsed: "#5850ff",
  expanded: "#392410",
  leaf: "#0272c3"
};

function redraw() {
  svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
}

var force = d3.layout.force()
    .linkDistance(function(d) { 
      return d.target._children ? d.target._children.length * 30 : 
              d.target.children ? d.target.children.length * 30 :
                60})
    .charge(-400)
    .gravity(.05)
    .friction(0.45)
    .linkStrength(0.6)
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
      .attr("fill", "#fff")
      .attr("text-decoration", function(d) { return d.link ? "underline" : ""})
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
  return d._children ? colors.collapsed
      : d.children ? colors.expanded
      : colors.leaf
}

function closeChildren(sibling, node) {
  node.children.forEach(function(e, i) {
    if(typeof e.children !== 'undefined' && e!==sibling && !e._children) {
      e._children = e.children
      closeChildren(null, e);
      e.children = null;
    }
  });
}

function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;

  } else {
    d.children = d._children;
    d._children = null;

    if(typeof d.canBeClosedBySiblings === 'undefined') {
      d.children.forEach(function(e, i) {
        e.parent = d;
        d.canBeClosedBySiblings = !e.children && !e._children;
      });
    }

    if(d.parent && d.parent.children) {
      closeChildren(d, d.parent);
    }
  }
}

function click(d) {
  if (d3.event.defaultPrevented) return;
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

function updateWindow(){
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    svg.attr("width", x).attr("height", y);
}
window.onresize = updateWindow;

})();
