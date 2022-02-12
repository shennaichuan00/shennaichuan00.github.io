/* 
变换h1标题的文字内容
let myVariable=document.querySelector('h1');
myVariable.textContent='HelloWorld';
*/
/*
为页面设置点击事件
document.querySelector('html').onclick=function(){
    alert('别戳我，我怕疼');
}
*/
let myImage=document.querySelector('img');
myImage.onclick=function(){
  let mySrc=myImage.getAttribute('src');
  if(mySrc==='https://raw.githubusercontent.com/shennaichuan00/shennaichuan00.github.io/main/images/denglong.jpg'){
     myImage.setAttribute('src','https://raw.githubusercontent.com/shennaichuan00/shennaichuan00.github.io/main/images/yinghua.jpg');
  }else{
    myImage.setAttribute('src','https://raw.githubusercontent.com/shennaichuan00/shennaichuan00.github.io/main/images/denglong.jpg');
  }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('请输入你的名字。');
    if(!myName||myName===null){
    setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla酷毙了，'+myName;
    }
    
}
if(!localStorage.getItem('name')){
setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla酷毙了，'+storedName;
}
myButton.onclick=function(){
    setUserName();
}
