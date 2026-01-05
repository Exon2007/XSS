setTimeout(() => {
    const pwd = document.getElementById("password");
    const showBtn = document.getElementById("show-password");

    if (!pwd) return;

    if (showBtn) {
        showBtn.click();
    }

    setTimeout(() => {
        pwd.focus();
        pwd.click();

        setTimeout(() => {
            alert(pwd.value);
        }, 100);

    }, 200);

}, 3000);
