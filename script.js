// Jelajah Nusantara — interaksi landing page

// Tahun berjalan di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// Shadow header saat scroll
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Animasi reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add("visible"), i * 70);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Form pencarian trip
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const tujuan = document.getElementById("tujuan").value;
  const tanggal = document.getElementById("tanggal").value || "tanggal fleksibel";
  const orang = document.getElementById("orang").value;
  alert(`Mencari trip ke ${tujuan}\nTanggal: ${tanggal}\nPeserta: ${orang}`);
  document.getElementById("paket").scrollIntoView({ behavior: "smooth" });
});

// Form kontak
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactForm.reset();
  const note = document.getElementById("formNote");
  note.hidden = false;
  setTimeout(() => (note.hidden = true), 5000);
});
