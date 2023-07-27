const submit = document.getElementById("btn");
submit.addEventListener("click", function printdata(event) {
//   console.log(
//     "Submitted"
//   )
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("text").value;
 
            
    console.log("Name : " + name);
    console.log("Email : " +email);
    console.log("Text : " + text);
})