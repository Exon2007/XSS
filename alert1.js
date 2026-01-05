// Vider le body
console.log(document.body);

// Attendre 3 secondes (3000 ms)
setTimeout(() => {
    alert(document.getElementById("password").value);
}, 3000);

setTimeout(() => {
    document.getElementById("connexion").click();
}, 3000);
