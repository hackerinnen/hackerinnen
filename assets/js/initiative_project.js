(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const readMoreContainers = Array.prototype.slice.call(document.querySelectorAll('.read-more'), 0);

    readMoreContainers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-open');
        $target.classList.toggle('is-open');

      });
    });
  });
})();
