(() => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";

  iframe.srcdoc = `
    <!doctype html>
    <html>
      <body>
        <script>
          console.log("iframe script executing");
          alert(1);
        </script>
      </body>
    </html>
  `;

  iframe.onload = () => {
    console.log("iframe loaded");
    console.log("contentDocument accessible:", !!iframe.contentDocument);
    console.log("iframe origin:", iframe.contentWindow.location.origin);
    console.log("parent origin:", window.location.origin);
    console.log("same origin:", iframe.contentWindow.location.origin === window.location.origin);
    console.log("iframe body:", iframe.contentDocument.body);
  };

  document.documentElement.appendChild(iframe);
})();
