let elForm = document.querySelector(".site-form");
let elUserName = document.querySelector(".user-name");
let elUserNickName = document.querySelector(".user-nickname");
let elUserNumber = document.querySelector(".user-number");
let elResultBox = document.querySelector(".result-list");
let usersArray = []
console.log(usersArray);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let nameValue = elUserName.value;
    let nickValue = elUserNickName.value;
    let numberValue = Number(elUserNumber.value);

    if (nameValue == "" || nickValue == "" || numberValue == "") {
        alert("You must write full info");
    } else {
        let obj = {
            id: usersArray.length + 1,
            name: nameValue,
            nickname: nickValue,
            number: numberValue
        }
        usersArray.push(obj);
    }
        elResultBox.innerHTML = ""

        for (const userifoBox of usersArray) {

            const listItem = document.createElement("li");
            const listItemName = document.createElement("p");
            const listItemNick = document.createElement("p");
            const listItemNumber = document.createElement("a");

            listItem.className = 'bg-white p-3 col-3 rounded'
            listItemNumber.className='text-decoration-none text-primary'

            elResultBox.appendChild(listItem);
            listItem.appendChild(listItemName);
            listItem.appendChild(listItemNick);
            listItem.appendChild(listItemNumber);

            listItemName.textContent = "Name: " + userifoBox.name;
            listItemNick.textContent = "Nick name: " + userifoBox.nickname;
            listItemNumber.href = "tel:+998" + userifoBox.number;
            listItemNumber.textContent = "Tel +998 " + userifoBox.number

        }

    elUserName.value = ""
    elUserNickName.value = ""
    elUserNumber.value = ""
})