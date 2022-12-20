const api_url = "https://restcountries.com/v3.1/all";



// document.addEventListener("DOMContentLoaded", function(e) {
//     var eval_table = document.getElementsByClassName('abc');
//     console.log(eval_table, eval_table.length);
//   });


//   setTimeout(() => {
//     let elms = document.getElementsByClassName('abc').item(0);
//     console.log(elms);
//   }, 0);

  

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  
 

   function createElm(img, name, population, region, capital , id) {
    let content =
      `    <div class="card">
                    <div class="media media-2x1 gd-primary">
                      <a
                        class="media-content"
                        style="background-image: url(` +
      img +
      `)"data-abc="true"></a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">` +
      name +
      `</h5><p class="card-text">
                     <span> population :</span>  ` +
      population +
      `</p>
                      <p class="card-text">
                     <span> region :</span>  ` +
      region +
      ` </p>
                      <p class="card-text">
                     <span> capital :</span>  ` +
      capital +
      ` </p>
                    </div> 
                  </div>
          `;
  

    let div = document.createElement("div");
    div.className = "col-sm-3 btn abc";
      div.id = id;
    div.innerHTML = content;
    document.getElementById("cards-container").appendChild(div);
  }



  for (let i = 0; i < data.length; i++) {
    createElm(
      data[i].flags.svg,
      data[i].name.common,
      data[i].population,
      data[i].region,
      data[i].capital,
      'a'+i 
    );

    let cardo = document.getElementById('a'+i)
   cardo.addEventListener('click', ()=>{


    let native = "";
    Object.entries(data[i].name.nativeName).forEach(([key, value]) => {
        native = key.toString();
        console.log(native)
      });

      let currency = Object.keys(data[i].currencies)[0];
      let langs = Object.values(data[i].languages)

      console.log(langs);
    localStorage.setItem("flag", data[i].flags.svg)
    localStorage.setItem("namee", data[i].name.common)
    localStorage.setItem("population", data[i].population)
    localStorage.setItem("region",data[i].region)
    localStorage.setItem("capital", data[i].capital)
    localStorage.setItem("nativeName", data[i].name.nativeName[native].common)
    localStorage.setItem("subregion", data[i].subregion)
    localStorage.setItem("demonyms", data[i].demonyms.eng.f)
    localStorage.setItem("currencies", data[i].currencies[currency].name)
    localStorage.setItem("languages", langs)
    localStorage.setItem("borders", data[i].borders)


    self.location.href='index2.html'
})
  }



//   for (var i = 0, len = cardes.length; i < len; i++) {
//     cardes[i].addEventListener("click", function() {
//         console.log(cardes[i].id);
//     });
//   }
}




function zxc(){
    var cardes2 =document.getElementsByClassName("abc");

const cardes = Array.from(document.querySelectorAll(".col-sm-3"));

console.log(cardes)
console.log(cardes2)}




// Calling that async function
getapi(api_url);




// // Function to hide the loader

// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab =
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;

//     // Loop to access all rows
//     for (let r of data.list) {
//         tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }

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
