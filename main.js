let due=new Date();

document.querySelector('body').addEventListener('click',(event)=>{
  t=prompt('YYYY/MM/DD HH:MM:SS.MMM');
  due=new Date(t);
});

setInterval(()=>{
  now=new Date();
  time=(due-now)/1000;
  let text=''
  if(time<=0){
    text='Passed';
  }
  else{
    logtime=Math.log(time)/Math.log(10);
    text=logtime.toFixed(2);
  }
  document.querySelector('#countdown').innerHTML=text;
},1);
