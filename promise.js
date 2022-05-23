// Does Not Impact the Project; just Promise Practice

const record1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("video 1");
    },0)
});
const record2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("video 2");
    },0)
});
const record3 = new Promise((resolve, reject) => {
  resolve("video 3");
});



Promise.race([record1, record2, record3]).then((messages) =>
  console.log(messages)
).catch((err)=>console.log(err))


//after one reject it stops the other promises
//async
//puts it into task queue; callback functions, microtask queue; mainpultaes the DOM 



