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

const durations = [10, 15, 20, 14, 35, 25, 18, 12, 32, 16]

let animatedBlocks = gsap.utils.toArray('.about-img-anim-block')

console.log('wunderian')

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
