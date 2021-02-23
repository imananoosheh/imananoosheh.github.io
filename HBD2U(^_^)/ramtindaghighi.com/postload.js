var elements = document.querySelectorAll(".animation");

anime({
    targets: ".animation",
    rotate: "1turn",
    easing: "linear",
    loop: true,
    duration: 3000
});

let artwork_addrres_list = ["media/tri-1.png", "media/Chaos Ball.png", "media/tri-3.png", "media/imun.png", "media/tri-2.png", "media/tri-4.png"]

function change_address() {
    let artworks = document.getElementsByClassName("artwork");
    if ($(".animation>img").attr("src") == artwork_addrres_list[0]) {
        $(".animation>img").attr("src", artwork_addrres_list[1])
    } else if ($(".animation>img").attr("src") == artwork_addrres_list[1]) {
        $(".animation>img").attr("src", artwork_addrres_list[2])
    } else if ($(".animation>img").attr("src") == artwork_addrres_list[2]) {
        $(".animation>img").attr("src", artwork_addrres_list[3])
    } else if ($(".animation>img").attr("src") == artwork_addrres_list[3]) {
        $(".animation>img").attr("src", artwork_addrres_list[4])
    } else if ($(".animation>img").attr("src") == artwork_addrres_list[4]) {
        $(".animation>img").attr("src", artwork_addrres_list[5])
    } else if ($(".animation>img").attr("src") == artwork_addrres_list[5]) {
        $(".animation>img").attr("src", artwork_addrres_list[0])
    }
}

document.getElementsByClassName("material-icons")[0].addEventListener("click", function () {
    if (this.innerHTML == "menu") {
        document.getElementsByClassName("waiting d-none")[0].className = "waiting d-block";
        this.innerHTML = "close";
    } else if (this.innerHTML == "close") {
        document.getElementsByClassName("waiting d-block")[0].className = "waiting d-none";
        this.innerHTML = "menu";
    }
});


setInterval(change_address, 1500);