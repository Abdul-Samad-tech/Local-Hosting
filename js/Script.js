function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    
    // Display map with marker
    var mapOptions = {
      center: {lat: latitude, lng: longitude},
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      map: map,
      title: 'Your Location'
    });
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("demo").innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("demo").innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("demo").innerHTML = "An unknown error occurred.";
        break;
    }
  }
  