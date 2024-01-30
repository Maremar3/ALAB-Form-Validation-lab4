const myForm = document.getElementById("registration");
const myInput = document.getElementById("username");
/////The username must contain at least two unique characters.////PArt 3-1/
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //Grab the characters' "numbers."
//   const vals = [];
//   console.log("my value is " + myInput.value);
//   for (let c of myInput.value) {
//     let val = c.charCodeAt(0);
//     console.log("val =", val);
//     // Scale the value from 0 to 255.
//     //   val = convertRange(val, [97, 122], [0, 255]);
//     // vals.push(val);
//   }
// });

////////////////PART 3- 2  Email validation////////////
// function validateEmail() {
//   var email = document.getElementById("email").value;
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email)) {
//     //    {
//     //     alert("Valid email address!");
//     //   } else
//     alert("Invalid email address. Please enter a valid email.");
//   }
// }
