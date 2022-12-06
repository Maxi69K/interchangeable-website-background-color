// Interchangeable Website Background Color
const btns = document.querySelectorAll('.btn');
const myBody = document.body;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        number = parseInt(btn.value);

        changeBackground(number);
    });
});

function changeBackground(number) {
    myBody.className = '';
    switch (number) {
        case 1:
            myBody.classList.add('background-1');
            break;
        case 2:
            myBody.classList.add('background-2');
            break;
        case 3:
            myBody.classList.add('background-3');
            break;
        case 4:
            myBody.classList.add('background-4');
            break;
        case 5:
            myBody.className = '';
            break;
        default:
            break;
    }
}