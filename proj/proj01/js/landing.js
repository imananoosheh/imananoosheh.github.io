function makeItGlitchy(id, nth){
    function randRange(data) {
        var newTime = data[Math.floor(data.length * Math.random())];
        return newTime;
    }
    
    function toggleSomething() {
        var timeArray = new Array(250, 2000, 500, 1000, 1500);
    
        // do stuff, happens to use jQuery here (nothing else does)
        $(id).toggleClass("hovered"+nth);
    
        clearInterval(timer);
        timer = setInterval(toggleSomething, randRange(timeArray));
    }
    
    var timer = setInterval(toggleSomething, 200);
    // 1000 = Initial timer when the page is first loaded
}

makeItGlitchy("#link1", 1);
makeItGlitchy("#link2", 2);
makeItGlitchy("#link3", 3);
makeItGlitchy("#link4", 4);
//$("landingPage").toggleClass("move");