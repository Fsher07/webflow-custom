import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './styles/style.css'

const lenis = new Lenis()

lenis.on('scroll', () => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

const durations = [10, 15, 20, 14, 40, 25, 18, 12, 32, 16]

let animatedBlocks = gsap.utils.toArray('.about-img-anim-block')

animatedBlocks.forEach((block, index) => {
  const randomEndOffset = 20 + durations[index] * 5
  gsap.fromTo(
    block,
    {
      clipPath: `inset(100% -1px 0vh -1px)`,
    },
    {
      clipPath: 'inset(0% -1px 0vh -1px)',
      scrollTrigger: {
        trigger: '.about-animate-blocks-wrapper',
        start: `top top`,
        end: `+=${randomEndOffset}%`,
        scrub: true,
      },
    }
  )
})

// const container = document.querySelector(".about-us-landing");
// const animatedBlocks = document.querySelectorAll(".about-img-anim-block");

// function scrollEffect() {
//     let scrollPosition = window.scrollY;
//     let elementTop = container.offsetTop;
//     let relativeScrollPosition = Math.max(0, scrollPosition - elementTop);
//     let maxScroll = (container.offsetHeight - window.innerHeight);

//    const delays = [-0.5, -0.1, 0, -0.8, -5, -3, -2, -1, -0.5, -0.25];

//    let startScroll = container.offsetHeight * 0.25;
//    let endScroll = container.offsetHeight * 0.39;

//        let effectiveScrollPosition = Math.max(0, relativeScrollPosition - startScroll);
//     let effectiveMaxScroll = Math.min(maxScroll, endScroll) - startScroll;
//     const percentScrolled = Math.min(effectiveScrollPosition / effectiveMaxScroll, 1);

// animatedBlocks.forEach((block, index) => {
//     const adjustedPercent =
//       (percentScrolled - delays[index]) / (1 - delays[index]);
//     const insetVal = 100 - 100 * adjustedPercent;
// 		block.style.clipPath = `inset(${insetVal}% -1px 0vh -1px)`;
//   });
// };

// window.addEventListener("scroll", function () {
//     requestAnimationFrame(scrollEffect);
// });
