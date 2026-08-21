/* ADRIANDEGARCIA — main.js · nav/footer inyectados, reveal, formularios */
(function(){
  const NAV=[["metodo-capital.html","Método"],["sobre-mi.html","Sobre mí"],["recursos-gratis.html","Recursos"],["comunidad-aimers.html","Comunidad"],["curso-capital.html","Curso"],["mentoria-1a1.html","Mentoría"],["blog.html","Blog"]];
  const page=location.pathname.split("/").pop()||"index.html";
  const ISO=`<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <g opacity=".22" stroke="#C9A961" stroke-width=".8"><circle cx="120" cy="120" r="88"/><ellipse cx="120" cy="120" rx="88" ry="30"/><ellipse cx="120" cy="120" rx="30" ry="88"/></g>
    <path d="M38 168 A95 95 0 0 0 200 152" stroke="#C9A961" stroke-width="2" opacity=".35"/><path d="M200 152 l-11 -3 M200 152 l-8 8" stroke="#C9A961" stroke-width="2" opacity=".35"/>
    <polygon points="120,15 210.9,67.5 210.9,172.5 120,225 29.1,172.5 29.1,67.5" stroke="#C9A961" stroke-width="2.5"/>
    <polygon points="120,24 203.1,72 203.1,168 120,216 36.9,168 36.9,72" stroke="#C9A961" stroke-width=".8" opacity=".55"/>
    <text x="120" y="158" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="104" fill="#C9A961" letter-spacing="2">AG</text>
    <path d="M76 186 L120 173 L164 186" stroke="#C9A961" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M90 196 L120 185 L150 196" stroke="#C9A961" stroke-width="2.6" stroke-linecap="round"/></svg>`;
  const SEAL=`<svg viewBox="0 0 48 48" fill="none" stroke="#C9A961" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4 41 14v20L24 44 7 34V14z"/><path d="M16 24l6 6 10-12"/></svg>`;

  /* HEADER */
  const header=document.createElement("header");
  header.className="ag-header";
  header.innerHTML=`<div class="container header-inner">
    <a class="brand" href="index.html" aria-label="Adrián García — inicio">${ISO}
      <span><span class="brand-name">ADRIÁN GARCÍA</span><span class="brand-tag">DISCIPLINA FINANCIERA</span></span></a>
    <nav class="ag-nav" id="nav">${NAV.map(([h,t])=>`<a href="${h}" class="${h===page?"active":""}">${t}</a>`).join("")}</nav>
    <a class="btn btn-gold btn-sm header-cta" href="recursos-gratis.html">Empieza gratis</a>
    <button class="nav-toggle" aria-label="Menú" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>`;
  document.body.prepend(header);
  const tg=header.querySelector(".nav-toggle"),nav=header.querySelector("#nav");
  tg.addEventListener("click",()=>{const o=nav.classList.toggle("open");tg.setAttribute("aria-expanded",o)});

  /* FOOTER */
  const f=document.createElement("footer");
  f.innerHTML=`<div class="container">
    <div class="foot-grid">
      <div><div class="brand" style="margin-bottom:16px">${ISO}<span><span class="brand-name">ADRIÁN GARCÍA</span><span class="brand-tag">DISCIPLINA FINANCIERA</span></span></div>
        <p class="muted">Divulgación financiera con sistema y método. Ni humo ni fórmulas mágicas: disciplina financiera para Ahorrar, Invertir y Multiplicar.</p></div>
      <div><h4>Navegación</h4>${NAV.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</div>
      <div><h4>Recursos gratis</h4>
        <a href="lead-magnet-presupuesto.html">Plantilla de Control</a>
        <a href="lead-magnet-acciones.html">Guía primeras acciones</a>
        <a href="lead-magnet-inmuebles.html">Checklist inmueble</a>
        <a href="https://t.me/adriandegarcia" rel="noopener">Telegram AIMers</a>
        <a href="https://whatsapp.com/channel/adriandegarcia" rel="noopener">WhatsApp AIMers</a></div>
      <div><h4>Legal</h4><a href="legal.html">Aviso legal</a><a href="legal.html#privacidad">Privacidad</a><a href="legal.html#cookies">Cookies</a><a href="legal.html#riesgo">Aviso de riesgo</a></div>
    </div>
    <p class="disclaimer">Todo el contenido de este sitio es exclusivamente educativo e informativo y no constituye recomendación personalizada de inversión. Invertir implica riesgo de pérdida. Rentabilidades pasadas no garantizan rentabilidades futuras. Consulta la normativa CNMV/ESMA y, si lo necesitas, a un asesor regulado.</p>
    <div class="foot-bottom"><span>© <span id="yy"></span> ADRIÁN GARCÍA · HECHO CON DISCIPLINA</span><span>AG // EXPEDIENTE WEB v2.0</span></div>
  </div>`;
  document.body.append(f);
  document.getElementById("yy").textContent=new Date().getFullYear();

  /* REVEAL */
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));

  /* FORMULARIOS — solo nombre + email. Conecta aquí tu ESP (Brevo/Mailchimp/ConvertKit) */
  document.querySelectorAll(".ag-form").forEach(form=>{
    form.addEventListener("submit",ev=>{
      ev.preventDefault();
      const data={lm:form.dataset.lm||"lead",nombre:form.nombre.value.trim(),email:form.email.value.trim()};
      if(!data.nombre||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))return;
      const ENDPOINT=form.dataset.endpoint||""; // ← pega aquí tu URL de webhook/ESP
      if(ENDPOINT){fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).catch(()=>{})}
      console.log("[AG-LEAD]",data);
      form.style.display="none";
      const ok=form.parentElement.querySelector(".form-ok");if(ok)ok.style.display="block";
    });
  });
})();