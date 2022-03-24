const btn = document.getElementById('btn-sub');
const btnclear = document.getElementById('clear');

function btnsub(event) {
    event.preventDefault() 
}
btn.addEventListener('click', btnsub);

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
}
btnclear.addEventListener('click', clearFields);
