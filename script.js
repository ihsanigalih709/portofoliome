// =========================
// PORTFOLIO JAVASCRIPT
// =========================


// Menampilkan pesan di console
console.log("Portfolio berhasil dijalankan!");


// =========================
// ANIMASI SCROLL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Memberikan efek awal pada section

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);

});