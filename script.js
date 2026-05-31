document.querySelectorAll(".option").forEach(option => {
  option.addEventListener('click', function(){
    const url = this.getAttribute('data-link');

    if(url) {
      window.location.href = url;
    }
  });
});

document.querySelector("#logo").addEventListener('click', function(){
  const url = this.getAttribute('data-link');
  if (url) {
    window.location.href = url;
  }
});
