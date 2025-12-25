(function(){
    const iframe = document.querySelector("iframe");
    if(!iframe){
        alert("Aucune iframe trouvée.");
        return;
    }

    try {
        const doc = iframe.contentWindow.document;
        const html = doc.documentElement.innerHTML;
        const debut = html.slice(0, 300); // on limite par sécurité
        alert("Début du HTML (si autorisé) :\n\n" + debut);
    } catch(e){
        alert("Impossible d'accéder au contenu : origine différente ou accès non autorisé.");
    }
})();
