
const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");
const letterMessage = document.getElementById("letterMessage");
const clickText = document.getElementById("clickText");

// ISI SURAT KHUSUS UNTUK JUMET

const message = `Hai ijutt, happy birthday yaa! ❤️

I hope ur always in good health every day.

Semoga rezeki kamu lancar terus, jadi anak yang baik, jangan sampai ngecewain Mamah sama Ayah kamu.

Semoga di umur kamu yang sekarang, banyak kebaikan yang selalu menimpa kamu.

Aku harap ke depannya kamu happy terus yaa.

Ouh iyyaa, I hope you and your girlfriend always happy, okee? 🤭

And last but not least...

Aku selalu ada di saat kamu butuh aku.

I always love u, Jut. ❤️`;

// BINTANG DI BACKGROUND

function createStars() {
    const container = document.getElementById("stars");

    for (let i = 0; i < 65; i++) {
        const star = document.createElement("div");

        star.className = "star";
        star.innerHTML = "✦";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.fontSize = (Math.random() * 10 + 5) + "px";
        star.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(star);
    }
}

createStars();


// MEMBUKA SURAT

let opened = false;
let typingInterval;

function openLetter() {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");
    clickText.innerHTML = "A letter made just for you... ❤️";

    setTimeout(() => {

        intro.style.display = "none";

        letterSection.classList.add("show");

        typeLetter();

        createHearts(35);

    }, 1500);

}


// ANIMASI MENGETIK

function typeLetter() {

    clearInterval(typingInterval);

    letterMessage.textContent = "";

    let index = 0;

    typingInterval = setInterval(() => {

        letterMessage.textContent += message.charAt(index);

        index++;

        if (index >= message.length) {
            clearInterval(typingInterval);
        }

    }, 35);

}


// HATI BERTERBANGAN

function createHearts(amount) {

    const symbols = ["♥", "♡", "❤", "💕", "✦"];

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.fontSize =
                (Math.random() * 20 + 12) + "px";

            heart.style.animationDuration =
                (Math.random() * 3 + 4) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);

        }, i * 80);

    }

}


// HATI KECIL MUNCUL BERKALA

setInterval(() => {

    if (!opened) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "16px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);

}, 1800);


// BACA SURAT LAGI

function replayLetter() {

    typeLetter();
    createHearts(15);

}
