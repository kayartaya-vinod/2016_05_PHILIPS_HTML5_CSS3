<!DOCTYPE html>
<html>
	<head>
		<title>HTML5 Demos</title>	
		<script type="text/javascript">	
		
			var counter = 0;
			var colors = ["#f00", "#999", "#12e", "#333"];
			var barIndex = 0;
			var color = null;
			
			function fnColorToRgb(color, transp){
				debugger;
				var el = document.createElement("h1");
				el.style.backgroundColor = color;
				var s = el.style.backgroundColor;
				var colors = s.substr(4, s.lastIndexOf(")")-4).split(",");
				var barColor = "rgba("+colors[0]+", "
					+colors[1]+", "
					+colors[2]+", "
					+transp+")";
				return barColor;
				
			}
			
			function fnDrawBar(ctx, val){
				var r, g, b;
				if(barIndex<colors.length){
					color = colors[barIndex];
				}
				
				ctx.fillStyle = fnColorToRgb(color, 1);
				
				var x, y, w, h;
				w = 50;
				h = 2*val;
				x = 50;
				y = 400-h;
				ctx.fillRect(x, y, w, h);
				
				var xo, yo;
				xo = 25;
				yo = 10;
				
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x+xo, y-yo);
				ctx.lineTo(x+w+xo, y-yo);
				ctx.lineTo(x+w, y);
				ctx.closePath();
				ctx.fillStyle = fnColorToRgb(color, .5);
				ctx.fill();
				
				
				ctx.beginPath();
				ctx.moveTo(x+w, y);
				ctx.lineTo(x+w+xo, y-yo);
				ctx.lineTo(x+w+xo, y-yo+h);
				ctx.lineTo(x+w, y+h);
				ctx.closePath();
				ctx.fillStyle = fnColorToRgb(color, .3);
				ctx.fill();
				
				barIndex++;
			}
		
			function fnDrawChart(data){
				
				var c1 = document.getElementById("canvas1");
				if(!c1.getContext){
					alert("Canvas API is not supported by your browser!");
					return;
				}
				
				var d = data.split(",");
				
				barIndex = 0;
				var ctx = c1.getContext("2d");
				ctx.translate(-100*counter, 0);
				ctx.clearRect(0, 0, c1.width, c1.height);
				counter = d.length;
				
				for(var i=0; i<d.length; i++){
					fnDrawBar(ctx, d[i]);
					ctx.translate(100, 0);
				}
			}		
		</script>
	</head>
	<body>
	<h1 style="background:lightblue">HTML5 Demos - Canvas</h1>
	<form name="f1">
	Enter numbers separated by comma: 
	<input type="text" size="50" name="data" value="29, 33, 73, 10, 99" />
	<input type="button" onclick="fnDrawChart(this.form.data.value)" 
		value="Print chart" />
	</form>
	<canvas id="canvas1" width="1500" height="400">
	</canvas>
	
	</body>
</html>