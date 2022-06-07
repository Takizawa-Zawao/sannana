function addGuest(){
    alert("start");

    //既存の「お連れ様」数を取得し、次のお連れ様のナンバリングを決定
    var guests = document.getElementsByClassName("guest");
    var next_guest_count = guests.length + 1;    
    
    alert(next_guest_count);

    //既存のdivを差し替える形で、「お連れ様」情報入力エリアを新規追加
    var new_guest = document.createElement("ul");
    new_guest.className = "guest";
    
    var new_guest_last_name = document.createElement("li");
    new_guest_last_name.textContent = "姓（例：三七）";
    var new_guest_last_name_input = document.createElement("input");
    new_guest_last_name_input.type = "text";
    new_guest_last_name_input.name = "last_name_" + parseInt(next_guest_count);
    new_guest_last_name.appendChild(new_guest_last_name_input);
    new_guest.appendChild(new_guest_last_name);

    alert("ok_1");

    var new_guest_first_name = document.createElement("li");
    new_guest_first_name.textContent = "名（例：太郎）";
    var new_guest_first_name_input = document.createElement("input");
    new_guest_first_name_input.type = "text";
    new_guest_first_name_input.name = "first_name_" + parseInt(next_guest_count);
    new_guest_first_name.appendChild(new_guest_first_name_input);
    new_guest.appendChild(new_guest_first_name);

    var new_guest_phonetic = document.createElement("li");
    new_guest_phonetic = "フリガナ（例：サンナナタロウ）";
    var new_guest_phonetic_input = document.createElement("input");
    new_guest_phonetic_input.type = "text";
    new_guest_phonetic_input.name = "phonetic_" + parseInt(next_guest_count);
    new_guest_phonetic.appendChild(new_guest_phonetic_input);
    new_guest.appendChild(new_guest_phonetic);

    alert(new_guest);

    var new_guest_area = document.getElementById("add_guest");
    var next_guest_area = new_guest_area.cloneNode();
    new_guest_area.appendChild(new_guest);

    //idを削除
    new_guest_area.removeAttribute("id");
    
    //まだゲスト追加可能なら、ボタンを配置
    if(next_guest_count < 8){
        document.getElementById("add_button").before(next_guest_area);
    }
    

}