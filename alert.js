const wrapper = document.querySelector(".html-object-embed.ck-widget");

if(!wrapper){
  console.log("❌ Aucun wrapper CKEditor trouvé");
} else {
  console.log("🟡 Wrapper CKEditor détecté :", wrapper);
  console.log("ℹ️ contenteditable =", wrapper.getAttribute("contenteditable"));

  // Vérification de capture d'événements
  wrapper.addEventListener("click", () => {
    console.log("pas transmis à l'iframe");
  });
}

alert(wrapper);

console.log("c'est :" + wrapper); 

const a = (sessionstorage.getitem("credentials"));
