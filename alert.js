(function(){
  const iframe = document.querySelector("iframe");
  try {
    const doc = iframe.contentWindow.document;
    const el = doc.body;

    // tentative de modification
    const test = document.createElement("div");
    test.textContent = "Test d'injection innocente";
    el.appendChild(test);

    alert("👌 Modification autorisée : l'environnement accepte les changements");
  } catch {
    alert("🚫 Modification bloquée : sandbox, parent protecteur ou interaction interdite");
  }
})();
