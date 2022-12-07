inputToDo();
const content = document.querySelector(".content");

function inputToDo() {
  button.onclick = () => {
    // var x = document.getElementById("text-input").value;
    // if (x.length > 0) {
    // console.log(x);
    // const para = document.createElement("div");

    // const input = document.createElement("input");
    // input.classList.add("checkbox-round");
    // input.setAttribute("type", "checkbox");

    // const a = document.createElement("a");
    // a.classList.add("todo-text");

    // const node = document.createTextNode(x);

    // para.classList.add("todoI");
    // a.appendChild(node);
    // para.appendChild(input);
    // para.appendChild(a);
    // const element = document.getElementById("list");
    // element.appendChild(para);

    const people = ["mario", "luigi", "yoshi"];
    console.log(people);
    people.forEach((person) => {
      content.innerHtml += `<h2>${person}</h2>`;
      console.log(person);
    });
    // }
  };
}
var checkboxs = document.getElementsByClassName("checkbox-round ");
for (i = 0; i < checkboxs.length; i++) {
  console.log(checkboxs[i]);
}
