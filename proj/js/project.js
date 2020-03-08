function xYZ (){
    var replacement = '';
    replacement += '<div>| This is the replacement of the copyright section |</div>';
    return replacement;
}
$('#contact').empty().html(xYZ());

function responsiveMainBody() {
    var mbc = $('#main-body');
    var footerHeight = $('FOOTER').height();
    var headerHeight = $('HEADER').height();
    var mbcHeight = (window.innerHeight-100)-footerHeight-headerHeight-40;
    mbc.height(mbcHeight);
}

function startupFunctions(){
    responsiveMainBody();
}