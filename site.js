const menuButton=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}});
const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.project-card');
filters.forEach(button=>button.addEventListener('click',()=>{const value=button.dataset.filter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;cards.forEach(card=>{card.hidden=value!=='all'&&card.dataset.category!==value;if(!card.hidden)count++});document.querySelector('#filter-status').textContent=`${count} ${value==='all'?'selected':value} projects shown`;}));
const dialog=document.querySelector('#lightbox');
const triggers=Array.from(document.querySelectorAll('.gallery-open'));
let currentImage=0,returnFocus=null;
function displayImage(i){currentImage=(i+triggers.length)%triggers.length;const trigger=triggers[currentImage];const image=dialog.querySelector('img');image.src=trigger.dataset.full;image.alt=trigger.dataset.caption;dialog.querySelector('.lightbox-caption').textContent=trigger.dataset.caption;dialog.querySelector('.lightbox-count').textContent=`${String(currentImage+1).padStart(2,'0')} / ${String(triggers.length).padStart(2,'0')}`;}
triggers.forEach((trigger,i)=>trigger.addEventListener('click',()=>{returnFocus=trigger;displayImage(i);dialog.showModal();document.body.classList.add('no-scroll')}));
dialog?.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
dialog?.querySelector('[data-direction=previous]').addEventListener('click',()=>displayImage(currentImage-1));
dialog?.querySelector('[data-direction=next]').addEventListener('click',()=>displayImage(currentImage+1));
dialog?.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();displayImage(currentImage+1)}if(e.key==='ArrowLeft'){e.preventDefault();displayImage(currentImage-1)}});
dialog?.addEventListener('close',()=>{document.body.classList.remove('no-scroll');returnFocus?.focus()});
