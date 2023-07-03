//conmunity-btn 클릭한 요소에만 색깔 변경
const container = document.querySelector('.container-community-btn');
const submitButtons = container.querySelectorAll('input[type="submit"]');

submitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    submitButtons.forEach(function(btn) {
      if (btn !== button) {
        btn.classList.remove('active');
      }
    });
    button.classList.toggle('active');
  });
});
submitButtons[0].classList.add('active');
document.addEventListener('click', function(event) {
  const target = event.target;

  if (!target.matches('input[type="submit"]') && !container.contains(target)) {
    submitButtons.forEach(function(button) {
      button.classList.remove('active');
    });
  }
});



