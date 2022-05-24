function pray() {
  console.log(localStorage.getItem("Prayers"))
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
  if (localStorage.getItem("Prayers") >= 20) {
    document.getElementById("prayer_msg").innerHTML = "Allah is Proud";
  }
}

function set_prayer() { 
  document.getElementById("prayer_count").innerHTML = `Prayers: ${localStorage.getItem("Prayers")}`;
  if (localStorage.getItem("Prayers") >= 20) {
    document.getElementById("prayer_msg").innerHTML = "Allah is Proud";
  }
}