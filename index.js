let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`,
  ];
  // Do all of your work inside the document.addEventListener
  // Do all of your work inside the document.addEventListener
  
  document.addEventListener('DOMContentLoaded', function(event) {
    // Random quote of the day generator
    function randomQuote() {
      document.querySelector('#quote-of-the-day').textContent = `"${ quotes[Math.floor(Math.random() * quotes.length)]}"`
    }
    randomQuote();
  
  
    // Part 1
    function changeTitle() {
      document.title = "Yasiris"

    }
    changeTitle()
  
    // Part 2
    function changeBodyBgColor() {
      document.querySelector("body").style.background = "pink"
  

    }
    changeBodyBgColor()
  
  
    // Part 3
    function removeLastFavoriteThing() {
      document.getElementById("favorite-things").lastElementChild.remove()

    }
    removeLastFavoriteThing()
  
    // Part 4
    function makeSpecialTitlesBigger() {
      //change the font size of the special titles 
      document.querySelectorAll(".special-title").forEach((title) => { 
        title.style.fontSize = "50px"

      })
     
      
    }
    makeSpecialTitlesBigger()
  
    // Part 5
    function RemoveChicagoRace() {
      document.querySelectorAll("#past-races li").forEach((race)=> {
        // if (race.innerHTML === "Chicago"){
          // race.remove()
          //console.log(race)
        //} 
        race.innerHTML === "Chicago" ? race.remove() : null
      })
    } 
    RemoveChicagoRace()
  
    // Bonus
    // Part 6 
    function addPastRace() {
      //first: create element
      //second: append element to the list
      let Cuba = document.createElement("li")
      Cuba.innerHTML = "Cuba"
      document.querySelector("#past-races").appendChild(Cuba)
  
    }
   addPastRace()
    // Part 7
    function createNewBlogPost() {
      let div = document.createElement("div")
      div.setAttribute("class ","blog-post purple")
      document.querySelector(".main").appendChild(div)

      let h1 = document.createElement("h1")
      h1.innerHTML = "MARIA LA O"
      document.querySelector(".main").lastElementChild.appendChild(h1)
      
      let p = document.createElement("p")
      p1.innerHTML = "MARIA LA A, MARIA LA O TU MAI ES P Y LA MIA NO"
      document.querySelector(".main").lastElementChild.appendChild(p)

    }
    createNewBlogPost()
})




{/* <div class="blog-post purple"> */}
{/* <h1>Tokyo</h1> */}
{/* <p>I DRIFTED MY CAR AROUND A PARKING GARAGE!</p> */}
// </div>