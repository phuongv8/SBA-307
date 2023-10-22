let submitBtn = document.getElementById("submit-btn");
let errorMessage = document.getElementById("error-message");



submitBtn.addEventListener('click', event => {
    event.preventDefault();
    if (isFormValid()) {
        window.location.href = '/pages/confirmation.html';
    } else {
        errorMessage.style.visibility = 'visible';
    }
});

function isFormValid() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2Checkboxes = document.querySelectorAll('input[name="q2"]:checked');
    const q3 = document.getElementById("q3").value;

    if (!q1 || q2Checkboxes.length === 0 || q3.trim() === '') {
        return false;
    }
    return true;
}


