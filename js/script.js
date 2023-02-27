$(document).ready(function () {
  const counterUp = window.counterUp.default
  const callback = entries => {
    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        for (const counter of counters) {
          counterUp(counter, {
            duration: 2000,
            delay: 16,
          })
          el.classList.add('is-visible')
        }
      }
    })
  }

  const IO = new IntersectionObserver(callback, { threshold: 1 })
  const el = document.querySelector('#skills h6')
  const counters = document.querySelectorAll('#skills h6')
  IO.observe(el)
});


// Slider
$(document).ready(function () {
  $('#project .slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    prevArrow: "<span class='material-symbols-outlined slick-prev'>chevron_left</span>",
    nextArrow: "<span class='material-symbols-outlined slick-next'>chevron_right</span>"
  });

});

$(document).ready(function() {
  const submit = $('footer form button');
  const check = $('footer form #check');

  function submitForm() {
    if (!check.prop('checked')) {
      alert("개인정보 활용에 동의해야 합니다.");
      return;
    }

    $('footer form').submit();
  }

  submit.on('click', function(e) {
    e.preventDefault();
    submitForm();
  });
});
