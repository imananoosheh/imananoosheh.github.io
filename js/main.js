const currentYear = new Date().getFullYear()
function xYZ() {
    const replacement = `<div class="row text-center"> 
        <div class="col-lg-6 col-md-12 social-badge"><a href="https://www.linkedin.com/in/imananoosheh/"><img src="img/badges/LinkedIn_Logo_Modified.svg" alt="My GitHub Profile"></a></div> 
        <div class="col-lg-6 col-md-12 social-badge"><a href="https://github.com/imananoosheh/"><img src="img/badges/GitHub_logo_2013_modified.svg" alt="My GitHub Profile"></a></div> 
        <div class="col-12"><p>Copyright © 2015-${currentYear} Iman Anooshehpour All Rights Reserved.</p></div> 
        </div>`;
    return replacement;
}
$('#contact').empty().html(xYZ());

function responsiveMainBody() {
    var mbc = $('#main-body');
    var footerHeight = $('FOOTER').height();
    var headerHeight = $('HEADER').height();
    var mbcHeight = window.innerHeight - footerHeight - headerHeight - 170;
    //var mbcHeight = window.innerHeight * 0.4;
    mbc.height(mbcHeight);
    if (document.getElementById("embedPDF")) {
        var abc = $('#main-body-child');
        $(abc).css("width", "96%");
        var embed_PDF_Height = document.getElementById("embedPDF");
        var elementwidth = ($('#main-body-child').width * 0.9);
        embed_PDF_Height.setAttribute("height", mbcHeight+"px");
        embed_PDF_Height.setAttribute("width", "96%");
    }

}

function startupFunctions() {
    responsiveMainBody();
}