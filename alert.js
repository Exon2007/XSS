(() => {
  const iframe = document.querySelector('iframe');
  const t0 = performance.now();

  iframe.addEventListener('load', () => {
    const check = setInterval(() => {
      try {
        const doc = iframe.contentDocument;
        if (doc && doc.body) {
          clearInterval(check);

          const s = doc.createElement('script');
          s.textContent = `
            console.log('[iframe] script injected');
            console.log('[iframe] domain:', document.domain);
          `;
          doc.body.appendChild(s);

          console.log('script injected at', (performance.now() - t0).toFixed(2), 'ms');
        }
      } catch (e) {
        clearInterval(check);
        console.log('access denied');
      }
    }, 10);
  });
})();
