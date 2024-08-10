var main = document.querySelector(".portfolio")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})