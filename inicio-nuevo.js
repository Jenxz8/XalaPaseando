(() => {
 const pista=document.getElementById('eventos-inicio'), vista=pista.parentElement;
 const vigentes=proximosEventos();
 const gratis=e=>/gratis|libre|gratuita|gratuito/i.test(e.precio);
 function tarjeta(e, copia=false){
  const a=document.createElement('a'); a.className='tarjeta-imagen-evento'; a.href='evento-detalle.html?id='+encodeURIComponent(e.id); a.draggable=false; if(copia)a.tabIndex=-1;
  const img=document.createElement('img'); img.src=e.imagen; img.alt='Cartel de '+e.nombre; img.draggable=false; img.addEventListener('error',()=>{img.removeAttribute('src');img.alt='Cartel no disponible';},{once:true});
  const info=document.createElement('div');info.className='info-evento-inicio';
  if(e.destacado||gratis(e)){const badge=document.createElement('span');badge.className='etiqueta-halloween-inicio';badge.textContent=e.destacado?'★ Destacado':'Gratis';if(!e.destacado)badge.style.background='#267748';info.append(badge);}
  const h=document.createElement('h3');h.textContent=e.nombre;const p=document.createElement('p');p.textContent=fechaVisible(e)+' · '+horarioEvento(e);const precio=document.createElement('span');precio.className='precio-inicio';precio.textContent=e.precio;info.append(h,p,precio);a.append(img,info);return a;
 }
 const destacados=vigentes.filter(e=>e.destacado).slice(0,3), gratuitos=vigentes.filter(e=>gratis(e)&&!destacados.includes(e)).slice(0,4);
 function render(id,items){const el=document.getElementById(id);if(items.length)el.append(...items.map(e=>tarjeta(e)));else{const p=document.createElement('p');p.className='inicio-vacio';p.textContent='No hay eventos disponibles por el momento.';el.append(p);}}
 render('inicio-destacados',destacados);render('inicio-gratis',gratuitos);
 const seleccion=vigentes.slice(0,10), reducir=matchMedia('(prefers-reduced-motion: reduce)');
 let ancho=0, posicion=0, ultimo=0, esperar=0, pausa=reducir.matches, activo=null, arrastre=false, bloquearClick=0;
 function construir(){pista.replaceChildren();if(!seleccion.length){pista.textContent='No hay próximos eventos disponibles.';return;}const cantidad=Math.max(1,Math.ceil(vista.clientWidth/(seleccion.length*215)));for(let g=0;g<3;g++){const grupo=document.createElement('div');grupo.className='grupo-carrusel';for(let i=0;i<cantidad;i++)seleccion.forEach(e=>grupo.append(tarjeta(e,g!==0||i!==0)));pista.append(grupo);}ancho=pista.firstElementChild.getBoundingClientRect().width;posicion=ancho;vista.scrollLeft=posicion;}
 function normalizar(x){return ancho?ancho+((x%ancho)+ancho)%ancho:0;}
 function mover(x){posicion=normalizar(x);vista.scrollLeft=posicion;}
 function descanso(){esperar=performance.now()+2200;}
 function tick(t){const dt=ultimo?Math.min(t-ultimo,50):0;ultimo=t;if(ancho&&!pausa&&!activo&&t>esperar&&!document.hidden){if(Math.abs(vista.scrollLeft-posicion)>2)posicion=vista.scrollLeft;mover(posicion+dt*.028);}requestAnimationFrame(tick);}
 construir();let anterior=vista.clientWidth;new ResizeObserver(()=>{if(vista.clientWidth!==anterior){anterior=vista.clientWidth;construir();}}).observe(vista);requestAnimationFrame(tick);
 vista.addEventListener('pointerdown',e=>{if(e.button!==0)return;descanso();activo={id:e.pointerId,x:e.clientX,scroll:vista.scrollLeft,tipo:e.pointerType};arrastre=false;});
 window.addEventListener('pointermove',e=>{if(!activo||e.pointerId!==activo.id||activo.tipo!=='mouse')return;const dx=e.clientX-activo.x;if(Math.abs(dx)>6){arrastre=true;vista.classList.add('arrastrando');e.preventDefault();mover(activo.scroll-dx);}}, {passive:false});
 function soltar(e){if(!activo||e.pointerId!==activo.id)return;if(arrastre)bloquearClick=performance.now()+350;activo=null;arrastre=false;vista.classList.remove('arrastrando');posicion=vista.scrollLeft;descanso();}
 window.addEventListener('pointerup',soltar);window.addEventListener('pointercancel',soltar);window.addEventListener('blur',()=>{activo=null;arrastre=false;vista.classList.remove('arrastrando');descanso();});window.addEventListener('pageshow',()=>{activo=null;arrastre=false;vista.classList.remove('arrastrando');descanso();});
 vista.addEventListener('click',e=>{if(performance.now()<bloquearClick){e.preventDefault();e.stopPropagation();}},true);
 vista.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)>0||e.shiftKey){descanso();e.preventDefault();mover(vista.scrollLeft+(e.deltaX||e.deltaY));}},{passive:false});
 vista.addEventListener('touchmove',descanso,{passive:true});vista.addEventListener('scroll',()=>{if(activo||performance.now()<esperar)posicion=vista.scrollLeft;},{passive:true});
 function paso(d){descanso();mover(vista.scrollLeft+d*215);}
 document.getElementById('carr-prev').onclick=()=>paso(-1);document.getElementById('carr-next').onclick=()=>paso(1);vista.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();paso(e.key==='ArrowLeft'?-1:1);}});
 const boton=document.getElementById('carr-pausa');function estado(){boton.textContent=pausa?'▶':'Ⅱ';boton.setAttribute('aria-label',pausa?'Reanudar carrusel':'Pausar carrusel');}estado();boton.onclick=()=>{pausa=!pausa;descanso();estado();};
 const dialog=document.getElementById('dialog-publicar');
 const form=document.getElementById('form-publicar'), estadoEnvio=document.getElementById('publicar-estado'), enviar=form.querySelector('button[type="submit"]');
 document.getElementById('abrir-publicar').onclick=()=>dialog.showModal();
 document.getElementById('cerrar-publicar').onclick=()=>dialog.close();
 form.onsubmit=async e=>{
  e.preventDefault(); if(enviar.disabled)return;
  enviar.disabled=true; enviar.textContent='Enviando…'; estadoEnvio.textContent='Enviando tu propuesta…';
  try{
   const respuesta=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
   if(!respuesta.ok)throw new Error('No se pudo enviar');
   form.reset(); estadoEnvio.textContent='¡Evento enviado! Nuestro equipo revisará tu propuesta.';
  }catch(error){estadoEnvio.textContent='No se pudo enviar el evento. Conservamos tus datos en el formulario; inténtalo nuevamente.';}
  finally{enviar.disabled=false;enviar.textContent='Enviar evento';}
 };
})();
