(() => {
  const t0 = performance.now();

  const checkIframe = setInterval(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      clearInterval(checkIframe);

      iframe.addEventListener('load', () => {
        const checkDOM = setInterval(() => {
          try {
            const doc = iframe.contentDocument;
            if (doc && doc.body) {
              clearInterval(checkDOM);

              const s = doc.createElement('script');
              s.textContent = `
                console.log('[iframe] script injected');
                console.log('[iframe] domain:', document.domain);
              `;
              doc.body.appendChild(s);

              console.log('script injected at', (performance.now() - t0).toFixed(2), 'ms');
            }
          } catch (e) {
            clearInterval(checkDOM);
            console.log('access denied');
          }
        }, 10);
      });
    }
  }, 10);
})();
