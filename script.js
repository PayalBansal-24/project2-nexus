const btns = document.querySelectorAll(".nav-button");
const slides = document.querySelectorAll(".video1");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


//change image
function displayImage(imageUrl, cardId) {
    var image = document.getElementById("image");
    image.src = imageUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    // Set initial content for 'Business Websites'
    updateContent('Business Websites');

    // Add click event listeners to all service links
    document.querySelectorAll('.service-link').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-title');
            updateContent(title);
        });
    });
});

function updateContent(title) {
    // Find the link with the matching title
    const link = document.querySelector('.service-link[data-title="' + title + '"]');
    if (link) {
        const content = link.getAttribute('data-content');

        // Update the content in the col-md-8 section
        document.getElementById('content-title').textContent = title;
        document.getElementById('content-description').innerHTML = content;

        // Update active class for all links
        document.querySelectorAll('.service-link').forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    }
}

window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation-wrap');
    if (window.scrollY > 0) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function onScroll() {
    document.querySelectorAll('.about-heading, .about-h3, .about-p1').forEach(function(el) {
      if (isElementInViewport(el) && !el.classList.contains('animate-on-scroll')) {
        el.classList.add('animate-on-scroll');
      }
    });
  }
  
  window.addEventListener('scroll', onScroll);