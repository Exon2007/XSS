new MutationObserver(() => {
  const modal = document.querySelector('ed-modal-reconnexion');
  const pwd = document.getElementById('password');
  if (modal && pwd) {
    alert(pwd.value);
  }
}).observe(document.body, { childList: true, subtree: true });
