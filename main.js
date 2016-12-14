let $ = require('jquery')

$.get('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/402eac2220e07b74c3d770defd8bc56a/29.7604267,-95.3698028').
then(function (response) {
  var temp = response.currently.temperature
    $('#temp').html(temp)

    function color (temperature) {
      temperature = temp
      if (temperature > 80) {
      return 'red'
    } else if (temperature < 80 && temperature > 60) {
      return 'orange'
    } else if (temperature < 60 ) {
      return 'blue'
    }
  }
  $("#change").css("background-color", color)
})
// 
// var convert = document.querySelector('.converts')
// convert.addEventListener("click", celsius)
//
//   function celsius (temps) {
//   temps = $('#temp').text()
//   return (5/9) * (temps - 32)
// }
// $('#temp').html(celsius)

// function celcius (temp) {
//   temp = $('#temp').text()
//   $('#temp').html('')
//   return (5/9) * (temp - 32)
// }
//
// $('#temp').html(celcius)



// function temp (){
//   return 'blue'
// }
// $("#change").css("background-color",c)
