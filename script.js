function changeColor(color, name) {
    // १. बॅकग्राउंड कलर बदलणे
    gsap.to("#bg", { backgroundColor: color, duration: 1 });

    // २. जॅकेट इमेजवर ॲनिमेशन (Bounce आणि Scale)
    gsap.fromTo("#jacket-img", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // टीप: येथे प्रत्यक्षात इमेज बदलण्यासाठी तुम्ही खालील ओळ वापरू शकता
    // document.getElementById('jacket-img').src = name + "-jacket.png";
}
