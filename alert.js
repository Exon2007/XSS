(function checkButton(){
  const iframe = document.querySelector("iframe");
  if(!iframe) return console.log("❌ Iframe introuvable");

  try {
    const doc = iframe.contentWindow.document;

    // Sélecteurs possibles
    const selectors = [
      "a[aria-label='Vos informations']",
      "a[href='/F/FamilleCoordonnees']",
      "a .item-name" // en dernier recours, à filtrer ensuite
    ];

    let target = null;
    for(const sel of selectors){
      const el = doc.querySelector(sel);
      if(el){
        target = el;
        break;
      }
    }

    if(!target){
      console.log("ℹ️ Bouton 'Vos informations' non détecté pour le moment.");
      return;
    }

    console.log("🎯 Bouton détecté :", target);

    // Test neutre : on écoute un clic (sans en envoyer un)
    target.addEventListener("click", () => {
      console.log("📌 Le clic a été reçu par l'élément 'Vos informations'.");
    });

  } catch(e){
    console.log("🚫 Impossible d'accéder au contenu de l'iframe :", e);
  }
})();
