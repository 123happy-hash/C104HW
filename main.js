Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function Cam(){
    Webcam.snap(function(data_uri){
        document.getElementById("Output").innerHTML = "<img id = 'captured_image' src = "+ data_uri+">";
    });
}

console.log('ml5 version is ', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FIq8whwcI/model.json", modelLoaded);
function modelLoaded(){
    console.log('Model is intialized');
}