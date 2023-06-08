const video = document.querySelector("#video");
// const main = document.getElementById("main");
// window.addEventListener("scroll",()=>{
//     hello();
// })
// const hello = ()=>{
//     video.setAttribute("autoplay"," ");
//     }
    gsap.to("#videoPlayer",{
        onStart:function(){
        video.setAttribute("autoplay"," ");
    },
    scrollTrigger:{
        taigger: "#main",
        start: "top top",
        scrub: 3,
        pin:"#main"
    },
    width: "100%",
    height:"100%",
    ease: "Expo.easeInOut"
})
gsap.to("#videoPlayer #overlay #overlay1",{
    scrollTrigger:{
        taigger: "#overlay",
        start: "top top",
        scrub: 3,
    },
    left:"-50%",
    ease: "Expo.easeInOut"
})
gsap.to("#videoPlayer #overlay #overlay2",{
    scrollTrigger:{
        taigger: "#overlay",
        start: "top top",
        scrub: 3,
    },
    right:"-50%",
    ease: "Expo.easeInOut"
})
gsap.to("#img1",{
    scrollTrigger:{
        taigger: "#main",
        start: "top top",
        scrub: 3,
    },
    left:"-400px",
    opacity:"0",
    ease: "Expo.easeInOut"
})
gsap.to("#img2",{
    scrollTrigger:{
        taigger: "#main",
        start: "top top",
        scrub: 3,
    },
    right:"-400px",
    opacity:"0",
    ease: "Expo.easeInOut"
})

gsap.from("#heading",{
    onStart:function(){
        $('#heading').textillate({ in: { 
            effect: 'swing',
            sequence: 'true',
            callback:function(){
                $('#heading').textillate('out');
            }
        },
        out: { 
            effect : 'bounce',
            reverse : 'true'
        }
    });
    }
})