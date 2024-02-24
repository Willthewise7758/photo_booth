var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function run(event)
{
    console.log(event);

    content = event.results[0][0].transcript;



    if(content == "take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak()
{

    synth = window.speechSynthesis;
    speak_data = "taking 3 selfies in 15 seconds";

    speakthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(speakthis);
    Webcam.attach('#camera');




    
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        

    },5000);
    setTimeout(function(){
        img_id="selfie2";
        take_snapshot2();
        

    },10000);
    setTimeout(function(){
        img_id="selfie3";
        take_snapshot3();
        

    },15000);
}


function take_snapshot()
{
console.log(img_id);

Webcam.snap(function(data_uri) {
    
    
    
        
    a = data_uri;
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    console.log(a);
});

}


function take_snapshot2()
{
console.log(img_id);

Webcam.snap(function(data_urb) {
    
    
    
       
    b = data_urb;
    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_urb+'"/>';
    console.log(b);
});

}
function take_snapshot3()
{
console.log(img_id);

Webcam.snap(function(data_urc) {
    
    
    
       
    c = data_urc;
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_urc+'"/>';
    console.log(c);
});

}


