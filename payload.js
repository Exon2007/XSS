// =============================================
// PAYLOAD DE TEST - XSS DEMONSTRATION
// =============================================

(function() {
    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executePayload);
    } else {
        executePayload();
    }

    function executePayload() {
        console.log('[XSS] Payload chargé avec succès');
        
        // 1. Notification discrète
        showNotification();
        
        // 2. Collecte d'infos basiques (démonstration)
        collectBasicInfo();
        
        // 3. Test d'interaction
        addTestButton();
    }

    function showNotification() {
        // Créer une notification style "toast"
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #00ff00;
            color: black;
            padding: 15px;
            border-radius: 5px;
            z-index: 999999;
            font-family: Arial;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        toast.textContent = '✅ XSS Test Réussi';
        document.body.appendChild(toast);
        
        // Supprimer après 3 secondes
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    function collectBasicInfo() {
        // Informations basiques (démonstration seulement)
        const info = {
            url: window.location.href,
            userAgent: navigator.userAgent,
            cookies: document.cookie ? 'Cookies présents' : 'Aucun cookie',
            timestamp: new Date().toISOString()
        };
        
        console.log('[XSS] Informations collectées:', info);
    }

    function addTestButton() {
        // Ajouter un bouton de test discret
        const btn = document.createElement('button');
        btn.textContent = 'XSS Test';
        btn.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: #ff4444;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 3px;
            cursor: pointer;
            z-index: 999998;
            font-size: 12px;
        `;
        
        btn.onclick = function() {
            alert('🚨 XSS Payload Exécuté avec Succès!\n\nCeci est une démonstration de sécurité.');
            this.remove();
        };
        
        document.body.appendChild(btn);
    }

    // Nettoyage si la page est rechargée
    window.addEventListener('beforeunload', function() {
        console.log('[XSS] Nettoyage du payload');
    });

})();

// Version alternative plus discrète
console.log('Script de test chargé - XSS Simulation');
