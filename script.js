document.addEventListener('DOMContentLoaded', function() {
    const folderIcons = document.querySelectorAll('.folder .folder-icon');
    folderIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const subMenu = this.parentElement.nextElementSibling;
        if (subMenu.style.display === 'block') {
          subMenu.style.display = 'none';
        } else {
          subMenu.style.display = 'block';
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
  const allButtons = document.querySelectorAll('.filter-options button');

  allButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Toggle submenu visibility here
          // Example:
          const submenu = button.nextElementSibling;
          if (submenu) {
              submenu.classList.toggle('show');
          }
      });
  });
});
