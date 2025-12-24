(function(){
    const results = {
        domain: document.domain,
        canAccessTop: false,
        canReadParentDOM: false,
        canReadLocalStorage: false,
        cookies: null,
    };

    // Test accès top
    try {
        const _ = window.top.document; 
        results.canAccessTop = true;
        results.canReadParentDOM = true;
    } catch(e){}

    // Test accès storage
    try {
        results.canReadLocalStorage = !!localStorage.length;
    } catch(e){}

    // Test cookie non-HttpOnly
    try {
        results.cookies = document.cookie || "Aucun cookie lisible";
    } catch(e){}

    // --- Affichage propre ---
    alert(
        "[AUDIT IFRAME]\n" +
        "document.domain = " + results.domain + "\n" +
        "Accès DOM parent : " + (results.canReadParentDOM ? "✔️ OUI" : "❌ NON") + "\n" +
        "Accès localStorage : " + (results.canReadLocalStorage ? "✔️ OUI" : "❌ NON") + "\n" +
        "Cookies lisibles : " + (results.cookies ? results.cookies : "❌ NON")
    );

    console.log("=== Rapport de sécurité IFRAME ===");
    console.log(results);
})();
