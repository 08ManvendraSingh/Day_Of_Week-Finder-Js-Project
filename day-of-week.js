var a=document.getElementById('show');
var b=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var time=new Date();
var d=time.getDay();
a.innerHTML=b[d];