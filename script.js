

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
tl.to(".line h2",{
    opacity:1,
    animationName:"anime"
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4
});
tl.from("#page1",{
    y:1500,
    delay:0.2,
    ease:Power4 
})
tl.to("#loader",{
    display:none
})
