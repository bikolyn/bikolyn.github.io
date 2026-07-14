/*=========================================
    Happy Anniversary
    script.js
=========================================*/

/*-------------------------
    Disable Scroll Restore
--------------------------*/

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

/*-------------------------
    Intro Screen
--------------------------*/

const intro = document.getElementById("intro-overlay");
const music = document.getElementById("bg-music");

window.addEventListener("click", () => {

    if (!intro.classList.contains("hidden")) {

        intro.classList.add("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        music.volume = 0;

        music.play().catch(err => {
            console.log("Couldn't play music:", err);
        });

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.01;

            if (volume >= 0.35) {

                volume = 0.35;
                clearInterval(fade);

            }

            music.volume = volume;

        }, 100);

    }

}, { once: true });

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});


/*-------------------------
    Scroll Reveal
--------------------------*/

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .15

});

reveals.forEach(section => {

    revealObserver.observe(section);

});


/*-------------------------
    Secret Button
--------------------------*/

const secretButton = document.getElementById("secret-button");
const secretMessage = document.getElementById("secret-message");

secretButton.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

});


/*-------------------------
    Floating Hearts
--------------------------*/

const heartContainer = document.getElementById("floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (16 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 7) + "s";

    heart.style.opacity =
        (.08 + Math.random() * .12);

    heart.style.transform =
        `translateX(${Math.random() * 50 - 25}px)`;

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 16000);

}

setInterval(createHeart, 700);


/*-------------------------
    Mouse Parallax
--------------------------*/

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - .5) * 8;
    const y = (e.clientY / window.innerHeight - .5) * 8;

    document.body.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

});


/*-------------------------
    Polaroid Hover
--------------------------*/

document.querySelectorAll(".polaroid").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            (x / rect.width - .5) * 8;

        const rotateX =
            (rect.height / 2 - y) / 12;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });

    card.addEventListener("mouseleave", () => {

        if (card.classList.contains("rotate-left")) {

            card.style.transform = "rotate(-2deg)";

        }

        else if (card.classList.contains("rotate-right")) {

            card.style.transform = "rotate(2deg)";

        }

        else {

            card.style.transform = "rotate(0deg)";

        }

    });

});


/*-------------------------
    Typewriter (Optional)
--------------------------*/

document.querySelectorAll(".typewriter").forEach(el => {

    const text = el.textContent;

    el.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            el.textContent += text.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

});


/*-------------------------
    Footer Fade
--------------------------*/

const footer = document.querySelector("footer");

const footerObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            footer.style.opacity = 1;

            footer.style.transform = "translateY(0px)";

        }

    });

});

footer.style.opacity = 0;
footer.style.transform = "translateY(40px)";
footer.style.transition = "1s";

footerObserver.observe(footer);


/*-------------------------
    Console Message
--------------------------*/

console.log(`
Happy Anniversary, Ezry.

If you're reading this...

You found the code.

I hope this website made you smile.

- Biko ♡
`);