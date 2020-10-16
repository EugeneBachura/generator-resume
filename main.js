

function checkPattern() {
    var mes = document.getElementById("message");

    //elem.checkValidity()

    //if (elem.checkValidity()) console.log("Верный формат");
    //if (!elem.checkValidity()) console.log("Не верный формат");
    //return re.test(elem.value);

    if (!document.getElementById("fileInput").checkValidity()) { mes.innerHTML = "Загрузите фото"; return false; }
    if (!document.getElementById("surname").checkValidity()) { mes.innerHTML = "Неверный ввод фамилии. Фамилия должна быть написана кириллицей и начинаться с большой буквы"; return false; }
    if (!document.getElementById("name").checkValidity()) { mes.innerHTML = "Неверный ввод имени. Имя должно быть написано кириллицей и начинаться с большой буквы"; return false; }
    if (!document.getElementById("patronymic").checkValidity()) { mes.innerHTML = "Неверный ввод отчества. Отчество должно быть написано кириллицей и начинаться с большой буквы"; return false; }
    if (!document.getElementById("year").checkValidity()) { mes.innerHTML = "Неверный ввод года рождения. В диапазоне от 1900 до 2020"; return false; }
    if (!document.getElementById("phone").checkValidity()) { mes.innerHTML = "Неверный ввод телефона. Белорусский номер, полный международный формат"; return false; }
    if (!document.getElementById("email").checkValidity()) { mes.innerHTML = "Неверный ввод почты"; return false; }
    mes.innerHTML = "";
    document.getElementsByClassName("addBlock");
    
}