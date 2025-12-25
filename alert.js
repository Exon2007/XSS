(function iframeDiagnostic(){

  const iframe = document.querySelector("iframe");

  if(!iframe){
    console.log("❌ Iframe introuvable dans la page");
    return;
  }
  console.log("🟡 Iframe trouvée :", iframe);

  // Fonction pour diagnostiquer l'iframe après le load
  function diagnoseIframe(){
    try {
      const doc = iframe.contentWindow?.document;
      if(!doc){
        console.log("🚫 Accès au document impossible (origine différente ou sandbox)");
        return;
      }
      console.log("📄 Document accessible :", doc);

      let tries = 0;
      const interval = setInterval(() => {
        tries++;

        const bouton = doc.querySelector("a.item-actif, a[aria-label='Accueil']");
        if(bouton){
          console.log(`🎯 Élément cliquable trouvé après ${tries*200}ms`);
          
          // Test safe du clic
          bouton.addEventListener("click", () => {
            console.log("✅ Clic détecté sur l'élément 'Accueil'");
          });

          // Clic programmatique pour test
          const event = new MouseEvent("click", { bubbles: true, cancelable: true });
          bouton.dispatchEvent(event);

          clearInterval(interval);
          return;
        }

        if(tries > 20){ // ~4 secondes max
          console.log("⏳ Élément cliquable non trouvé après plusieurs tentatives");
          clearInterval(interval);
        }
      }, 200);

      // Diagnostic supplémentaire : cookies et localStorage
      try {
        console.log("🍪 Cookies accessibles :", document.cookie || "Aucun cookie lisible");
      } catch { console.log("🍪 Cookies non accessibles"); }

      try {
        console.log("💾 localStorage accessible :", !!localStorage.length);
      } catch { console.log("💾 localStorage non accessible"); }

      console.log("🔹 Diagnostic complet prêt");

    } catch(e){
      console.log("🚫 Erreur lors du diagnostic :", e);
    }
  }

  // Vérifier si iframe déjà chargée ou attendre le load
  if(iframe.contentWindow.document.readyState === "complete"){
    diagnoseIframe();
  } else {
    iframe.addEventListener("load", () => {
      console.log("📌 Iframe load détecté");
      diagnoseIframe();
    });
  }

})();
