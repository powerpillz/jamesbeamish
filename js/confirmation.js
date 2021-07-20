var url_string = window.location.href;
var url = new URL(url_string);
const firstName = url.searchParams.get('firstName');
const address = url.searchParams.get('Address');
const phone = url.searchParams.get('Phone');
const lastName = url.searchParams.get('lastName');

document.getElementById("Name").innerHTML = "Your name: "+firstName + " " +lastName;
document.getElementById("Phone").innerHTML = "Contact number: "+phone;
document.getElementById("Address").innerHTML = "Postal address: "+address;
