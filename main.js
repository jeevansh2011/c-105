
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach('#camera');

function take_snapshot (){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';

    })
}

classifier=ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded(){
    console.log('model is loaded')
}
function check(){
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error){
    console.error(error);
}else{
    console.log (results);
    document.getElementById("objectname").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}
