
const tipAmount = document.getElementById("tip-amt")
const numPpl = document.getElementById("numppl")
const total = document.getElementById("total")
const reset = document.getElementById("reset")
const billValue = document.getElementById("bill-value")
const tipValue= document.getElementById("tip")
const errormsg= document.getElementById("error")

billValue.value = "0.0";
numPpl.value = 1;
tipAmount.textContent="$ 0.00"
 total.textContent="$ 0.00  "

let bill = 0.0
let tip = 0.15
let ppl= 1
billValue.addEventListener("input",function(){
    bill = billValue.value
    calculatetip()
})
tipValue.addEventListener("click",function(e){
       
       tip = e.target.value
        calculatetip()
})
numPpl.addEventListener("input",function(){
      ppl= numPpl.value
      if(ppl<1){
            errormsg.style.display = "block";       
      }
      else{
        errormsg.style.display = "none"; 
      }

    calculatetip()
})

function calculatetip()
{
    let tiptotalAmount = bill * tip
    let totalperperson = bill * tip /ppl
    tipAmount.textContent = '$'+ tiptotalAmount.toFixed(2)
    total.textContent = '$'+ totalperperson.toFixed(2)
}

reset.addEventListener("click",function(){
    billValue.value= "0.0"
    numPpl.value= 1
    tipAmount.textContent="$ 0.00"
     total.textContent="$ 0.00  "
})