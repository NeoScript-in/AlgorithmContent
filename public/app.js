 var app = angular.module('content',
    [   'ui.router'
    ]);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html",
            controller: "home"
        })
});

//-----------------------------------------------------------------------------------------------------------
/*
function drawRect1(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+a/2.0, y+h);
	ctx.lineTo(x+a/2.0-h,y+h+a/2.0);
	ctx.lineTo(x-h,y+a/2.0);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}

function drawRect2(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+h, y+a/2.0);
	ctx.lineTo(x+h-a/2.0,y+a/2.0+h);
	ctx.lineTo(x-a/2.0,y+h);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}

function drawTriangle1(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+a/2.0, y+h);
	ctx.lineTo(x-a/2.0,y+h);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}

function drawTriangle2(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+a/2.0, y-h);
	ctx.lineTo(x-a/2.0,y-h);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}

function drawTriangle3(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+h, y+a/2.0);
	ctx.lineTo(x+h,y-a/2.0);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}

function drawTriangle4(ctx, x, y, d, cl) {
	var a = (Math.sqrt(3)-1)/2.0*d;
	var h = a*Math.sqrt(3)/2.0;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x-h, y+a/2.0);
	ctx.lineTo(x-h,y-a/2.0);
	ctx.closePath();
	ctx.fillStyle = cl;
	ctx.fill();
	ctx.strokeStyle = window.st;
	ctx.lineWidth = window.stw;
	ctx.stroke();
}


var canv = document.getElementById('board');
var ctx = canv.getContext('2d');
var d=220;
var n = 4;
var x = 40, y = 40;
var a = (Math.sqrt(3)-1)/2*d;
var h = a*Math.sqrt(3)/2;
var t1 = a/2+h;

function draw(clSq, clTr1, clTr2, d, st) {

for (var px=-1; px<n; px++)
	for (var py=-1; py<n; py++) {
			drawRect1(ctx, px*d, py*d, d, clSq);
			drawRect2(ctx, px*d+a, py*d, d, clSq);
			drawRect1(ctx, px*d+t1, py*d+t1, d, clSq);
			drawRect2(ctx, px*d+a+t1, py*d+t1, d, clSq);

			drawTriangle1(ctx, px*d+a/2.0, py*d-h, d, clTr1);
			drawTriangle2(ctx, px*d+a/2.0, py*d+h, d, clTr2);
			drawTriangle3(ctx, px*d+a, py*d, d, clTr2);
			drawTriangle4(ctx, px*d, py*d, d, clTr1);

			drawTriangle1(ctx, px*d+a/2.0+t1, py*d-h+t1, d, clTr1);
			drawTriangle2(ctx, px*d+a/2.0+t1, py*d+h+t1, d, clTr2);
			drawTriangle3(ctx, px*d+a+t1, py*d+t1, d, clTr2);
			drawTriangle4(ctx, px*d+t1, py*d+t1, d, clTr1);
	}
}

//angular.module("myApp",[])

//-----------------------------------------------------------------------------------------------------------

// Code goes here
/*

var app = angular.module('app', []);


app.factory('Ball' , function(){

  function Ball(initX, initY){
    this.x = initX;
    this.y = initY;
    this.yV = 1;
    this.gravity = 1;
  }

  Ball.prototype.update = function () {
    yV += gravity;
    y += yV;
    if(y > 480){
      yV = -20;
    }

  Ball.prototype.draw = function () {
    ellipse(this.x , this.y , 20 , 20);
  };

  };

  return Ball;
});


app.directive('liquidTank', [ 'Ball' , function ($parse, $http, Ball) {

  return {
    restrict: 'E',
    scope: {},
    replace: true,
    transclude: false,
    template: '<div/>',
    link: function (scope, element, attrs) {

      scope.draw = function() {
        if(attrs.hasOwnProperty('canvasId')) {
          scope.canvasId = attrs.canvasId;
        }
        if(attrs.hasOwnProperty('width')) {
          scope.width = attrs.width;
        }
        if(attrs.hasOwnProperty('height')) {
          scope.height = attrs.height;
        }


        element.html('<canvas id="'+scope.canvasId+'" width="'+scope.width+'" height="'+scope.height+'"></canvas>');

        //Meter canvas stuff
        var c=document.getElementById(scope.canvasId);
        var pjs = new Processing(c);
        var b;

        pjs.draw = function () {

          pjs.background(255);

            pjs.ellipse(46, 46 , 20 , 20);
         if (pjs.mouseClicked) {
          b = new Ball(pjs.mouseX, pjs.mouseY);
            if(b != null){
              b.update();
              b.draw();
            }
          }
        }

        pjs.setup = function() {
            pjs.size(c.width, c.height);
            pjs.background(255);
        }

        pjs.setup();
        pjs.draw();

      scope.draw();
    }
  }
}]);
*/
