dif=0;
rwX=0;
lwX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,400);
    canvas.position(560,115);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log('poseNet Is Initialized!');
}
function draw(){
    background('#5A5A5A');

    textSize(dif);
    fill('#80080');
    text("Satchit",200,200);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);


        lwX=results[0].pose.leftWrist.x;
        rwX=results[0].pose.leftWrist.y;
        dif=floor(lwX-rwX);

    }    
}