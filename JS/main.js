var imgArr=["/Src/img/Clothes/1_clothes.jpg",
"/Src/img/Clothes/2_clothes.jpg",
"/Src/img/Clothes/3_clothes.jpg",
"/Src/img/Clothes/4_clothes.jpg",
"/Src/img/Makupe/1_makupe.jpg",
"/Src/img/Makupe/2_makupe.jpg",
"/Src/img/Makupe/3_makupe.jpg",
"/Src/img/Phones/1_phones.jpg",
"/Src/img/Phones/2_phones.jpg",
"/Src/img/Phones/3_phones.jpg",
"/Src/img/Phones/4_phones.jpg",
"/Src/img/Cars/1_cars.jpg",
"/Src/img/Cars/2_cars.jpg",
"/Src/img/Cars/3_cars.jpg",
]
var imgCount=0;
var image = document.getElementById("img");

var imgCount2=imgArr.length;

// console.log(imgCount2)
var int ;

function stop(){
    clearInterval(int);
}

function previous(){
    stop();
    if(imgCount2 == 0){
        imgCount2=imgArr.length
    }
    imgCount2--;
    if(imgCount2<=imgArr.length){
        image.src=imgArr[imgCount2];
    }else{
        imgCount2=0;
        image.src=imgArr[imgCount2];
    }
}

var next1 =function (){
    imgCount++;
    if(imgCount>=imgArr.length){
        imgCount=0
        image.src=imgArr[imgCount];
    }else{
        image.src=imgArr[imgCount];
    }
}

var next =function (){
    stop();
    imgCount++;
    if(imgCount>=imgArr.length){
        imgCount=0
        image.src=imgArr[imgCount];
    }else{
        image.src=imgArr[imgCount];
    }
}

function play(){
    // console.log("Hello")
    int=setInterval(next1,1500);
}
play();

let phones = document.getElementById("phones");
let clothes = document.getElementById("clothes");
let makupe = document.getElementById("makupe");
let cars = document.getElementById("cars");

document.getElementById("phonesEvent").addEventListener('click',function(){
    clothes.style.display="none";
    makupe.style.display="none";
    cars.style.display="none";
    phones.style.display="";
})

document.getElementById("makupeEvent").addEventListener('click',function(){
    clothes.style.display="none";
    makupe.style.display="";
    cars.style.display="none";
    phones.style.display="none";
})

document.getElementById("clothesEvent").addEventListener('click',function(){
    clothes.style.display="";
    makupe.style.display="none";
    cars.style.display="none";
    phones.style.display="none";
})

document.getElementById("carsEvent").addEventListener('click',function(){
    clothes.style.display="none";
    makupe.style.display="none";
    cars.style.display="";
    phones.style.display="none";
})

document.getElementById("restEvent").addEventListener('click',function(){
    clothes.style.display="";
    makupe.style.display="";
    cars.style.display="";
    phones.style.display="";
})

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
}

function setCookie(cName, cValue) {
    document.cookie = cName + "=" + cValue +";";
}


var counter =Number( getCookie("counter"));
function addBtn(){
    setCookie("counter",++counter)
    document.getElementById("count").innerHTML = `(${getCookie("counter")})`;
}


// form Validation 

