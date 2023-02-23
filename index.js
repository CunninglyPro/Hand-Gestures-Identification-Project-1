Webcam.set({
    width: 300,
    height: 300,
    format: 'jpeg',
    jpeg_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });

}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CaSmLCc3z/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded!");
}