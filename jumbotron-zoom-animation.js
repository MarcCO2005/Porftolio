/* ============================================================
   JUMBOTRON ZOOM-OUT SCROLL ANIMATION — JavaScript (GSAP)
   ============================================================
   
   DEPENDENCIA: GSAP + ScrollTrigger
   Incluye estos scripts ANTES de este archivo:
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
   
   HTML mínimo requerido:
     <div class="jumbotron-bg" id="jumbotron">
       <img class="jumbotron-img" src="tu-imagen.jpg" alt="Background" />
       <div class="jumbotron-content">
         <!-- Tu contenido aquí -->
       </div>
     </div>
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Referencias a los elementos del DOM
    const bg = document.querySelector('.jumbotron-bg');
    const img = document.querySelector('.jumbotron-img');
    const content = document.querySelector('.jumbotron-content');

    if (!bg || !img) {
        console.warn('Jumbotron: No se encontraron los elementos .jumbotron-bg o .jumbotron-img');
        return;
    }

    // ============================================================
    // ANIMACIÓN PRINCIPAL: Zoom-out con scroll
    // ============================================================
    // Al hacer scroll, la imagen se escala (zoom x5) y se desvanece,
    // el contenido se desvanece, y el fondo queda negro.
    // La sección queda "pinneada" durante la animación.
    // ============================================================

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: bg,           // Elemento que activa la animación
            start: 'top top',      // Empieza cuando el top del elemento llega al top del viewport
            end: '+=100%',         // La animación dura el equivalente a 100% del viewport height
            scrub: true,           // La animación sigue el scroll (no es automática)
            pin: true,             // Fija el elemento mientras dura la animación
            anticipatePin: 1,      // Anticipa el pin para evitar saltos
            invalidateOnRefresh: true  // Recalcula en resize
        }
    });

    // 1. La imagen hace zoom (scale 1 → 5) y se desvanece (opacity 1 → 0)
    tl.to(img, {
        scale: 5,
        opacity: 0,
        ease: 'power1.inOut'
    }, 0);

    // 2. El contenido se desvanece
    if (content) {
        tl.to(content, {
            opacity: 0,
            ease: 'power1.out'
        }, 0);
    }

    // 3. El fondo se vuelve negro puro
    tl.to(bg, {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        ease: 'none'
    }, 0);

    // ============================================================
    // PERSONALIZACIÓN
    // ============================================================
    // Puedes ajustar estos valores para modificar la animación:
    //
    // scale: 5        → Cuánto zoom hace la imagen (más = más dramático)
    // end: '+=100%'   → Duración del scroll (+=150% = más lento, +=50% = más rápido)
    // scrub: true     → Cambia a scrub: 0.5 para un efecto más suave
    // ease            → Opciones: 'power1.inOut', 'power2.inOut', 'expo.inOut', 'none'
    //
    // Para añadir más animaciones a la timeline, usa:
    // tl.to(elemento, { propiedad: valor }, 0);
    // El tercer parámetro (0) indica que empieza al mismo tiempo que las demás.
    // ============================================================
});
