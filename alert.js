const iframe = document.querySelector("iframe");
iframe.addEventListener("load", () => {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const clickable = doc.querySelector("button, a, [role='button'], input[type=button], input[type=submit]");
  if(clickable){
    console.log("🎯 Élément cliquable trouvé sur Firefox !");
  } else {
    console.log("ℹ️ Aucun élément cliquable détecté");
  }
});
