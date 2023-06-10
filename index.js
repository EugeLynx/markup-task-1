function getNameEmailPhone() {
    let email = document.getElementById('emailInput').value;
    let phoneNumber = document.getElementById('numberInput').value;

    if (!checkPhoneNumberStart(phoneNumber)) {
        document.getElementById('numberAlert').innerText = `Номер должен начинаться с '8'`;
        return;
    }
    if (!checkPhoneNumberLength(phoneNumber)) {
        document.getElementById('numberAlert').innerText = 'Веденный номер слишком длинный или слишком короткий';
        return;
    }
    if (!checkBigLetter(email)) {
        document.getElementById('emailAlert').innerText = 'Введенный email имеет неверный формат';
        return;
    }
}

function checkPhoneNumberStart(number) {
    let Boolean = false;
    if ((number[0] === '8')) {
        Boolean = true;
    }

    return Boolean;
}
function checkPhoneNumberLength(number) {
    let Boolean = false;
    if ((number.length === 11)) {
        Boolean = true;
    }

    return Boolean;
}
function checkEmailEnd(email) {
    let Boolean = false;
    if ((email.slice(-10) === '@yandex.ru')) {
        Boolean = true;
    }

    return Boolean;
}