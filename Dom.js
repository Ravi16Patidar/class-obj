// // what is DOM
// document.getElementById("btn").addEventListener("click", () => {
//   alert("this is js");
// });
// document.getElementById("btn").classList.add("newClass");
// document.getElementById("btn").classList.add("newClass2");
// document.getElementById("btn").classList.remove("newClass2");
// console.log(document.getElementById("btn").classList.contains("newClass"))

let button=document.getElementById('btn');
// console.log(content)
// content.style.color="white"
// content.style.backgroundColor="red"
// content.setAttribute('target',"_blank")
// console.log(content.getAttribute("target"))

// create element
// let list=document.querySelector('ul')
// let item=document.createElement('li')
// item.textContent="six"
// console.log(item)
// list.after(item)


// setInterval(()=>{
// alert("this is interval")
// },3000)

// setTimeout(()=>{
// alert("this is timeout")
// },2000)

async function fetchData(){
  let res=await fetch("https://jsonplaceholder.typicode.com/todos")
  console.log(await   res.json())
}
fetchData()