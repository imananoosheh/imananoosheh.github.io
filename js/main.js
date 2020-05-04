function xYZ() {
    var replacement = '';
    replacement += '<div class="row text-center">' +
        '<div class="col-lg-6 col-md-12 social-badge"><a href="https://www.linkedin.com/in/imananoosheh/"><img src="img/badges/LinkedIn_Logo_Modified.svg" alt="My GitHub Profile"></a></div>' +
        '<div class="col-lg-6 col-md-12 social-badge"><a href="https://github.com/imananoosheh/"><img src="img/badges/GitHub_logo_2013_modified.svg" alt="My GitHub Profile"></a></div>' +
        '<div class="col-12"><p>Copyright © 2019-2020 Iman Anooshehpour All Rights Reserved.</p></div>' +
        '</div>';
    return replacement;
}
$('#contact').empty().html(xYZ());

function responsiveMainBody() {
    var mbc = $('#main-body');
    var footerHeight = $('FOOTER').height();
    var headerHeight = $('HEADER').height();
    var mbcHeight = window.innerHeight - footerHeight - headerHeight - 150;
    //var mbcHeight = window.innerHeight * 0.4;
    mbc.height(mbcHeight);
}

function startupFunctions() {
    responsiveMainBody();
}