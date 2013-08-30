

var Game = {
	level: 0,
	kills: 0, 
	isPaused: false,
	isDrawingLargeText: false,
	largeText: {endSize: 64, startSize: 12, curSize: 12, curTicks: 0, maxTicks: 128, text: ''},
	ticks: 0,
	state: state.mainmenu,
	
	_curRespawn: 3000,
	
	pause: function() {
		Game.isPaused = true;
	},
	
	unpause: function() {
		Game.isPaused = false;
	},
	
	drawText: function(text, size, x, y) {
		ctx.scale(1, -1);
		ctx.lineWidth = 1;
		ctx.fillStyle = 'white';
		ctx.font = 'bold '+size+' Arial';
		ctx.fillText(text, x, y);
		ctx.scale(1, -1);
	},
	
	start: function() {
		if(Game.state == state.game) return;
		Game.state = state.game;
		player = new Player();
		MonsterSpawner.spawnChoices = new Array();
		MonsterSpawner.spawnChoices.push(BasicEnemy);
		MonsterSpawner.spawnNewMonster();
		Game.beginDrawingText('START', true);
		
		setInterval(function() {
			if(Game.isPaused || Game.state != state.game) return;
			if(monsters.length < Game.calcMaxOnScreen(Game.level) && Game.ticks++%Game.calcRespawnSpeed(Game.level) == 0)
				MonsterSpawner.spawnNewMonster();
		}, 1);
	},
	
	beginDrawingText: function(_text, scaleDown) {
	
		if(Game.isDrawingLargeText) return;
	
		Game.isDrawingLargeText	=true;
		Game.largeText.text 	=_text;
		Game.largeText.curTicks	=(scaleDown ? Game.largeText.maxTicks/2 : 0);
		Game.largeText.curSize	=(scaleDown ? Game.largeText.endSize : Game.largeText.startSize);
		
		var interval = setInterval(function() {
			var stepSize = Math.floor(Game.largeText.maxTicks/(2*Game.largeText.endSize-Game.largeText.startSize));
			
			if(Game.largeText.curTicks<Game.largeText.maxTicks/2) {
				if(Game.largeText.curTicks%stepSize == 0) {
					Game.largeText.curSize = clamp(Game.largeText.curSize+1, Game.largeText.startSize, Game.largeText.endSize);
				}
				
			} else {
				if(Game.largeText.curTicks%stepSize == 0) {
					Game.largeText.curSize = clamp(Game.largeText.curSize-1, Game.largeText.startSize, Game.largeText.endSize);
				}
				if(Game.largeText.curSize == Game.largeText.startSize) {
					Game.doneDrawingText();
					clearInterval(interval);
				}
			}
			
			Game.largeText.curTicks++;
		}, (1000/Map.fps));
	},
	
	doneDrawingText: function() {
		Game.isDrawingLargeText=false;
	},
	
	levelUp: function() {
		Game.beginDrawingText("LEVELUP");
		Game.level++;
		if(Game.level == 1)  MonsterSpawner.spawnChoices.push(HomingEnemy);
		if(Game.level == 3)  MonsterSpawner.spawnChoices.push(SpinningEnemy);
		if(Game.level == 5)  MonsterSpawner.spawnChoices.push(NinjaEnemy);
		if(Game.level == 10) MonsterSpawner.spawnChoices.push(LaserEnemy);
	},
	
	checkLevel: function() {
		if(Game.kills > Game.calcLevelKills(Game.level+1)) {
			Game.levelUp();
		}
	},
	
	addKill: function() {
		Game.kills++;
		Game.checkLevel();
	},
	
	calcLevelKills: function(level) {
		return 9.72222 * Math.pow(level, 3) - 62.0833 * Math.pow(level, 2) + 135.337 * level - 80;
	},
	
	calcMaxOnScreen: function(level) {
		return (level*2)+1;
	},
	
	calcRespawnSpeed: function(level) {
		var max = 750;
		return clamp(max-((level+1)*45), 0, max);
	},
	
	calcScore: function() {
		return (Game.level+1) * Game.kills;
	}
};

var MonsterSpawner = {

	endOfMap: 630,
	
	spawnChoices: new Array(),
	
	spawnNewMonster: function() { 
		var m = MonsterSpawner.spawnChoices[getRandomInt(0, MonsterSpawner.spawnChoices.length-1)];
		if(!m) return;
		m.spawn(MonsterSpawner.endOfMap, (Math.random()*300)+20, (Game.level < 3 ? null : Game.level/3));
	},
};