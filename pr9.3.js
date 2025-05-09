document.addEventListener("DOMContentLoaded", function() {
    const togglers = document.querySelectorAll('.caret');

    togglers.forEach(function(toggler) {
        toggler.addEventListener('click', function() {
            const nestedList = this.parentElement.querySelector('.nested');
            if (nestedList) {
                nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
                this.classList.toggle('caret-down');
            }
        });
    });
});
