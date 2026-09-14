(function() {
  function klarTilBrug(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  klarTilBrug(function() {
    var boks = document.getElementById('venteliste-form') || document;
    var checkbox = boks.querySelector('input[type="checkbox"]');
    var knap = boks.querySelector('button, input[type="submit"]');
    if (!checkbox || !knap) return;
    var formular = knap.closest('form') || checkbox.closest('form');

    function opdaterKnap() {
      knap.disabled = !checkbox.checked;
      knap.style.opacity = checkbox.checked ? '' : '0.5';
      knap.style.cursor = checkbox.checked ? '' : 'not-allowed';
    }
    opdaterKnap();
    checkbox.addEventListener('change', opdaterKnap);

    function blokerHvisIkkeAfkrydset(e) {
      if (!checkbox.checked) {
        e.preventDefault();
        e.stopPropagation();
        checkbox.scrollIntoView({behavior: 'smooth', block: 'center'});
        checkbox.style.outline = '2px solid #C4698F';
        setTimeout(function(){ checkbox.style.outline = ''; }, 2000);
      }
    }

    knap.addEventListener('click', blokerHvisIkkeAfkrydset, true);
    if (formular) {
      formular.addEventListener('submit', blokerHvisIkkeAfkrydset, true);
    }
  });
})();
