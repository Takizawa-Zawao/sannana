function createInputBox(place, message){
    var created_content = document.getElementById("created_content");
    try{
        created_content.remove();
    }catch(err){

    }

    var paragraph = document.createElement("p");
    paragraph.textContent = message;
    paragraph.id = "created_content";

    var inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.name = "place";
    paragraph.appendChild(inputBox);

    var inputButton = document.createElement("input");
    inputButton.type = "submit";
    inputButton.value = "予約確認";
    paragraph.appendChild(inputButton);

    document.getElementById(place).after(paragraph);
}

function button_click_1(){
    createInputBox("mail_form", "予約時に登録したメールアドレスを入力してください。");
}

function button_click_2(){
    createInputBox("id_form", "予約番号を入力してください。");
}
