function addGuest(){
    //既存の「お連れ様」数を取得し、次のお連れ様のナンバリングを決定
    var guests = document.getElementsByClassName("guest");
    var next_guest_count = guests.length() + 1;

    //既存のdivを差し替える形で、「お連れ様」情報入力エリアを新規追加
    var new_guest = document.createElement("ul");

    var new_guest_last_name = document.createElement("li");
    new_guest_last_name.textContent = "姓（例：三七）";
    var new_guest_last_name_input = document.createElement("input");
    new_guest_last_name_input.type = "text";
    new_guest_last_name_input.name = "last_name_" + next_guest_count;
    new_guest_first_name.appendChild(new_guest_last_name_input);

    var new_guest_first_name = document.createElement("li");
    new_guest_first_name.textContent = "名（例：太郎）";
    var new_guest_first_name_input = document.createElement("input");
    new_guest_first_name_input.type = "text";
    new_guest_first_name_input.name = "first_name_" + next_guest_count;
    new_guest_first_name.appendChild(new_guest_first_name_input);

    var new_guest_phonetic = document.createElement("li");
    new_guest_phonetic = "フリガナ（例：サンナナタロウ）";
    var new_guest_phonetic_input = document.createElement("input");
    new_guest_phonetic_input.type = "text";
    new_guest_phonetic_input.name = "phonetic_" + next_guest_count;
    new_guest_phonetic.appendChild(new_guest_phonetic_input);

    document.getElementById("add_guest").innerHTML = new_guest;
}