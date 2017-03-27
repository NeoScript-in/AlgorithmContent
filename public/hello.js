var Ball = (function() {
function Ball() {
var $this_1 = this;
function $superCstr(){$p.extendClassChain($this_1)}
$this_1.x = 0;
$this_1.y = 0;
$this_1.yV = 0;
$this_1.gravity = 0;
function update$0() {
$this_1.yV += $this_1.gravity;
		$this_1.y += $this_1.yV;
		if ($this_1.y > 480) {
$this_1.yV = -20;
}
}
$p.addMethod($this_1, 'update', update$0, false);
function draw$0() {
$p.ellipse($this_1.x, $this_1.y, 20, 20);
}
$p.addMethod($this_1, 'draw', draw$0, false);
function $constr_2(initX, initY){
$superCstr();

$this_1.x = initX;
		$this_1.y = initY;
		$this_1.yV = 1;
		$this_1.gravity = 1;
}

function $constr() {
if(arguments.length === 2) { $constr_2.apply($this_1, arguments); } else $superCstr();
}
$constr.apply(null, arguments);
}
return Ball;
})();
$p.Ball = Ball;

var balls =  new $p.ArrayList();

 function setup() {
$p.size(500, 500);
    $p.background(100);
}
$p.setup = setup;

 function draw() {
$p.background(100);
  if (balls.size() > 0) {
for (var i =  0;  i < balls.size();  i++) {
balls.get(i).update();
  		balls.get(i).draw();
}
}
}
$p.draw = draw;

 function mouseClicked() {
var b =  new Ball($p.mouseX, $p.mouseY);
	balls.add(b);
}
$p.mouseClicked = mouseClicked;
 
 
