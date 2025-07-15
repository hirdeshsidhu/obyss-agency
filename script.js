function loadingPage() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.2
    });
    tl.from("#line-part1", {
        opacity: 0,
        onStart: function () {
            var h5 = document.querySelector("#line-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5.innerHTML = grow;
                    grow++;
                } else {
                    h5.innerHTML = 100;
                }
            }, 35);
        }
    });
    tl.to(".line h2", {
        opacity: 1,
        animationName: "anime"
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 4
    });
    tl.from("#page1", {
        y: 1500,
        delay: 0.2,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from(".hero h1",{
        stagger:0.2,
        y:150
    })

}
loadingPage();
document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y
    })
});
function makeMagnet() {
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //   //Parameters are optional.
        //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        //   duration: 1,
    });
}
makeMagnet();
function page2(){
    var tl = gsap.timeline();
   
}
page2();