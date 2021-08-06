function submitBookingForm(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let mobileNumber = document.getElementById("mobileNumber").value;
  let packageType = document.getElementById("packageType").value;
  let comment = document.getElementById("comment").value;

  let userBookingDetails = {
    fullName,
    email,
    mobileNumber,
    packageType,
    comment
  }

  alert("THANKS " + userBookingDetails.fullName.toUpperCase() + ", WE'LL BE IN TOUCH SHORTLY!");


  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";  
  document.getElementById("mobileNumber").value = "";
  document.getElementById("packageType").value = "";
  document.getElementById("comment").value = "";
}