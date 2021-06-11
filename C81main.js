canvas = document.getElementById("canvas_bravo");
ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(250, 200, 50, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(350, 200, 50, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.arc(450, 200, 50, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.arc(300, 240, 50, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.arc(400, 240, 50, 0, 2*Math.PI);
    ctx.stroke();