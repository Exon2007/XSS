const iframe = document.querySelector("iframe");
iframe.addEventListener("load", () => {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const clickable = doc.querySelector("button, a, [role='button'], input[type=button], input[type=submit]");
  if(clickable){
    alert("🎯 Élément cliquable trouvé sur Firefox !");
  } else {
    alert("ℹ️ Aucun élément cliquable détecté");
  }
});
