var banner = document.getElementById("banner");
var lis = banner.getElementsByTagName("li");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var index = 0;
var time = 0;

// 自动轮播以及手动轮播
function clearActive() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("active");
    }
}

function autoBanner() {
    setInterval(function () {
        time++; 
        if (time === 20) {
            time=0;
            clearActive();
            lis[index].classList.add("active");
            index++;
            if (index >= 5) {
                index = 0;
            
            
            }
        }
    }, 200)
}

rightBtn.onclick = function () {
    time=0;
    clearActive();
    index++;
    if (index > 4) {
        index = 0;
    }
    lis[index].classList.add("active");
}

leftBtn.onclick = function () {
    time=0;
    clearActive();
    index--;
    if (index < 0) {
        index = 4;
    }
    lis[index].classList.add("active");
}


autoBanner();

// 抢购倒计时
setInterval(function(){
    setTime(10,0)
},1000)

// 自己选择抢购开始的时间
function setTime(sethours,setminutes){
var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var times=document.getElementById("times");
var timetext=document.getElementById("timetext");
var today=new Date();
var year=today.getFullYear();
var month=today.getMonth();
var day=today.getDate();
var settime = new Date(year,month,day,sethours,setminutes,0);
var s1=(settime.getTime()-today.getTime())/1000;
var h=parseInt(s1/3600);
var m=parseInt((s1%3600)/60);
var s=parseInt((s1%3600)%60);
h=add0(h);
m=add0(m);
s=add0(s);
setminutes=add0(setminutes);
sethours=add0(sethours);
if(h==="00"  &&  m==="00" && s==="00" ||s1<0){
    hours.innerHTML="00";
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    timetext.innerHTML="本场已结束！！！";
}else{
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
}
times.innerHTML=sethours+":"+setminutes+"场"
}

function add0(num){
    if(num<=9 && num>=0){
       return "0"+num;
    }else{
        return num;
    }
}

// section3热门与影音切换
var sectionSmallItem=document.getElementsByClassName("section_smallitem");
var sectionRight=document.getElementsByClassName("section_right");
function removeClass(i){
        if(i===0||i===1){
            sectionSmallItem[0].classList.remove("active");
            sectionSmallItem[1].classList.remove("active");
            sectionRight[0].classList.remove("active");
            sectionRight[1].classList.remove("active");
        }else if(i===2||i===3||i===4){
            sectionSmallItem[2].classList.remove("active");
            sectionSmallItem[3].classList.remove("active");
            sectionSmallItem[4].classList.remove("active");
            sectionRight[2].classList.remove("active");
            sectionRight[3].classList.remove("active");
            sectionRight[4].classList.remove("active");
        }else if(i===5||i===6){
            sectionSmallItem[5].classList.remove("active");
            sectionSmallItem[6].classList.remove("active");
            sectionRight[5].classList.remove("active");
            sectionRight[6].classList.remove("active");
        }else if(i===7||i===8){
            sectionSmallItem[7].classList.remove("active");
            sectionSmallItem[8].classList.remove("active");
            sectionRight[7].classList.remove("active");
            sectionRight[8].classList.remove("active");
        }else{
            sectionSmallItem[9].classList.remove("active");
            sectionSmallItem[10].classList.remove("active");
            sectionRight[9].classList.remove("active");
            sectionRight[10].classList.remove("active");
        }
}

for(let i=0;i<sectionSmallItem.length;i++){
    sectionSmallItem[i].onmouseenter=function(){
    removeClass(i);
    sectionSmallItem[i].classList.add("active");
    sectionRight[i].classList.add("active");
    }
}

// watch.onmouseenter=function(){
//     removeClass();
//     watch.classList.add("active");
//     sectionRight[1].classList.add("active");

// console.log(sectionSmallItem.length)
// console.log(sectionRight.length)