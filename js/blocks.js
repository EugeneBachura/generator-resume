var numBlocks = [];

function addBlock(title) {
    var resumeForm = document.getElementById('resumeForm');
    var mes2 = document.getElementById("message2");
    if (title.length < 1) { mes2.innerHTML = "Чтобы добавить блок, нужно ввести его заголовок"; return false; }
     else mes2.innerHTML = "";
    numBlocks.push([true]);

    var blocks = numBlocks.length;
    var titleBlock = '<div id="titleBlock'+blocks+'"><b>' + title + '</b></div>';
    var removeBtn = '<button class="closeBtn" onclick="removeBlock('+blocks+')">x</button>';
    var addFormField = '<div id="formFild'+blocks+'-1"><input type="text" style="flex: 0 1 auto; width: calc( 100% - 85px);}" placeholder="Название поля"><button class="removeFieldBtn" onclick="removeField('+blocks+',1)">Удалить</button><textarea style="width: 100%;" placeholder="Содержание поля"></textarea></div>';
    var addFormFieldBtn = '<button class="addFieldBtn" onclick="addFormField('+blocks+')">Добавить+</button>';
    var block = document.createElement('div');
    block.id = "block"+blocks;
    block.className = "addBlock addBorder";
    block.innerHTML = titleBlock + addFormFieldBtn + removeBtn + addFormField;

    resumeForm.appendChild(block);
}

function addFormField(num) {
    var block = document.getElementById('block'+num);
    var fildsInBlock = numBlocks[num-1].length + 1;
    var addFormField = document.createElement('div');
    addFormField.id = 'formFild'+num+'-'+fildsInBlock;
    addFormField.innerHTML = '<input type="text" style="border: solid 1px black" placeholder="Название поля"><textarea placeholder="Содержание поля"></textarea><button onclick="removeField('+num+','+fildsInBlock+')">Удалить</button>';
    block.appendChild(addFormField);
    numBlocks[num-1].push(true);
}

function removeBlock(num) {
    document.getElementById('block'+num).remove();
    numBlocks[num-1] = 0;
    console.log(numBlocks);
}

function removeField(block, fild) {
    document.getElementById('formFild'+block+'-'+fild).remove();
    numBlocks[block-1][fild-1] = false;
}