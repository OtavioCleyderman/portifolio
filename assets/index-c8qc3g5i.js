(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class l{constructor(){var e;this.themeToggle=document.getElementById("theme-toggle"),this.icon=(e=this.themeToggle)==null?void 0:e.querySelector("i"),this.currentTheme=localStorage.getItem("theme"),this.currentTheme||(this.currentTheme="dark",localStorage.setItem("theme",this.currentTheme)),this.init(),this.bindEvents()}init(){document.body.classList.toggle("dark-theme",this.currentTheme==="dark"),this.updateIcon()}bindEvents(){var e;(e=this.themeToggle)==null||e.addEventListener("click",()=>this.toggleTheme())}toggleTheme(){this.currentTheme=this.currentTheme==="dark"?"light":"dark",localStorage.setItem("theme",this.currentTheme),document.body.classList.toggle("dark-theme"),this.updateIcon()}updateIcon(){this.icon&&(this.icon.className=this.currentTheme==="dark"?"fas fa-moon":"fas fa-sun")}}class c{constructor(){try{this.elements=document.querySelectorAll(".reveal-text"),this.options={threshold:.1,rootMargin:"0px"},this.init()}catch(e){console.error("Error initializing ScrollReveal:",e)}}init(){if(!("IntersectionObserver"in window)){this.elements.forEach(t=>{t.classList.add("revealed")});return}const e=new IntersectionObserver(this.handleIntersect.bind(this),this.options);this.elements.forEach(t=>{try{e.observe(t)}catch(s){console.error("Error observing element:",s),t.classList.add("revealed")}})}handleIntersect(e,t){e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),t.unobserve(s.target))})}}class d{constructor(){this.hardSkills=[{name:"JavaScript",level:70,icon:"fab fa-js"},{name:"HTML5",level:70,icon:"fab fa-html5"},{name:"CSS3",level:70,icon:"fab fa-css3-alt"},{name:"React",level:65,icon:"fab fa-react"},{name:"Node.js",level:60,icon:"fab fa-node-js"},{name:"Python",level:70,icon:"fab fa-python"}],this.softSkills=[{name:"Comunicação",level:70,icon:"fas fa-comments"},{name:"Trabalho em Equipe",level:60,icon:"fas fa-users"},{name:"Liderança",level:65,icon:"fas fa-crown"},{name:"Resolução de Problemas",level:70,icon:"fas fa-puzzle-piece"}],this.init()}init(){this.renderSkills("hardSkills",this.hardSkills),this.renderSkills("softSkills",this.softSkills),this.observeSkillCards()}renderSkills(e,t){const s=document.getElementById(e);if(!s)return;const i=t.map(r=>this.createSkillCard(r)).join("");s.innerHTML=i}createSkillCard(e){return`
            <div class="skill-card">
                <i class="${e.icon} skill-icon"></i>
                <div class="skill-name">${e.name}</div>
                <div class="skill-level">
                    <div class="skill-level-fill" style="width: 0%" data-level="${e.level}"></div>
                </div>
            </div>
        `}observeSkillCards(){const e=new IntersectionObserver(t=>{t.forEach(s=>{if(s.isIntersecting){const i=s.target.querySelector(".skill-level-fill");if(i){const r=i.dataset.level;i.style.width=`${r}%`}}})},{threshold:.5});document.querySelectorAll(".skill-card").forEach(t=>e.observe(t))}}class h{constructor(){this.projects=[{title:"PopFollow - Séries, filmes, animes...",description:"Um site web onde podemos marcar séries, filmes ou animes como favoritos, vistos e até qual ep vimos.",image:"./src/images/Popfollow.png",tags:["React","Node.js","MongoDB"],demoLink:"https://popfollow.bohr.io/signin",repoLink:"https://github.com/OtavioCleyderman/popfollow-client"},{title:"GallleryStrap",description:"Projeto generico enquanto não tenho outros aqui. Esse projeto é uma simples galeria usando HTML, CSS e Bootstrap, no qual usei para ter o contato com o bootstrap.",image:"./src/images/gallerystrap.png",tags:["HTML","CSS","Bootstrap"],demoLink:"https://otaviocleyderman.github.io/gallleryStrap/",repoLink:"https://github.com/OtavioCleyderman/gallleryStrap"}],this.init()}init(){this.renderProjects()}renderProjects(){const e=document.getElementById("projectsContainer");e&&(e.innerHTML=this.projects.map(t=>this.createProjectCard(t)).join(""))}createProjectCard(e){return`
            <article class="project-card">
                <img 
                    src="${e.image}" 
                    alt="${e.title}"
                    class="project-image"
                    loading="lazy"
                >
                <div class="project-content">
                    <h3 class="project-title">${e.title}</h3>
                    <p class="project-description">${e.description}</p>
                    <div class="project-tags">
                        ${e.tags.map(t=>`
                            <span class="project-tag">${t}</span>
                        `).join("")}
                    </div>
                    <div class="project-links">
                        <a href="${e.demoLink}" class="project-link" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="${e.repoLink}" class="project-link" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </article>
        `}}const m="/portifolio/assets/iniciante-BK0cj9wc.png",u="/portifolio/assets/desenvolvimento_pessoal-Bf2bdyxO.png";class p{constructor(){this.certifications=[{title:"Iniciante em programação - T7 ONE",issuer:"Oracle + Alura",date:"2024",image:m,link:"https://cursos.alura.com.br/user/otavio-cleyderman/degree-logica-de-programacao-turma7-one-753048/certificate"},{title:"Desenvolvimento pessoal - T7 ONE",issuer:"Oracle + Alura",date:"2024",image:u,link:"https://cursos.alura.com.br/user/otavio-cleyderman/degree-desenvolvimento-pessoal-turma7-one-753037/certificate"}],this.currentIndex=0,this.init()}init(){this.renderCertifications(),this.setupControls()}renderCertifications(){const e=document.getElementById("certificationsContainer");if(!e)return;const t=document.createElement("div");t.className="carousel-track",t.innerHTML=this.certifications.map(s=>this.createCertificationCard(s)).join(""),e.appendChild(t),this.track=t}createCertificationCard(e){return`
            <article class="certification-card">
                <img 
                    src="${e.image}" 
                    alt="${e.title}"
                    class="certification-image"
                    loading="lazy"
                >
                <h3 class="certification-title">${e.title}</h3>
                <p class="certification-issuer">${e.issuer}</p>
                <p class="certification-date">${e.date}</p>
                <a href="${e.link}" class="certification-link" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Ver certificado
                </a>
            </article>
        `}setupControls(){const e=document.querySelector(".carousel-button.prev"),t=document.querySelector(".carousel-button.next");e==null||e.addEventListener("click",()=>this.navigate("prev")),t==null||t.addEventListener("click",()=>this.navigate("next")),this.setupTouchControls()}setupTouchControls(){var s,i,r;let e=0,t=0;(s=this.track)==null||s.addEventListener("touchstart",a=>{e=a.touches[0].clientX}),(i=this.track)==null||i.addEventListener("touchmove",a=>{t=a.touches[0].clientX}),(r=this.track)==null||r.addEventListener("touchend",()=>{const a=e-t;Math.abs(a)>50&&this.navigate(a>0?"next":"prev")})}navigate(e){e==="next"?this.currentIndex=(this.currentIndex+1)%this.certifications.length:this.currentIndex=this.currentIndex===0?this.certifications.length-1:this.currentIndex-1,this.track&&(this.track.style.transform=`translateX(-${this.currentIndex*100}%)`)}}class g{constructor(){this.experiences=[{company:"MagaluPay",role:"Junior Software Developer",period:"nov-2024 - Present",description:"Experiência no desenvolvimento de aplicações em Python e tecnologias em nuvem (AWS, GCP, Docker, Redis, Kafka, RabbitMQ). Habilidade no desenvolvimento de funcionalidades, análise de causas raiz e mitigação de impactos. Dedicação ao aprendizado contínuo, colaboração em equipe e entrega de soluções estratégicas e de alto valor para clientes, negócios e stakeholders.",technologies:["Python","AWS","GCP","Docker","Redis","Kafka","RabbitMQ","Backend Development","API Development"]},{company:"Magazine Luiza",role:"Infrastructure Analyst",period:"jul-2022 - out-2024",description:"Especializado em análise de erros sistêmicos, desenvolvimento de automações (Python, Selenium, Node.js) e implementação de chatbots (Dialogflow, IBM Watson). Experiência em pesquisar e implementar novas funcionalidades, melhorar a infraestrutura para operações de crédito e fornecer suporte técnico ao departamento de crédito do Magazine Luiza. Habilidade em configuração de impressoras, configuração de estações de trabalho e administração de redes e Windows Server.",technologies:["Automation Developer","Python","Selenium","Node.js","Chatbot (Dialogflow, IBM Watson)","Infrastructure & Support Specialist","Windows Server & Networking","Focused on problem-solving and infrastructure improvement"]},{company:"Magazine Luiza",role:"Technical Support Analyst",period:"out-2020 - jun-2022",description:"Fornecendo suporte técnico e manutenção de infraestrutura para operações críticas de negócios no setor de crédito, com especialização em configuração de estações de trabalho, instalação de impressoras, gerenciamento de redes e desenvolvimento de chatbots com Dialogflow e IBM Watson.",technologies:["Technical Support","Remote Access","Troubleshooting","Windows Server","Networking","Workstation Setup","Dialogflow","IBM Watson","Chatbot Development","System Error Analysis","Root Cause Analysis"]}],this.init()}init(){this.renderExperiences()}renderExperiences(){const e=document.getElementById("experienceTimeline");e&&(e.innerHTML=this.experiences.map(t=>this.createExperienceItem(t)).join(""))}createExperienceItem(e){return`
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${e.period}</div>
                    <h3 class="timeline-title">${e.role}</h3>
                    <h4 class="timeline-company">${e.company}</h4>
                    <p class="timeline-description">${e.description}</p>
                    <span class="timeline-separator"></span>
                    <div class="timeline-tech">
                        ${e.technologies.map(t=>`<span class="tech-tag">${t}</span>, `).join("")}
                    </div>
                </div>
            </div>
        `}}class f{constructor(){this.posts=[],this.categories=[...new Set(this.posts.map(e=>e.category))],this.activeCategory="all",this.init()}init(){this.renderFilters(),this.renderPosts(),this.setupEventListeners()}renderFilters(){const e=document.getElementById("blogFilters");if(!e)return;const t=["all",...this.categories].map(s=>this.createFilterButton(s)).join("");e.innerHTML=t}createFilterButton(e){return`
            <button 
                class="filter-button ${e===this.activeCategory?"active":""}"
                data-category="${e}"
            >
                ${e.charAt(0).toUpperCase()+e.slice(1)}
            </button>
        `}renderPosts(){const e=document.getElementById("blogGrid");if(!e)return;const t=this.activeCategory==="all"?this.posts:this.posts.filter(s=>s.category===this.activeCategory);e.innerHTML=t.map(s=>this.createPostCard(s)).join("")}createPostCard(e){return`
            <article class="blog-card">
                <img 
                    src="${e.image}" 
                    alt="${e.title}"
                    class="blog-image"
                    loading="lazy"
                >
                <div class="blog-content">
                    <div class="blog-category">${e.category}</div>
                    <h3 class="blog-title">${e.title}</h3>
                    <p class="blog-excerpt">${e.excerpt}</p>
                    <div class="blog-meta">
                        <span>${e.date}</span>
                        <span>${e.readTime} read</span>
                    </div>
                </div>
            </article>
        `}setupEventListeners(){var e;(e=document.getElementById("blogFilters"))==null||e.addEventListener("click",t=>{const s=t.target.closest(".filter-button");s&&(this.activeCategory=s.dataset.category,this.updateActiveFilter(),this.renderPosts())})}updateActiveFilter(){document.querySelectorAll(".filter-button").forEach(e=>{e.classList.toggle("active",e.dataset.category===this.activeCategory)})}}class v{constructor(){this.form=document.getElementById("contactForm"),this.init()}init(){this.setupFormValidation()}setupFormValidation(){var e;(e=this.form)==null||e.addEventListener("submit",async t=>{t.preventDefault(),this.validateForm()&&await this.handleSubmit()})}validateForm(){var r,a,n;const e=(r=this.form)==null?void 0:r.querySelector("#name"),t=(a=this.form)==null?void 0:a.querySelector("#email"),s=(n=this.form)==null?void 0:n.querySelector("#message");let i=!0;return this.validateField(e,/^[a-zA-Z\s]{2,}$/)||(i=!1),this.validateField(t,/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||(i=!1),this.validateField(s,/.{10,}/)||(i=!1),i}validateField(e,t){if(!e)return!1;const s=t.test(e.value);return e.classList.toggle("invalid",!s),s}async handleSubmit(){const e=new FormData(this.form);Object.fromEntries(e.entries());try{(await fetch("https://formspree.io/f/mgvkvlly",{method:"POST",body:e,headers:{Accept:"application/json"}})).ok?this.showSuccess():this.showError()}catch{this.showError()}}showSuccess(){var s;const e=(s=this.form)==null?void 0:s.querySelector(".submit-button");if(!e)return;const t=e.innerHTML;e.innerHTML='<i class="fas fa-check"></i> Mensagem Enviada!',setTimeout(()=>{var i;e.innerHTML=t,(i=this.form)==null||i.reset()},3e3)}showError(){var s;const e=(s=this.form)==null?void 0:s.querySelector(".submit-button");if(!e)return;const t=e.innerHTML;e.innerHTML='<i class="fas fa-exclamation-circle"></i> Erro ao enviar',setTimeout(()=>{e.innerHTML=t},3e3)}}class y{constructor(e,t,s=100,i=50,r=1500){this.textElement=document.querySelector(e),this.phrases=t,this.typingSpeed=s,this.erasingSpeed=i,this.delayBetweenPhrases=r,this.currentPhrase=0,this.currentChar=0,this.isDeleting=!1,this.textElement&&this.type()}type(){const e=this.phrases[this.currentPhrase];this.isDeleting?this.textElement.textContent=e.substring(0,this.currentChar--):this.textElement.textContent=e.substring(0,this.currentChar++);let t=this.typingSpeed;!this.isDeleting&&this.currentChar===e.length?(this.isDeleting=!0,t=this.delayBetweenPhrases):this.isDeleting&&this.currentChar===0?(this.isDeleting=!1,this.currentPhrase=(this.currentPhrase+1)%this.phrases.length,t=this.typingSpeed):t=this.isDeleting?this.erasingSpeed:this.typingSpeed,setTimeout(()=>this.type(),t)}}document.addEventListener("DOMContentLoaded",()=>{new l,new c,new d,new h,new p,new g,new f,new v;const o=["Eu sou um desenvolvedor de software.","Sou um programador de software.","I am a software developer.","Soy un desarrollador de software."];new y("#typing-text",o);const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-links");e==null||e.addEventListener("click",()=>{t==null||t.classList.toggle("active");const s=e.querySelector("i");s.classList.toggle("fa-bars"),s.classList.toggle("fa-times")}),document.querySelectorAll(".nav-links a").forEach(s=>{s.addEventListener("click",()=>{if(window.innerWidth<=768){t==null||t.classList.remove("active");const i=e==null?void 0:e.querySelector("i");i==null||i.classList.add("fa-bars"),i==null||i.classList.remove("fa-times")}})})});
