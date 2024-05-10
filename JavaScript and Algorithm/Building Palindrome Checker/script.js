const nut = document.getElementById("check-btn");
const nhap = document.getElementById("text-input");
const ketqua =document.getElementById("result");
const box = document.querySelector(".box");
const empty = "";
const clearStuff = (a) =>{
    const reg = /\W|_/g;
    return a.replace(reg,"");
}
const checkResult = (a) => {
    for (let i = 0; i < a.length/2; i++) {
        if(a[i] !== a[a.length - 1 - i])
            return false;
    }
    return true;
}
const result = (a) => {
    const gt1 = a.value;
    const gt2 = checkResult(clearStuff(gt1.toLowerCase()));
    if (gt1 === empty) {
        alert("Please input a value");
    }else{
        box.style.height = "190px";
        if(gt2 == true)
            ketqua.innerText = `${gt1} is a palindrome.`
        else
            ketqua.innerText = `${gt1} is not a palindrome.`
    }
}
nut.addEventListener("click", () => {
    result(nhap);
});