(function(){
  const iframe = document.querySelector("iframe");
  if(!iframe){
    console.log("❌ Pas d'iframe trouvée dans cette page");
    return;
  }

  console.log("🟡 Iframe trouvée :", iframe);

  iframe.addEventListener("load", () => {
    console.log("📌 Événement LOAD déclenché sur l'iframe");

    try {
      const doc = iframe.contentWindow?.document;
      console.log("📄 Accès document :", doc);

      if(!doc){
        console.log("🚫 Pas d'accès au document → origine différente ou blocage navigateur");
        return;
      }

      const bouton = doc.querySelector("a.item-actif, a[aria-label='Accueil']");
      console.log("🎯 Élément détecté :", bouton);

      if(!bouton){
        console.log("ℹ️ Le script accède au DOM mais l'élément n'est pas encore présent (chargement Angular/JS?)");
      }

    } catch(err){
      console.log("🚫 Erreur d'accès :", err);
    }
  });
})();
