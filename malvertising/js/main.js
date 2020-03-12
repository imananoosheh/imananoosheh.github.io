function xYZ() {
    var replacement = '';
    replacement += '<div>| This is the replacement of the copyright section |</div>';
    return replacement;
}
$('#contact').empty().html(xYZ());

function responsiveMainBody() {
    var mbc = $('#main-body');
    var footerHeight = $('FOOTER').height();
    var headerHeight = $('HEADER').height();
    var mbcHeight = (window.innerHeight - 100) - footerHeight - headerHeight - 40;
    mbc.height(mbcHeight);
}
//left: 11%-71%
//top: 2%-98%
function xXX(zindex) {
    var colors = ["#fff600", "#ffc302", "#ff8f00", "#ff5b00", "##ff0505"];
    var color= colors[Math.floor(Math.random() * 4)];
    var topValue = Math.floor(Math.random() * 48) +2;
    var leftValue = Math.floor(Math.random() * 71);
    var code = '<div style=z-index:'+zindex+' !important;"><img src="img/1.png" ' + 'style="width: 350px !important; position:absolute !important;background-color:' + 
    color + ' !important;top:'+topValue+'% !important;left:'+leftValue+'% !important;z-index:'+zindex+' !important;" alt="1"></img></div>';
    return code;
}

document.getElementById("promoclose").onclick = function something(){
    // var bodyheight = $('#main-body').height();
    // var bodywidth = $('#main-body').width();

    var selector = document.getElementById('imgid');
    var i=0;
    while(i<150){
        //selector.innerHTML+= xXX(i+100);
        setTimeout( function(){selector.innerHTML+= xXX(i+100)},200);
        i++;
    }
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    console.log(data)
})
    
}
document.getElementById("getlocationbtn").onclick = function something(){
    // var bodyheight = $('#main-body').height();
    // var bodywidth = $('#main-body').width();

    var selector = document.getElementById('imgid');
    var i=0;
    while(i<150){
        //selector.innerHTML+= xXX(i+100);
        setTimeout( function(){selector.innerHTML+= xXX(i+100)},200);
        i++;
    }
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    console.log(data)
})
    
}

function startupFunctions() {
    responsiveMainBody();
}