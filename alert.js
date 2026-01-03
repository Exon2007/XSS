(() => {
  const iframe = document.createElement("iframe");
  iframe.src = location.origin;
  iframe.style.width = "300px";
  iframe.style.height = "150px";
  document.body.appendChild(iframe);

  iframe.onload = () => {
    console.log("iframe loaded");
    try {
      const doc = iframe.contentDocument;
      console.log("contentDocument accessible:", !!doc);
      console.log("iframe origin:", iframe.contentWindow.location.origin);
      console.log("parent origin:", location.origin);
      console.log("same origin:", iframe.contentWindow.location.origin === location.origin);
      console.log("iframe body:", doc.body);
      console.log("iframe body innerHTML length:", doc.body.innerHTML.length);
    } catch (e) {
      console.log("DOM access blocked:", e.toString());
    }
  };
})();
