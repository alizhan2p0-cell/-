function updateTime(){

let now = new Date()

document.getElementById("time").innerHTML =
"Қазіргі уақыт: " + now.toLocaleTimeString()

}

setInterval(updateTime,1000)


let tasks = JSON.parse(localStorage.getItem("tasks")) || []

const list = document.getElementById("taskList")

function render(){

list.innerHTML=""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

li.textContent = task

li.onclick = ()=> li.classList.toggle("done")

let del = document.createElement("button")
del.textContent="X"

del.onclick=()=>{

tasks.splice(index,1)
save()

}

li.appendChild(del)
list.appendChild(li)

})

}

function save(){

localStorage.setItem("tasks",JSON.stringify(tasks))
render()

}

document.getElementById("addTask").onclick=()=>{

let input=document.getElementById("taskInput")

if(input.value==="") return

tasks.push(input.value)

input.value=""

save()

}

render()



document.getElementById("calc").onclick=function(){

let work=+document.getElementById("work").value
let study=+document.getElementById("study").value
let fun=+document.getElementById("fun").value

let productive = work + study
let total = productive + fun

if(total===0){
document.getElementById("result").innerHTML="Мәлімет енгізіңіз"
return
}

let percent = Math.round(productive/total*100)

document.getElementById("result").innerHTML =
"Өнімділік: " + percent + "%"

}



let time = 1500
let timer

function updateTimer(){

let minutes = Math.floor(time/60)
let seconds = time%60

document.getElementById("timer").innerHTML =
minutes + ":" + (seconds<10?"0":"") + seconds

time--

if(time<0){

clearInterval(timer)
alert("Уақыт аяқталды!")

}

}

document.getElementById("start").onclick=()=>{

timer=setInterval(updateTimer,1000)

}

document.getElementById("pause").onclick=()=>{

clearInterval(timer)

}

document.getElementById("reset").onclick=()=>{

clearInterval(timer)
time=1500
updateTimer()

}



document.getElementById("send").onclick=()=>{

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let msg=document.getElementById("message").value

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(name==="" || email==="" || msg===""){
document.getElementById("formMsg").innerHTML="Барлық өрістерді толтырыңыз"
return
}

if(!emailPattern.test(email)){
document.getElementById("formMsg").innerHTML="Email дұрыс емес"
return
}

document.getElementById("formMsg").innerHTML="Хабарлама жіберілді!"

}