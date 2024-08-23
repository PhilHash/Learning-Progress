const nut = document.getElementById("convert-btn");
const nhap = document.getElementById("number");
const ketqua =document.getElementById("output");
const box = document.querySelector(".box");
const checkNumberValid = () => {
   const numberInt = parseFloat(nhap.value);
   if ( nhap.value == "" || !Number.isInteger(numberInt)) {
      ketqua.innerText = "Please enter a valid number";
   } else if (nhap.value <= 0 ){
      ketqua.innerText = "Please enter a number greater than or equal to 1";
   } else if (nhap.value >= 4000){
      ketqua.innerText = "Please enter a number less than or equal to 3999";
   } else {
      box.style.height = "230px";
      ketqua.innerText = `The Roman numeral equivalent of ${nhap.value} is: ${convertToRomanNumerald(numberInt)}`;
   }
};
nut.addEventListener("click", () =>{
   checkNumberValid();
});
nhap.addEventListener("keydown", (e) =>{
   if (e.key === "Enter") {
      checkNumberValid();
   }
})
const convertToRomanNumerald = (numberInt) => {
   const num = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
   };
   let finalNum = '';
   const numkeys = Object.keys(num).reverse();
   numkeys.forEach((key)=> {
      while ( numberInt >= key) {
         finalNum += num[key];
         numberInt -= key;
      }
    });
    return finalNum;
}