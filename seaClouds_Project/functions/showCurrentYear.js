function showCurrentYear() {
  let myYear = new Date().getFullYear();
  document.getElementsByTagName('span')[0].innerHTML = myYear;
}
showCurrentYear();    
