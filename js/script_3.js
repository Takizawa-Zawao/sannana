function createInputBox(place, message){
    var created_content = document.getElementById("created_content");
    try{
        created_content.remove();
    }catch(err){

    }

    var input_type = new Map();
    input_type.set("mail_form", "email");
    input_type.set("id_form", "number");
    

    var paragraph = document.createElement("div");
    paragraph.id = "created_content";
    paragraph.className = "created=content";

    var child_paragraph = document.createElement("p");
    child_paragraph.textContent = message;
    paragraph.appendChild(child_paragraph);
    
    var input_paragraph_01 = document.createElement("p");
    var inputBox = document.createElement("input");
    inputBox.type = input_type.get(place);
    inputBox.name = place;
    inputBox.required = true;
    input_paragraph_01.appendChild(inputBox);
    paragraph.appendChild(input_paragraph_01);

    var input_paragraph_02 = document.createElement("p");
    var inputButton = document.createElement("input");
    inputButton.type = "submit";
    inputButton.className = "submit_button";
    inputButton.value = "予約確認";
    input_paragraph_02.appendChild(inputButton);
    paragraph.appendChild(input_paragraph_02);

    document.getElementById(place).after(paragraph);
}

function button_click_1(){
    createInputBox("mail_form", "予約時に登録したメールアドレスを入力してください。");
}

function button_click_2(){
    createInputBox("id_form", "予約番号を入力してください。");
}
