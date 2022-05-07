function pray() {
  console.log("prayed")
  let prayer = parseInt(localStorage.getItem("Prayers"));
  
  if (prayer == null) {
    localStorage.setItem("Prayers", parseInt(0));
    console.log("Value is null")
  }
  if (isNaN(prayer)) {
    localStorage.setItem("Prayers", parseInt(1));
  }
  else {
    localStorage.setItem("Prayers", prayer+1);
  }
  document.getElementById("prayer_count").innerHTML = `Prayers: ${localStorage.getItem("Prayers")}`;
}

function set_prayer() { 
  document.getElementById("prayer_count").innerHTML = `Prayers: ${localStorage.getItem("Prayers")}`;
}
