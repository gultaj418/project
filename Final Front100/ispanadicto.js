const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestBox = searchWrapper.querySelector(".new-box");

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArr = [];
  if (userData) {
    emptyArr = words.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArr = emptyArr.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    console.log(emptyArr);
    searchWrapper.classList.add("active");
    showSuggestion(emptyArr);
    let allList = suggestBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};

function showSuggestion(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggestBox.innerHTML = listData;
}
