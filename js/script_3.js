function createInputBox(place, message){
    var created_forms = document.getElementsByClassName("created_form");
    for(var created_form of created_forms){
        created_form.remove();
    }
    var paragraph = document.createElement("p");
    paragraph.textContent = message;

    var inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.name = "place";
    inputBox.className = "created_form";
    paragraph.appendChild(inputBox);

    var inputButton = document.createElement("input");
    inputButton.type = "submit";
    inputButton.value = "予約確認";
    inputButton.className = "created_form";
    paragraph.appendChild(inputButton);

    document.getElementById(place).after(paragraph);
}

function button_click_1(){
    createInputBox("mail_form", "予約時に登録したメールアドレスを入力してください。");
}

function button_click_2(){
    createInputBox("id_form", "予約番号を入力してください。");
}
