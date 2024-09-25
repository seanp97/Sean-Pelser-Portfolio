
const FooterYear = () => {
    const year = document.getElementById('date');
    year.innerText = new Date().getFullYear();
}

FooterYear();