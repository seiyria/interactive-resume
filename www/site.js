
(function() {

	//just some constants!
	var width = window.innerWidth;
	var height = window.innerHeight;
	var root;

	//default node size
	var defaultSize = 25;

	//colors! it looks great as a background
	var colors = {
		collapsed: "#5850ff",
		expanded: "#392410",
		leaf: "#0272c3"
	};

	// generate dat force layout. lots of numbers that do things I don't understand!
	var force = d3.layout.force()
		.linkDistance(function(d) { 
			return d.target._children ? d.target._children.length * 50 : 
				d.target.children ? d.target.children.length * 50 :
				60;
		})
		.charge(-400)
		.gravity(0.05)
		.friction(0.45)
		.linkStrength(0.5)
		.size([width, height])
		.on("tick", tick);

	// makin' an svg to contain everythin'
	var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", "0 0 " + width + " " + height)
		.attr("preserveAspectRatio", "xMidYMid meet")
		.attr("pointer-events", "all");

	var link = svg.selectAll(".link");
	var node = svg.selectAll(".node");

	// toggle everything! duh.
	function toggleAll(d) {
		if(!d.children) return;
		d.children.forEach(toggleAll); 
		toggle(d);
	}

	// update all of the nodes that exist
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
			.attr("text-decoration", function(d) { return d.link ? "underline" : ""; })
			.text(function(d) { return d.name; });

		node.select("circle")
			.style("fill", color);
	}

	// update stuff every tick!
	function tick() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

		node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	}

	// determine an adequate color
	function color(d) {
		return d._children ? colors.collapsed
			: d.children ? colors.expanded
			: colors.leaf;
	}

	// recursively close all of my children!
	function closeChildren(sibling, node) {
		node.children.forEach(function(e) {
			if(typeof e.children !== 'undefined' && e!==sibling && !e._children) {
				e._children = e.children;
				closeChildren(null, e);
				e.children = null;
			}
		});
	}

	// toggle a particular childrens visibility
	function toggle(d) {

		//hide children
		if (d.children) {
			d._children = d.children;
			
			//close my children, because otherwise inconsistency!
			closeChildren(null, d);
			d.children = null;

		//show children
		} else {
			d.children = d._children;
			d._children = null;

			//if this variable hasn't been set ... set it
			if(typeof d.canBeClosedBySiblings === 'undefined' && d.children) {
				d.children.forEach(function(e) {
					e.parent = d;
					d.canBeClosedBySiblings = !e.children && !e._children;
				});
			}

			//close children of the parent node but myself
			if(d.parent && d.parent.children) {
				closeChildren(d, d.parent);
			} 
		}
	}

	// toggle visibility of nodes / children when clicked
	function click(d) {
		if (d3.event.defaultPrevented) return;
		if (d.link) {
			window.open(d.link, '_blank');
		}
		toggle(d);
		update();
	}

	// condense the nodes down to one array
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

	//update the svg size when the window resizes
	function updateWindow(){
		svg.attr("width", window.innerWidth).attr("height", window.innerHeight);
	}

	window.onresize = updateWindow;

	// load my info!
	d3.json("info.json", function(error, json) {
		root = json;
		root.y0 = height / 2;
		root.x0 = width / 2;

		//I hate things sometimes
		update();
		toggleAll(root);
		toggle(root);
		update();
	});

})();
