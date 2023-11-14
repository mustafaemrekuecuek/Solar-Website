window.addEventListener('scroll', function() {
    var button = document.querySelector('.contactBtn');
    var topContainer = document.querySelector('.top-container');
    var topContainerHeight = topContainer.offsetHeight;
    
    if (window.scrollY < topContainerHeight) {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
  });
  