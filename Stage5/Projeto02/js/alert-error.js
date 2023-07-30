export var AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('active');
    },
    close() {
        AlertError.element.classList.remove('active');
    }
}