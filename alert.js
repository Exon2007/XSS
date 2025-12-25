(function(){
  const iframe = document.querySelector("iframe");
  if(!iframe){
    alert("❌ Aucune iframe trouvée");
    return;
  }

  try {
    const doc = iframe.contentWindow.document;

    // On cherche un bouton cliquable dans ta propre session
    const clickable = doc.querySelector("button, a, [role='button'], input[type=button], input[type=submit]");

    if(!clickable){
      alert("ℹ️ Aucun élément cliquable détecté.");
      return;
    }

    // On ajoute un écouteur pour voir si l’event est capté
    clickable.addEventListener("click", () => {
      console.log("🎯 Clic détecté dans l'iframe !");
      alert("🎯 Clic détecté / event accepté dans l'iframe");
    });

    // On tente un clic programmatique
    clickable.click();

    alert("🧪 Test envoyé : si tu vois l'autre message, les clics fonctionnent.");

  } catch(e){
    alert("🚫 Clic impossible : iframe protégée, sandbox ou blocage d'interaction.");
  }
})();
