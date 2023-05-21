const sidebar = document.querySelector('.sidebar');

function changeBackground(color) {
  sidebar.style.backgroundColor = color;
  
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  const clickedButton = document.querySelector(`button[onclick="changeBackground('${color}')"`);
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}