const div = document.getElementById("display");
const form = document.querySelector("form");
const btn = document.getElementById("btn");
const data = async () => {
  const dataReceived = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const parsedData = await dataReceived.json();
  something(parsedData);
  return parsedData;
};
//CRUD
function something(data) {
  var html = "";
  data
    //.filter((element) => element.userId === 1)
    .forEach((element) => {
      let template = `<div class="temp">
      <h1>${element.userId}</h1>
      <h2>${element.title} 
      <h4>${element.body}</h4>
    </div>`;
      html += template;
    });
  div.innerHTML = html;
}
data();

//SEARCH WITH ENTER KEYWORD
  // const search = async (e) => {
  //   e.preventDefault();
  //   const info = await data();
  //   const array = [];
  //   const val = form.search.value;
  //   const j = info.map((t) => {
  //     if (t.body.includes(val)) {
  //       array.push(t);
  //     }
  //   });
  //   something(array);
  // };
  //btn.addEventListener("keyup", search);


//SEARCH WITH KEYUP VIA INPUT BOX
  const search = async(e)=>{
    e.preventDefault()
    const info = await data()
    const array = [];
    const val = form.search.value;
    const j = info.map((t) => {
      if (t.body.includes(val)) {
        array.push(t);
      }
    });
    something(array);
  }
  form.search.addEventListener('keyup', search)

