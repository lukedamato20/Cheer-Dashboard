
var temp_emotion = [];

function getemotionbtn(event){
    
    event.preventDefault();

    var data = {temp : "temp"};


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../../EmotionDet', true);
    xhr.setRequestHeader('content-type', 'application/json');
    
    xhr.onload = function(){
        temp_emotion = JSON.parse(this.responseText);
        console.log(temp_emotion);

        

        if(temp_emotion.emotion === 'happy'){
            window.location.href = "http://127.0.0.1:5000/happy";
            console.log(temp_emotion);   
        }
        else if(temp_emotion.emotion === 'tired'){
            window.location.href = "http://127.0.0.1:5000/tired";
            console.log(temp_emotion);
        }
        else if (temp_emotion.emotion === 'sad'){
            window.location.href = "http://127.0.0.1:5000/sad";
            console.log(temp_emotion);
        }
        else{
            window.location.href = "http://127.0.0.1:5000/tired";
            console.log(temp_emotion);
        }
    
        
    }
    
    xhr.send(JSON.stringify(data));
}

const emo_btn = document.getElementById('btn');
emo_btn.addEventListener('click', getemotionbtn);
