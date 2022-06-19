function addGuest(){
    //使用済のソートキーを無効化
    var isAvailable = [];
    for(var i = 0; i < 9; i++){
        var key = "isAvailable_" + i;
        var available_array = document.getElementById(key);
        if(available_array == null){
            isAvailable.push(true);
        }else{
            var available = document.getElementById(key).value;
            var dict = [false, true];
            isAvailable.push(dict[available]);    
        }
        
    }
    //既存の「お連れ様」数を取得し、次のお連れ様のナンバリングを決定
    var guests = document.getElementsByClassName("guest");
    var next_guest_count = -1;
    
    for(var j = 1; j < 9; j++){
        var count = "guest_" + j;
        var guest_focus = document.getElementById(count);
        if(!isAvailable[j] || guest_focus != null){
            continue;
        }else{
            next_guest_count = j;
            break;
        }
    }
    
    
    if(next_guest_count == -1){
        alert("これ以上追加できません。");
        return;
    }
        
    
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
    new_guest_last_name_text.textContent = "姓";
    new_guest_last_name.appendChild(new_guest_last_name_text);
    var new_guest_last_name_input = document.createElement("input");
    new_guest_last_name_input.type = "text";
    new_guest_last_name_input.required = true;
    new_guest_last_name_input.name = "lastName_" + parseInt(next_guest_count);
    new_guest_last_name_input.placeholder = "三七";
    new_guest_last_name.appendChild(new_guest_last_name_input);
    new_guest.appendChild(new_guest_last_name);

    var new_guest_first_name = document.createElement("li");
    var new_guest_first_name_text = document.createElement("p");
    new_guest_first_name_text.textContent = "名";
    new_guest_first_name.appendChild(new_guest_first_name_text);
    var new_guest_first_name_input = document.createElement("input");
    new_guest_first_name_input.type = "text";
    new_guest_first_name_input.required = true;
    new_guest_first_name_input.name = "firstName_" + parseInt(next_guest_count);
    new_guest_first_name_input.placeholder = "太郎";
    new_guest_first_name.appendChild(new_guest_first_name_input);
    new_guest.appendChild(new_guest_first_name);

    var new_guest_phonetic = document.createElement("li");
    var new_guest_phonetic_text = document.createElement("p");
    new_guest_phonetic_text.textContent = "フリガナ";
    new_guest_phonetic.appendChild(new_guest_phonetic_text);
    var new_guest_phonetic_input = document.createElement("input");
    new_guest_phonetic_input.type = "text";
    new_guest_phonetic_input.pattern = "[\\u30A1-\\u30FC]*";
    new_guest_phonetic_input.required = true;
    new_guest_phonetic_input.name = "phonetic_" + parseInt(next_guest_count);
    new_guest_phonetic_input.placeholder = "サンナナタロウ";
    new_guest_phonetic.appendChild(new_guest_phonetic_input);
    new_guest.appendChild(new_guest_phonetic);
    
    var new_guest_isMagician = document.createElement("li");
    var new_guest_isMagician_text = "<p>ステージマジックの経験はありますか。</p><input type=\"radio\" name=\"isMagician_" + next_guest_count + "\" value=\"1\" checked>ある<input type=\"radio\" name=\"isMagician\" value=\"0\">ない";
    new_guest_isMagician.innerHTML = new_guest_isMagician_text;
    new_guest.appendChild(new_guest_isMagician);
    
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
    var targetNum = -1;
    var targetElement = null;
    
    for(var k = 8; k > 0; k--){
        var targetName = "guest_" + k;
        targetElement = document.getElementById(targetName);
        if(targetElement == null){
            continue;
        }else{
            targetNum = k;
            break;
        }
    }
    if(targetNum === -1){
        return;
    }
    
    targetElement.remove();

    //addボタンが消えていれば復活させる
    if(document.getElementById("add_button") == null){
        var addButton = document.createElement("input");
        addButton.type = "button";
        addButton.value = "お連れ様を追加";
        addButton.id = "add_button";
        addButton.className = "half_btn button_link";
        addButton.onclick = addGuest;
        document.getElementById("remove_button").before(addButton);    
    }
}

function initialize(){
    document.getElementById("add_button").onclick = addGuest;
    document.getElementById("remove_button").onclick = removeGuest;
}

initialize();