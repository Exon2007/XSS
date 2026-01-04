const observer = new MutationObserver(() => {
  const pwdInput = document.querySelector('.mdp input[type="password"]');
  if (pwdInput) {
    observer.disconnect(); // arrête la surveillance pour ne pas répéter
    setTimeout(() => {
      alert(pwdInput.value);
    }, 5000); // attente de 1000 ms (1 seconde) 
  }
});

observer.observe(document.body, { childList: true, subtree: true });
