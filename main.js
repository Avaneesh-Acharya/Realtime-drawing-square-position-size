noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristX = 0
function setup() {
    canvas = createCanvas(630, 790)
    canvas.position(770, 100)
    video = createCapture(VIDEO)
    video.size(750, 450)
    video.position(50, 200)
    PoseNet = ml5.poseNet(video, model_loaded())
    PoseNet.on('pose', got_poses)
}
function model_loaded() {
    console.log("Model is initialized")
}
function got_poses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x
        difference = floor(leftWristX - rightWristX)
    }
}
function draw() {
    background("#999999")
    fill("#2A93C3")
    stroke("#010101")
    square(noseX, noseY, difference)
    document.getElementById("square_sides").innerHTML = "Width and Height of square will be " + difference + "px"
}
