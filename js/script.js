let vid = document.querySelectorAll("#vid");

vid.forEach(video =>{
    video.addEventListener("mouseenter", function(e) {
        video.play();
    });
})

vid.forEach(video =>{
    video.addEventListener("mouseleave", function(e) {
        video.currentTime = 0;
        video.load();
    });
})


let clo = document.querySelectorAll(".clo");
let vid1 = document.querySelector(".vid1");
let im1 = document.querySelector(".im1");
let vid2 = document.querySelector(".vid2");
let im2 = document.querySelector(".im2");
let vid3 = document.querySelector(".vid3");
let im3 = document.querySelector(".im3");
let vid4 = document.querySelector(".vid4");
let im4 = document.querySelector(".im4");
let vid5 = document.querySelector(".vid5");
let im5 = document.querySelector(".im5");
let pop1 = document.querySelector(".pop1");
let pop2 = document.querySelector(".pop2");
let pop3 = document.querySelector(".pop3");
let pop4 = document.querySelector(".pop4");
let pop5 = document.querySelector(".pop5");

im1.addEventListener("click", () =>{
    vid1.currentTime = 0;
    vid1.play();
    pop1.style.visibility = "visible";
    pop1.classList.add("poppy");
});
im2.addEventListener("click", () =>{
    vid2.currentTime = 0;
    vid2.play();
    pop2.style.visibility = "visible";
    pop2.classList.add("poppy");
});
im3.addEventListener("click", () =>{
    vid3.currentTime = 0;
    vid3.play();
    pop3.style.visibility = "visible";
    pop3.classList.add("poppy");
});
im4.addEventListener("click", () =>{
    vid4.currentTime = 0;
    vid4.play();
    pop4.style.visibility = "visible";
    pop4.classList.add("poppy");
});
im5.addEventListener("click", () =>{
    vid5.currentTime = 0;
    vid5.play();
    pop5.style.visibility = "visible";
    pop5.classList.add("poppy");
});

clo.forEach( clos =>{
    clos.addEventListener("click", () =>{
        pop1.classList.remove("poppy");
        pop1.style.visibility = "hidden";
        pop2.classList.remove("poppy");
        pop2.style.visibility = "hidden";
        pop3.classList.remove("poppy");
        pop3.style.visibility = "hidden";
        pop4.classList.remove("poppy");
        pop4.style.visibility = "hidden";
        pop5.classList.remove("poppy");
        pop5.style.visibility = "hidden";
    });
})


// nav-animation
let side = document.querySelector(".side-bar");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let over = document.querySelector(".overlay");
open.addEventListener("click", () =>{
    side.style.right = "0";
    over.style.display = "block";
});

close.addEventListener("click", () =>{
    side.style.right = "-100%";
    over.style.display = "none";
});


