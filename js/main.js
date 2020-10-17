var workingAge = new Date().getFullYear() - 14;
document.getElementById("year").max = workingAge;
console.log(workingAge);

var formFild,
  flag = true;

function checkPattern() {
  var mes = document.getElementById("message");

  //проверка основных полей
  if (document.getElementById("fileInput").value == "") {
    mes.innerHTML = "Загрузите фото";
    document.getElementById("fileInput").style.border = "solid 1px red";
    return;
  } else document.getElementById("fileInput").style.border = "";
  if (!document.getElementById("fileInput").checkValidity()) {
    mes.innerHTML = "Загрузите фото";
    document.getElementById("fileInput").style.border = "solid 1px red";
    return;
  } else document.getElementById("fileInput").style.border = "";
  if (!document.getElementById("surname").checkValidity()) {
    mes.innerHTML =
      "Неверный ввод фамилии. Фамилия должна быть написана кириллицей и начинаться с большой буквы";
    document.getElementById("surname").style.border = "solid 1px red";
    return;
  } else document.getElementById("surname").style.border = "";
  if (!document.getElementById("name").checkValidity()) {
    mes.innerHTML =
      "Неверный ввод имени. Имя должно быть написано кириллицей и начинаться с большой буквы";
    document.getElementById("name").style.border = "solid 1px red";
    return;
  } else document.getElementById("name").style.border = "";
  if (!document.getElementById("patronymic").checkValidity()) {
    mes.innerHTML =
      "Неверный ввод отчества. Отчество должно быть написано кириллицей и начинаться с большой буквы";
    document.getElementById("patronymic").style.border = "solid 1px red";
    return;
  } else document.getElementById("patronymic").style.border = "";
  if (!document.getElementById("year").checkValidity()) {
    mes.innerHTML =
      "Неверный ввод года рождения. Год должен находиться в диапазоне от 1900 до "+workingAge;
    document.getElementById("year").style.border = "solid 1px red";
    return;
  } else document.getElementById("year").style.border = "";
  if (!document.getElementById("phone").checkValidity()) {
    mes.innerHTML =
      "Неверный ввод телефона. Белорусский номер, полный международный формат +375xxxxxxxxx";
    document.getElementById("phone").style.border = "solid 1px red";
    return;
  } else document.getElementById("phone").style.border = "";
  if (!document.getElementById("email").checkValidity()) {
    mes.innerHTML = "Проверьте правильность ввода адреса электронной почты";
    document.getElementById("email").style.border = "solid 1px red";
    return;
  } else document.getElementById("email").style.border = "";

  //проверка дополнительных полей
  for (var i = 0; i < numBlocks.length; i++) {
    if (numBlocks[i] == 0) continue;
    for (var j = 0; j < numBlocks[i].length; j++) {
      formFild = document.getElementById("formFild" + (i + 1) + "-" + (j + 1));
      if (formFild)
        if (formFild.children[0].value.length < 1) {
          formFild.children[0].style.borderColor = "red";
          mes.innerHTML = "Заполните дополнительные поля или удалите ненужные";
          flag = false;
        } else formFild.children[0].style.borderColor = "";
      if (formFild)
        if (formFild.children[2].value.length < 1) {
          formFild.children[2].style.borderColor = "red";
          mes.innerHTML = "Заполните дополнительные поля или удалите ненужные";
          flag = false;
        } else formFild.children[2].style.borderColor = "";
    }
  }
  if (!flag) {
    flag = true;
    return;
  }

  //валидация пройдена
  mes.innerHTML = "";
  generateHTMLResume();
}

function generateHTMLResume() {
  //генерация основной части
  var recumeContent =
    "<head><meta charset='utf-8'><title>Resume</title></head>";
  var styles =
    "<style>body {display: flex; align-content: center; flex-flow: row wrap; justify-content: space-around; width: 800px; margin: auto; margin-top: 20px} img {height: 250px; object-fit: cover; box-shadow: 0px 0px 5px 0px black; width: 250px; border-radius: 50%;} .mainBlock {padding: 10px} .contacts > h4 {margin-bottom: 0} .contentItem { padding: 1rem; background-color: rgb(7 48 89 / 45%); color: white; margin: 1rem; border: solid 3px rgb(65 69 73); width: 100%;} .contentItem > div {margin-bottom: 15px}</style>";
  recumeContent =
    recumeContent +
    styles +
    "<body style='font-family: Arial, Helvetica, sans-serif'>" +
    document.getElementById("displayArea").innerHTML +
    "<div class='mainBlock'><div><h2>" +
    document.getElementById("surname").value +
    " " +
    document.getElementById("name").value +
    " " +
    document.getElementById("patronymic").value +
    "</h2></div>" +
    "<div>Год рождения: " +
    document.getElementById("year").value +
    "</div><div class='contacts'><h4>Контакты:</h4><p>Телефон: " +
    document.getElementById("phone").value +
    "</p><p>Email: " +
    document.getElementById("email").value +
    "</p></div></div>";
  //генерация дополнительных блоков
  if (numBlocks.length > 0) {
    for (var i = 0; i < numBlocks.length; i++) {
      if (numBlocks[i] == 0 || numBlocks[i].indexOf(true) < 0) continue;
      recumeContent =
        recumeContent +
        "<div class='contentItem'><h3><u>" +
        document.getElementById("titleBlock" + (i + 1)).innerHTML +
        "</u></h3>";
      for (var j = 0; j < numBlocks[i].length; j++) {
        if (document.getElementById("formFild" + (i + 1) + "-" + (j + 1)))
          recumeContent =
            recumeContent +
            "<div><b>" +
            document.getElementById("formFild" + (i + 1) + "-" + (j + 1))
              .children[0].value +
            "</b>: ";
        if (document.getElementById("formFild" + (i + 1) + "-" + (j + 1)))
          recumeContent =
            recumeContent +
            document.getElementById("formFild" + (i + 1) + "-" + (j + 1))
              .children[2].value +
            "</div>";
      }
      recumeContent = recumeContent + "</div>";
    }
  }
  recumeContent = recumeContent + "</body>";
  generateFile("CV.html", recumeContent);
}

function generateFile(name, value) {
  var val = value;
  if (value === undefined) {
    val = "";
  }
  var download = document.createElement("a");
  download.href =
    "data:text/plain;content-disposition=attachment;filename=file," + val;
  download.download = name;
  download.style.display = "none";
  download.id = "download";
  document.body.appendChild(download);
  document.getElementById("download").click();
  document.body.removeChild(download);
}
