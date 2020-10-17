var fileInput = document.getElementById("fileInput");
var fileDisplayArea = document.getElementById("displayArea");

fileInput.addEventListener("change", function (e) {
  var file = fileInput.files[0];
  var imageType = /image.*/;

  if (typeof file === "undefined") {
    document.getElementById("imageDisplayArea").src = "imgs/noimg.png";
    return;
  }

  if (file.type.match(imageType)) {
    var reader = new FileReader();

    reader.onload = function (e) {
      fileDisplayArea.innerHTML = "";

      var img = new Image();
      img.src = reader.result;
      img.id = "imageDisplayArea";

      /*проверка размера
      if (img.src.length > 136000) {
        document.getElementById("message").innerHTML =
          "Слишком большое фото. Загрузите фото не более 100кб";
        document.getElementById("fileInput").style.border = "solid 1px red";
      } else {
        document.getElementById("fileInput").style.border = "";
        document.getElementById("message").innerHTML = "";
      }*/

      fileDisplayArea.appendChild(img);
    };

    reader.readAsDataURL(file);
    document.getElementById("message").innerHTML = "";
    document.getElementById("fileInput").style.border = "";
  } else {
    document.getElementById("message").innerHTML = "Неверный формат файла!";
    document.getElementById("fileInput").style.border = "solid 1px red";
    document.getElementById("imageDisplayArea").src = "imgs/noimg.png";
    document.getElementById("fileInput").value = "";
  }
});
