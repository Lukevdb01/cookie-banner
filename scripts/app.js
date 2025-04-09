let popup = document.getElementById('cookiePopup');
const check_cookie = () => {
    let input = get_cookie('test_website_cookie');
    if (input == "allow") {
        popup.classList.add('hide');
        popup.classList.remove('show');
        opt_in_cookie();
    } else if (input == "reject") {
        popup.classList.add('hide');
        popup.classList.remove('show');
    } else {
        popup.classList.add('show');
        popup.classList.remove('hide');
    }
}

const opt_in_cookie = () => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-K63M5M9G67";
    script.async = true;

    const element = document.createElement('script');
    element.innerHTML +=
        `window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-K63M5M9G67');`;

    document.head.appendChild(script);
    document.head.appendChild(element);
}

const get_cookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

const set_cookie = (cookie_value) => {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = `${cookie_value}; expires = " + d + ";`;
    popup.classList.add('hide');
    popup.classList.remove('show');
}