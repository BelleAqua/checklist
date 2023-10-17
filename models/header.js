/** @format */

const header = document.getElementsByTagName('header')?.item(0);

// header.classList.add('center-top');

header.innerHTML = `
    <div class="header flex-dir">
        <a class="header-link" href="https://belleaqua.be"><img class="logo" src="assets/belleaqua.png" /></a>
    </div>
   
    <div class="header flex-dir">
        <a class="header-link" href="http://remote.belleaqua.be:8081"><img class="logo" src="assets/favicon.png" /></a>
        <a class="header-link" href="http://192.168.0.3"><img class="logo" src="assets/cmr.png" /></a>
        <a class="header-link" href="https://app.robaws.com"><img class="logo" src="assets/robaws.png" /></a>
    </div>

    <div class="header flex-dir">
        <a class="header-link"><img class="logo" src="assets/setup.png" /></a>
        <a class="header-link" href="."><img class="logo" src="assets/home.png" /></a>
    </div>
`;
