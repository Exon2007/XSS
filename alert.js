(() => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";

  iframe.onload = () => {
    console.log("iframe loaded");
    console.log("origin:", iframe.contentWindow.location.origin);
    console.log("contentDocument exists:", !!iframe.contentDocument);

    try {
      const s = iframe.contentDocument.createElement("script");
      s.textContent = "alert('executed')";
      iframe.contentDocument.body.appendChild(s);
      console.log("script injected");
    } catch (e) {
      console.error("DOM write blocked:", e);
    }

    console.log("final iframe HTML:", iframe.contentDocument.documentElement.outerHTML);
  };

  document.documentElement.appendChild(iframe);
})();
