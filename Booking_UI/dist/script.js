
function setDomain(){
  document.getElementById('customer').innerHTML = "Lê Gia Minh Phú";
  document.getElementById('startDate').innerHTML = "04/07/2022";

  document.getElementById('phoneNumber').innerHTML = "0364321423";
  document.getElementById('endDate').innerHTML = "10/07/2022";

  document.getElementById('room1').innerHTML = "Delux";
  document.getElementById('room2').innerHTML = "Luxury";
  document.getElementById('room1Price').innerHTML = "400000";
  document.getElementById('room2Price').innerHTML = "800000";

  document.getElementById('date').innerHTML = "7";

  document.getElementById('service1').innerHTML = "Spa";
  document.getElementById('service2').innerHTML = "BBQ";
  document.getElementById('service3').innerHTML = "Cái gì đó";
  document.getElementById('service1Price').innerHTML = "400000";
  document.getElementById('service2Price').innerHTML = "500000";
  document.getElementById('service3Price').innerHTML = "600000";

  document.getElementById('transport1').innerHTML = "xe đạp";
  document.getElementById('transport2').innerHTML = "xe máy";
  document.getElementById('transport1Price').innerHTML = "100000";
  document.getElementById('transport2Price').innerHTML = "150000";
}

function calculate() {
    var date = document.getElementById("date").value;

    var room1 = document.getElementById("room1Price").value;
    var room2 = document.getElementById("room2Price").value;

    var service1 = document.getElementById("service1Price").value;
    var service2 = document.getElementById("service2Price").value;
    var service3 = document.getElementById("service3Price").value;

    var transport1 = document.getElementById("transport1Price").value;
    var transport2 = document.getElementById("transport2Price").value;    

    var total = (date * (((room1 + room2)) + (service1 + service2 + service3) + (transport1 + transport2)));
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("total").style.display = "block";
    document.getElementById("money").innerHTML = total;
  
  }
  
  document.getElementById("total").style.display = "none";
  
  document.getElementById("calculate").onclick = function() {
    calculate();
  };