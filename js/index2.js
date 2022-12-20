


let flag = localStorage.getItem('flag');
let namee = localStorage.getItem('namee');
let population = localStorage.getItem('population');
let region = localStorage.getItem('region');
let capital = localStorage.getItem('capital');
let nativeName = localStorage.getItem('nativeName');
let subregion = localStorage.getItem('subregion');
let demonyms = localStorage.getItem('demonyms');
let currencies = localStorage.getItem('currencies');
let languages = localStorage.getItem('languages');
let borders = localStorage.getItem('borders');

console.log( 'name ='+ namee);

document.getElementById('contTopLeftH1').innerHTML = namee
document.getElementById('nname').innerHTML = namee
document.getElementById('Population').innerHTML = population
document.getElementById('Region').innerHTML = region
document.getElementById('sRegion').innerHTML = subregion
document.getElementById('Domain').innerHTML = demonyms
document.getElementById('currencies').innerHTML = currencies
document.getElementById('languegies').innerHTML = languages
document.getElementById('imgg').src = flag
document.getElementById('Capital').innerHTML = capital
// document.getElementById('conDown').innerHTML = borders



var flagq = true;

$(function () {
  $(".dark-mode").on("click", function () {
    flagq = !flagq;
    console.log(flagq);

    if (flagq == true) {
      $(":root").css("--varyLightGray", "hsl(0, 0%, 93%)");
      $(":root").css("--varyLightGray2", "hsl(0, 0%, 100%)");
      $(":root").css("--veryDarkBlue", "hsl(209, 19%, 25%)");
    } else {
      $(":root").css("--varyLightGray", "hsl(207, 26%, 17%)");
      $(":root").css("--varyLightGray2", "hsl(209, 19%, 25%)");
      $(":root").css("--veryDarkBlue", "hsl(0, 0%, 93%)");
    }
  });
});
