const observer = new MutationObserver(() => {
  const pwdInput = document.querySelector('.mdp input[type="password"]');
  if (pwdInput) {
    observer.disconnect();
    console.log("decl");
    setTimeout(() => {
      alert(pwdInput.value);
    }, 1000);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
