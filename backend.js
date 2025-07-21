const items = document.querySelectorAll('.item');

items.forEach(item => {
  const title = item.querySelector('.infoTitle');
  const content = item.querySelector('.infoContent');
  title.addEventListener('click', () => {
    
    items.forEach(other => {
      if (other !== item) {
        other.querySelector('.infoContent').style.maxHeight = null;
      }
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});