let a;

setTimeout(()=>{
  const b=document.getElementById("password");
  if(b)a=b.value;
},1000);

setTimeout(()=>{
  if(a)alert(a);
},1500);
