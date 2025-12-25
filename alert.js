(function waitForElement(){
  const iframe = document.querySelector("iframe");
  if(!iframe) return console.log("❌ Iframe introuvable");

  let tries = 0;
  const check = setInterval(() => {
    tries++;

    try {
      const doc = iframe.contentWindow?.document;
      const bouton = doc?.querySelector("a.item-actif, a[aria-label='Accueil']");
      
      if(bouton){
        console.log("🎯 Élément détecté après", tries*200, "ms");
        clearInterval(check);
      }

      if(tries > 20){ 
        console.log("⏳ Abandon : élément introuvable pour le moment");
        clearInterval(check);
      }
    } catch(e){
      console.log("🚫 Accès impossible :", e);
      clearInterval(check);
    }
  }, 200);
})();
