
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


document.querySelectorAll('.gallery img').forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
        
    lightbox.innerHTML = '';
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(downloadBtn);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
