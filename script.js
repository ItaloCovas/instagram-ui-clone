var i = 0; //Start point of slide
var images = [];
var time = 3000;

//Image list
images[0] = './img/phone-slide-1.jpg';
images[1] = './img/phone-slide-2.jpg';
images[2] = './img/phone-slide-3.jpg';
images[3] = './img/phone-slide-4.jpg';
images[4] = './img/phone-slide-5.jpg';

//Function to change the image

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;