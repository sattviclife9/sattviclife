/**
* Template Name: MediTrust
* Template URL: https://bootstrapmade.com/meditrust-bootstrap-hospital-website-template/
* Updated: Jul 04 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

window.onclick = function(event) {
if(event.target.classList.contains("popup")){
event.target.style.display = "none";
}
}


function openPopup1(){
document.getElementById("popup1").style.display="flex";
}

function closePopup1(){
document.getElementById("popup1").style.display="none";
}

function openPopup2(){
document.getElementById("popup2").style.display="flex";
}

function closePopup2(){
document.getElementById("popup2").style.display="none";
}

function openPopup3(){
document.getElementById("popup3").style.display="flex";
}

function closePopup3(){
document.getElementById("popup3").style.display="none";
}

function openPopup4(){
document.getElementById("popup4").style.display="flex";
}

function closePopup4(){
document.getElementById("popup4").style.display="none";
}

function openPopup5(){
document.getElementById("popup5").style.display="flex";
}

function closePopup5(){
document.getElementById("popup5").style.display="none";
}

function openPopup6(){
document.getElementById("popup6").style.display="flex";
}

function closePopup6(){
document.getElementById("popup6").style.display="none";
}

function openPopup7(){
document.getElementById("popup7").style.display="flex";
}

function closePopup7(){
document.getElementById("popup7").style.display="none";
}

function openPopup8(){
document.getElementById("popup8").style.display="flex";
}

function closePopup8(){
document.getElementById("popup8").style.display="none";
}

function openPopup9(){
document.getElementById("popup9").style.display="flex";
}

function closePopup9(){
document.getElementById("popup9").style.display="none";
}

function openPopup10(){
document.getElementById("popup10").style.display="flex";
}

function closePopup10(){
document.getElementById("popup10").style.display="none";
}

function openPopup11(){
document.getElementById("popup11").style.display="flex";
}

function closePopup11(){
document.getElementById("popup11").style.display="none";
}

function openPopup12(){
document.getElementById("popup12").style.display="flex";
}

function closePopup12(){
document.getElementById("popup12").style.display="none";
}

function openPopup13(){
document.getElementById("popup13").style.display="flex";
}

function closePopup13(){
document.getElementById("popup13").style.display="none";
}

function openPopup14(){
document.getElementById("popup14").style.display="flex";
}

function closePopup14(){
document.getElementById("popup14").style.display="none";
}

function openPopup15(){
document.getElementById("popup15").style.display="flex";
}

function closePopup15(){
document.getElementById("popup15").style.display="none";
}

function openPopup16(){
document.getElementById("popup16").style.display="flex";
}

function closePopup16(){
document.getElementById("popup16").style.display="none";
}

function openPopup17(){
document.getElementById("popup17").style.display="flex";
}

function closePopup17(){
document.getElementById("popup17").style.display="none";
}

function openPopup18(){
document.getElementById("popup18").style.display="flex";
}

function closePopup18(){
document.getElementById("popup18").style.display="none";
}

function openPopup19(){
document.getElementById("popup19").style.display="flex";
}

function closePopup19(){
document.getElementById("popup19").style.display="none";
}

function openPopup20(){
document.getElementById("popup20").style.display="flex";
}

function closePopup20(){
document.getElementById("popup20").style.display="none";
}

function openPopup21(){
document.getElementById("popup21").style.display="flex";
}

function closePopup21(){
document.getElementById("popup21").style.display="none";
}

function openPopup22(){
document.getElementById("popup22").style.display="flex";
}

function closePopup22(){
document.getElementById("popup22").style.display="none";
}

function openPopup23(){
document.getElementById("popup23").style.display="flex";
}

function closePopup23(){
document.getElementById("popup23").style.display="none";
}

function openPopup24(){
document.getElementById("popup24").style.display="flex";
}

function closePopup24(){
document.getElementById("popup24").style.display="none";
}

function openPopup25(){
document.getElementById("popup25").style.display="flex";
}

function closePopup25(){
document.getElementById("popup25").style.display="none";
}

function openPopup26(){
document.getElementById("popup26").style.display="flex";
}

function closePopup26(){
document.getElementById("popup26").style.display="none";
}

function openPopup27(){
document.getElementById("popup27").style.display="flex";
}

function closePopup27(){
document.getElementById("popup27").style.display="none";
}

function openPopup28(){
document.getElementById("popup28").style.display="flex";
}

function closePopup28(){
document.getElementById("popup28").style.display="none";
}

function openPopup29(){
document.getElementById("popup29").style.display="flex";
}

function closePopup29(){
document.getElementById("popup29").style.display="none";
}

function openPopup30(){
document.getElementById("popup30").style.display="flex";
}

function closePopup30(){
document.getElementById("popup30").style.display="none";
}

function openPopup31(){
document.getElementById("popup31").style.display="flex";
}

function closePopup31(){
document.getElementById("popup31").style.display="none";
}

function openPopup32(){
document.getElementById("popup32").style.display="flex";
}

function closePopup32(){
document.getElementById("popup32").style.display="none";
}

function openPopup33(){
document.getElementById("popup33").style.display="flex";
}

function closePopup33(){
document.getElementById("popup33").style.display="none";
}

function openPopup34(){
document.getElementById("popup34").style.display="flex";
}

function closePopup34(){
document.getElementById("popup34").style.display="none";
}

function openPopup35(){
document.getElementById("popup35").style.display="flex";
}

function closePopup35(){
document.getElementById("popup35").style.display="none";
}

function openPopup36(){
document.getElementById("popup36").style.display="flex";
}

function closePopup36(){
document.getElementById("popup36").style.display="none";
}

function openPopup37(){
document.getElementById("popup37").style.display="flex";
}

function closePopup37(){
document.getElementById("popup37").style.display="none";
}

function openPopup38(){
document.getElementById("popup38").style.display="flex";
}

function closePopup38(){
document.getElementById("popup38").style.display="none";
}

function openPopup39(){
document.getElementById("popup39").style.display="flex";
}

function closePopup39(){
document.getElementById("popup39").style.display="none";
}

function openPopup40(){
document.getElementById("popup40").style.display="flex";
}

function closePopup40(){
document.getElementById("popup40").style.display="none";
}

function openPopup41(){
document.getElementById("popup41").style.display="flex";
}

function closePopup41(){
document.getElementById("popup41").style.display="none";
}

function openPopup42(){
document.getElementById("popup42").style.display="flex";
}

function closePopup42(){
document.getElementById("popup42").style.display="none";
}

function openPopup43(){
document.getElementById("popup43").style.display="flex";
}

function closePopup43(){
document.getElementById("popup43").style.display="none";
}

function openPopup44(){
document.getElementById("popup44").style.display="flex";
}

function closePopup44(){
document.getElementById("popup44").style.display="none";
}

function openPopup45(){
document.getElementById("popup45").style.display="flex";
}

function closePopup45(){
document.getElementById("popup45").style.display="none";
}

function openPopup46(){
document.getElementById("popup46").style.display="flex";
}

function closePopup46(){
document.getElementById("popup46").style.display="none";
}

function openPopup47(){
document.getElementById("popup47").style.display="flex";
}

function closePopup47(){
document.getElementById("popup47").style.display="none";
}

function openPopup48(){
document.getElementById("popup48").style.display="flex";
}

function closePopup48(){
document.getElementById("popup48").style.display="none";
}

function openPopup49(){
document.getElementById("popup49").style.display="flex";
}

function closePopup49(){
document.getElementById("popup49").style.display="none";
}

function openPopup50(){
document.getElementById("popup50").style.display="flex";
}

function closePopup50(){
document.getElementById("popup50").style.display="none";
}

function openPopup51(){
document.getElementById("popup51").style.display="flex";
}

function closePopup51(){
document.getElementById("popup51").style.display="none";
}


function openPopup52(){
document.getElementById("popup52").style.display="flex";
}

function closePopup52(){
document.getElementById("popup52").style.display="none";
}

function openPopup53(){
document.getElementById("popup53").style.display="flex";
}

function closePopup53(){
document.getElementById("popup53").style.display="none";
}

function openPopup54(){
document.getElementById("popup54").style.display="flex";
}

function closePopup54(){
document.getElementById("popup54").style.display="none";
}


function openPopup55(){
document.getElementById("popup55").style.display="flex";
}

function closePopup55(){
document.getElementById("popup55").style.display="none";
}

function openPopup56(){
document.getElementById("popup56").style.display="flex";
}

function closePopup56(){
document.getElementById("popup56").style.display="none";
}

function openPopup57(){
document.getElementById("popup57").style.display="flex";
}

function closePopup57(){
document.getElementById("popup57").style.display="none";
}


// text copy block

// Disable Right Click
// document.addEventListener("contextmenu", function(e){
// e.preventDefault();
// });

// // Disable Key Shortcuts
// document.addEventListener("keydown", function(e) {

// if (e.key === "F12") {
// e.preventDefault();
// }

// if (e.ctrlKey && e.key === "u") {
// e.preventDefault();
// }

// if (e.ctrlKey && e.key === "s") {
// e.preventDefault();
// }

// if (e.ctrlKey && e.key === "c") {
// e.preventDefault();
// }

// if (e.ctrlKey && e.shiftKey && e.key === "I") {
// e.preventDefault();
// }

// if (e.ctrlKey && e.shiftKey && e.key === "J") {
// e.preventDefault();
// }

// });


// // document.querySelectorAll("img").forEach(img => {
// // img.addEventListener("dragstart", function(e){
// // e.preventDefault();
// // });
// // });
// copy block







window.addEventListener("load", function(){
  document.getElementById("loader").style.display = "none";
});

