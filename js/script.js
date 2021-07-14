// navbar selector
const navlink = document.querySelectorAll(".navbar-nav .nav-link");

navlink.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        navlink.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// register scroll plugins 


// smooth scroll effect

// let Scrollbar = window.Scrollbar;
// const bodyScrollBar = Scrollbar.init(document.querySelector("body"), {
//     damping: 0.08
// });

// bodyScrollBar.setPosition(0, 0);
// bodyScrollBar.track.xAxis.element.remove();

// gsap animation

// register smooth scroll 
// ScrollTrigger.scrollerProxy(document.body, {
//     scrollTop (value) {
//         console.log('value', value)
//         if (arguments.length) {
//             bodyScrollBar.scrollTop = value;
//         }
//         return bodyScrollBar.scrollTop;
//     },
//     getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
//     }
// })

// bodyScrollBar.containerEl.addEventListener()
// bodyScrollBar.addListener(ScrollTrigger.update)
// console.log(bodyScrollBar)

// timeline define 
gsap.registerPlugin(ScrollTrigger);

gsap.set('body', {
    opacity: 0,
})

gsap.timeline().to("body", {
    opacity: 1,
    delay: 0.3,
})
    .from(
        ".navbar",
        {
            opacity: 0,
            y: -200,
            duration: 1,
        },
        "<"
    )
    .from(
        gsap.utils.toArray([
            "#main #home__svg path",
            "#main #home__svg circle",
        ]),
        {
            x: function () {
                return Math.random() * 600;
            },
            y: function () {
                return Math.random() * 600;
            },
            z: function () {
                return Math.random() * 600;
            },
            opacity: 0,
            ease: "power3.in",
            duration: 2.5,
        },
        "<"
    )
    .from(
        gsap.utils.toArray([
            "#main h5",
            "#main h1",
            "#main p",
            "#main a.cus__btn",
        ]),
        {
            opacity: 0,
            y: 250,
            stagger: {
                amount: 1,
            },
        },
        "-=1"
    )
    // gsap.fromTo(
    //     "#how__it__works .container .clearfix",
    //     {
    //         y: 200,
    //         opacity: 0,
    //     },
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1,
    //         delay: 1,
    //         scrollTrigger: {
    //             trigger: "#how__it__works",
    //             markers: true,
    //         }
    //     }
    // );
