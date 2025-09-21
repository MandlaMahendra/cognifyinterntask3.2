// Image Modal Functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");

const thumbnails = document.querySelectorAll(".thumb");
thumbnails.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerText = this.alt;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Optional: Close modal on click outside image
modal.onclick = function(e) {
  if(e.target === modal) {
    modal.style.display = "none";
  }
}
