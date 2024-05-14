const accordions = document.getElementsByClassName("faqtitlewrap");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector('.img-plus').classList.add('is-visible');
      this.querySelector('.img-minus').classList.remove('is-visible');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.querySelector('.img-plus').classList.remove('is-visible');
      this.querySelector('.img-minus').classList.add('is-visible');
    }
  });
}