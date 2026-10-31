window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 1000); 
});

const contactFormStatus = document.getElementById('contact-form-status');
if (new URLSearchParams(window.location.search).get('kontakt') === 'gesendet') {
  contactFormStatus.textContent = "Thank you! Your message has been submitted successfully.";
  contactFormStatus.hidden = false;
}

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const servicesData = [
  {
    id: "decken",
    title: "Trockenbau-Decken",
    subtitle: "Moderne Deckenlösungen für jeden Raum",
    desc: "Wir realisieren hochwertige Trockenbau-Decken für Neubau, Renovierung und Innenausbau. Ob abgehängte Decken, moderne Deckensysteme oder integrierte Beleuchtung – wir achten auf eine saubere Ausführung und ein perfektes Ergebnis.",
    cover: "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (1).jpeg",
    images: [
      "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (1).jpeg",
      "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (2).jpeg",
      "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (3).jpeg",
      "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM.jpeg"
    ]
  },
  {
    id: "waende",
    title: "Trockenbauwände",
    subtitle: "Fachgerechte Montage",
    desc: "Wir bieten professionelle Lösungen im Bereich Trockenbau und Trennwände für Neubauten, Umbauten und Renovierungen. Unsere Leistungen umfassen die fachgerechte Montage von Trockenbauwänden, Raumtrennwänden und Gipskartonwänden – sauber, präzise und zuverlässig.",
    cover: "fotos/WhatsApp Image 2026-10-26 at 10.28.17 PM.jpeg",
    images: [
      "fotos/WhatsApp Image 2026-10-26 at 10.28.17 PM.jpeg"
    ]
  },
  {
    id: "innenausbau",
    title: "Innenausbau",
    subtitle: "Ihr Partner für modernen Innenausbau",
    desc: "Wir bieten professionelle Lösungen im Bereich Innenausbau für Neubauten, Umbauten und Renovierungen. Unsere Leistungen umfassen verschiedene Innenausbauarbeiten, individuelle Raumgestaltung und die fachgerechte Umsetzung Ihrer Wünsche.",
    cover: "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (2).jpeg",
    images: [
      "fotos/WhatsApp Image 2026-10-26 at 10.27.58 PM (2).jpeg"
    ]
  },
  {
    id: "boden",
    title: "Bodenbeschichtung",
    subtitle: "Robuste Böden mit hochwertiger Oberfläche",
    desc: "Wir bieten professionelle Lösungen im Bereich Bodenbeschichtung für verschiedene Innenräume. Unsere Leistungen umfassen die fachgerechte Vorbereitung des Untergrunds und das Auftragen geeigneter Bodenbeschichtungen – für eine strapazierfähige, pflegeleichte und hochwertige Oberfläche.",
    cover: "fotos/WhatsApp Image 2026-10-26 at 10.28.31 PM.jpeg",
    images: [
      "fotos/WhatsApp Image 2026-10-26 at 10.28.31 PM.jpeg",
      "fotos/WhatsApp Image 2026-10-26 at 10.28.32 PM (1).jpeg",
      "fotos/WhatsApp Image 2026-10-26 at 10.28.32 PM.jpeg"
    ]
  }
];

const container = document.getElementById('services-container');
servicesData.forEach((service, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${index * 0.15}s`; 
  card.onclick = () => openModal(service.id);
  
  card.innerHTML = `
    <img src="${service.cover}" alt="${service.title}" onerror="this.src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'">
    <div class="card-info">
      <h3>${service.title}</h3>
      <p>${service.subtitle}</p>
      <span>Mehr erfahren ➔</span>
    </div>
  `;
  container.appendChild(card);
});

function openModal(id) {
  const service = servicesData.find(s => s.id === id);
  if(!service) return;

  document.getElementById('modal-title').innerText = service.title;
  document.getElementById('modal-subtitle').innerText = service.subtitle;
  document.getElementById('modal-desc').innerText = service.desc;

  const gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = ''; 

  service.images.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.onerror = function() { this.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'; };
    gallery.appendChild(img);
  });

  const modal = document.getElementById('service-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; 
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('service-modal').classList.remove('active');
  document.body.style.overflow = 'auto'; 
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('service-modal');
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".scroll-reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();