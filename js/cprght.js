function xYZscroll() {
    $("html, body").animate({
        scrollTop: 100000
    }, 600);
}

currentYear = new Date().getFullYear()
var copyright = '';
copyright += '<div id="copyright" class="my-2">' +
    '<div class="navbar-collapse collapse" id="navbarsExample01">' +
    '<div class="navbar-nav mx-auto my-auto">' +
    '<div class="row">' +
    '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">' +
    '<a class="border border-org px-1 py-1 mx-1" href="https://www.linkedin.com/in/imananoosheh">Iman Anooshehpour</a>' +
    '</div>' +
    '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3">' +
    '<a class="border border-org px-1 py-1 mx-1" href="https://www.linkedin.com/in/masoudsadeghi1996">Masoud Sadeghi</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<span>| Designed & Developed by  </span>' +
    '<button class="border border-org navbar-toggler collapsed" onclick="xYZscroll()" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation" data-placement="top">' +
    'Team 0x0' +
    '</button>' +
    '<span>  © '+ currentYear +' | All rights reserved. |</span>' +
    '</div>';


$("footer").after(copyright);
