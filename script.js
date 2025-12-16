const form = document.getElementById('userForm');
const resultBox = document.getElementById('result');

const regexPatterns = {
    fullname: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    variant: /^\d{2}$/,
    group: /^[А-ЯІЇЄҐA-Z]{2}-\d{2}$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idcard: /^[А-ЯІЇЄҐA-Z]{2}\s№\d{6}$/
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let hasError = false;
    let outputText = "<h3>Введені дані:</h3><ul>";
    
    const fields = ['fullname', 'variant', 'group', 'phone', 'idcard'];

    fields.forEach(fieldId => {
        const input = document.getElementById(fieldId);
        const value = input.value;
        const pattern = regexPatterns[fieldId];

        if (pattern.test(value)) {
            input.classList.remove('error');
            outputText += `<li><b>${fieldId}:</b> ${value}</li>`;
        } else {
            input.classList.add('error');
            hasError = true;
        }
    });

    outputText += "</ul>";

    if (!hasError) {
        resultBox.innerHTML = outputText;
        resultBox.style.display = 'block';
    } else {
        resultBox.style.display = 'none';
        alert("Помилка! Перевірте поля, виділені червоним.");
    }
});



const targetCell = document.getElementById('target-cell'); 
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('myTable');


function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

targetCell.addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
});

targetCell.addEventListener('click', function() {
    this.style.backgroundColor = colorPicker.value;
});

targetCell.addEventListener('dblclick', function() {
    const selectedColor = colorPicker.value;
    const rows = table.getElementsByTagName('tr');
    
    const startRowIndex = targetCell.parentElement.rowIndex;

    for (let i = startRowIndex; i < rows.length; i += 2) {
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = selectedColor;
        }
    }
});