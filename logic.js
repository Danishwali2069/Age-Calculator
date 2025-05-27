let currDate = document.querySelector("#currdate");
let dob = document.querySelector("#dob");
let cal = document.querySelector("#cal");
let agn = document.querySelector("#again");
let disage = document.querySelector("#disp");
let instr = document.getElementById("instru")
// let age = document.getElementById("age");

let today = new Date();
currDate.innerText = `Today date : ${today.toLocaleDateString('en-Us')}`;
cal.addEventListener("click" , () => {
    let bday = new Date(dob.value);
    let age = today.getFullYear() - bday.getFullYear();
    let m = today.getMonth() - bday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() - bday.getDate())){
        age--;
    }
    if (bday.getMonth() > today.getMonth()){
        m = 12 + m;
    }
    agn.style.visibility = "visible";
    disage.style.visibility = "visible";
    disage.innerText =` Your age : ${age}yrs ${m}month`;
    dob.style.visibility = "hidden";
    cal.style.visibility = "hidden";
    instr.style.visibility = "hidden";
})
agn.addEventListener("click" , () => {
    instr.style.visibility = "visible";
    dob.style.visibility = "visible";
    cal.style.visibility = "visible";
    agn.style.visibility = "hidden";
    disage.style.visibility = "hidden";
})




   
