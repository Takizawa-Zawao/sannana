function addGuest(){

    //既存の「お連れ様」数を取得し、次のお連れ様のナンバリングを決定
    var guests = document.getElementsByClassName("guest");
    var next_guest_count = guests.length + 1;    
    
    //既存のdivを差し替える形で、「お連れ様」情報入力エリアを新規追加
    var new_guest_set = document.createElement("div");
    new_guest_set.id = "guest_" + parseInt(next_guest_count);
    new_guest_set.className = "guest";

    var new_guest_header = document.createElement("p");
    new_guest_header.textContent = "お連れ様" + parseInt(next_guest_count);
    new_guest_set.appendChild(new_guest_header);

    var new_guest = document.createElement("ul");
    
    var new_guest_last_name = document.createElement("li");
    var new_guest_last_name_text = document.createElement("p");
    new_guest_last_name_text.textContent = "姓（例：三七）";
    new_guest_last_name.appendChild(new_guest_last_name_text);
    var new_guest_last_name_input = document.createElement("input");
    new_guest_last_name_input.type = "text";
    new_guest_last_name_input.name = "lastName_" + parseInt(next_guest_count);
    new_guest_last_name.appendChild(new_guest_last_name_input);
    new_guest.appendChild(new_guest_last_name);

    var new_guest_first_name = document.createElement("li");
    var new_guest_first_name_text = document.createElement("p");
    new_guest_first_name_text.textContent = "名（例：太郎）";
    new_guest_first_name.appendChild(new_guest_first_name_text);
    var new_guest_first_name_input = document.createElement("input");
    new_guest_first_name_input.type = "text";
    new_guest_first_name_input.name = "firstName_" + parseInt(next_guest_count);
    new_guest_first_name.appendChild(new_guest_first_name_input);
    new_guest.appendChild(new_guest_first_name);

    var new_guest_phonetic = document.createElement("li");
    var new_guest_phonetic_text = document.createElement("p");
    new_guest_phonetic_text.textContent = "フリガナ（例：サンナナタロウ）";
    new_guest_phonetic.appendChild(new_guest_phonetic_text);
    var new_guest_phonetic_input = document.createElement("input");
    new_guest_phonetic_input.type = "text";
    new_guest_phonetic_input.name = "phonetic_" + parseInt(next_guest_count);
    new_guest_phonetic.appendChild(new_guest_phonetic_input);
    new_guest.appendChild(new_guest_phonetic);

    var new_guest_area = document.getElementById("add_guest");
    var next_guest_area = new_guest_area.cloneNode();

    new_guest_set.appendChild(new_guest);
    new_guest_area.appendChild(new_guest_set);

    //もうゲスト追加不可能なら、ボタンを削除
    if(next_guest_count >= 8){
        document.getElementById("add_button").remove();
    }
    

}

function removeGuest(){
    //招待客を消去する
    var targetNum = document.getElementsByClassName("guest").length;
    var targetElement = document.getElementById("guest_" + parseInt(targetNum));
    targetElement.remove();

    //addボタンが消えていれば復活させる
    if(targetNum >= 8){
        var addButton = document.createElement("input");
        addButton.type = "button";
        addButton.value = "お連れ様を追加";
        addButton.id = "add_button";
        addButton.onclick = addGuest;
        document.getElementById("remove_button").before(addButton);    
    }
}