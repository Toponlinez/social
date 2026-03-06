const OUT_URL = "";

const ctas = ["ctaNav","ctaMobile","ctaMain","ctaSecondary","ctaSide","ctaSticky"];
ctas.forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = OUT_URL || "https://inpmz.ttrk.io/click";
});

function trackOutbound(label){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event:"outbound_click", outbound_label: label, outbound_url: OUT_URL });
}

ctas.forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener("click", function(){ trackOutbound(id); });
});

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if(burger && mobileMenu){
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    mobileMenu.style.display = isOpen ? "none" : "block";
  });

  mobileMenu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if(!a) return;
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    mobileMenu.style.display = "none";
  });

  mobileMenu.hidden = true;
  mobileMenu.style.display = "none";
}
