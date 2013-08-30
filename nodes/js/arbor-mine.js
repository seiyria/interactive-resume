
  
  $(document).ready(function(){
	var theUI = {
		nodes: NodeMaster.nodes,
		edges: NodeMaster.edges
	}

	var sys = arbor.ParticleSystem()
	sys.parameters({stiffness:600, repulsion:2000, gravity:false, dt:0.015, precision: 0.7, friction: 0.9})
	sys.renderer = Renderer("#viewport")
	sys.graft(theUI)
	sys.addNode("seiyria", {p: arbor.Point(0.1,0.1), fixed: true, color: "purple", shape: "dot", alpha: 1, alwaysVisible: true});
	/*
	var nav = Nav("#nav")
	$(sys.renderer).bind('navigate', nav.navigate)
	$(nav).bind('mode', sys.renderer.switchMode)
	nav.init()
  	*/
  })