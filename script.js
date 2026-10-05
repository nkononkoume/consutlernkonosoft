const menuToggle=document.getElementById('menuToggle'),navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active');
 const filter=tab.dataset.filter;
 document.querySelectorAll('.resource-card').forEach(card=>card.style.display=(filter==='all'||card.dataset.type===filter)?'block':'none');
}));
