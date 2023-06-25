function checkNumber() {
    var number = document.getElementById("numberInput").value;
  
    console.log("Entered number:", number);
  
    if (number % 2 === 0) {
      console.log(number, "is an even number.");
      document.getElementById("result").innerText = number + " is an even number.";
    } else {
      console.log(number, "is an odd number.");
      document.getElementById("result").innerText = number + " is an odd number.";
    }
  }
  