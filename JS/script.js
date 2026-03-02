gsap.registerPlugin(ScrollTrigger);

/* INITIAL LOAD ANIMATION*/

gsap.to(".hero-title", {
  opacity: 1,
  y: -20,
  duration: 1.2,
  ease: "power3.out"
});

gsap.to(".metrics", {
  opacity: 1,
  y: -10,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".metric", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.3,
  delay: 0.8,
  ease: "power3.out"
});


/*  SCROLL BASED ANIMATION */

gsap.to(".floating-object", {
  x: -400,
  y: 350,
  rotation: 180,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});