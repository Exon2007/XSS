const f = document.querySelector("iframe");
const doc = f?.contentWindow?.document;

if(doc){
  const p = doc.createElement("p");
  p.textContent = "Test d’ajout dans MA session depuis l’iframe";
  p.style.color = "blue";
  doc.body.appendChild(p);
} else {
  console.log("Accès non autorisé ou iframe introuvable.");
}
