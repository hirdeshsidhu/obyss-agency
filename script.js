function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    // var tl = gsap.timeline();
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    const tl = gsap.timeline();
    tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
        .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
        .to(".purple", { backgroundColor: "#28a92b" }, 0);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
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
    tl.from("#nav", {
        opacity: 0
    })
    tl.from(".hero h1", {
        stagger: 0.2,
        y: 150
    })

}
function makeCursor() {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}



function makeMagnet() {
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //   //Parameters are optional.
        //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        //   duration: 1,
    });
}
function sheryAnimations() {
    Shery.imageEffect(".image-div", {
        style: 4,
        // debug: true,
        // debug: true,
        config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7241195453907675 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.23, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.5, "range": [0, 10] }, "metaball": { "value": 0.33, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true
    });
}
function video() {
    var videoContainer = document.querySelector("#video-container");
    var moveHandler = function (dets) {
        var rect = videoContainer.getBoundingClientRect();
        gsap.to("#video-cursor", {
            left: dets.clientX - rect.left,
            top: dets.clientY - rect.top
        })
    }
    videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", moveHandler)
    })
    videoContainer.addEventListener("mouseleave", function () {
        videoContainer.removeEventListener("mousemove", moveHandler)
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-15%"
        })
    })
    var videos = document.querySelector("#video-container video");
    var flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag === 0) {
            videos.play();
            videos.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`;
            gsap.to("#video-cursor", {
                scale: 0.5
            })
            flag = 1;
        } else {
            videos.pause();
            videos.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-large-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0;
        }
    })
}
function makingFlag() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            x: dets.x,
            y: dets.y
        })
    })
    document.querySelector("#batman").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1
        })
    })
    document.querySelector("#batman").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0
        })
    })


}
function create() {
    // Initialize textillate ONCE
    $('#lets').textillate({
        autoStart: false,
        in: { effect: 'fadeIn' }
    });

    var a = document.querySelector("#lets");

    a.addEventListener("mouseenter", function () {
        $('#lets').textillate('start'); // Trigger animation
        a.style.fontFamily = "silk serif";
    });

    a.addEventListener("mouseleave", function () {
        $('#lets').textillate('start'); // Replay animation
        a.style.fontFamily = "plain light";
    });
}
window.addEventListener("DOMContentLoaded", create);
// create();?
loadingPage();
makeMagnet();
makingFlag();
video();
sheryAnimations();

locomotiveAnimation();

makeCursor();