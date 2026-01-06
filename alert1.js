const observer = new MutationObserver(() => {
  const pwdInput = document.querySelector('.mdp input[type="password"]');
  if (pwdInput) {
    observer.disconnect();
    setTimeout(() => {
      alert(pwdInput.value);
    }, 1000);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
