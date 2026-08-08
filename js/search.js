// =========================
// SANJIT BLOG LIVE SEARCH
// =========================


document.addEventListener("DOMContentLoaded", function () {



const searchInput = document.querySelector(".search-box input");



if (searchInput) {



    const cards = document.querySelectorAll(".card");

    const container = document.querySelector(".popular .container");



    // No Result Message

    const noResult = document.createElement("h2");

    noResult.textContent = "No matching posts found.";

    noResult.className = "no-result";

    noResult.style.textAlign = "center";

    noResult.style.marginTop = "30px";

    noResult.style.display = "none";



    if(container){

        container.appendChild(noResult);

    }





    searchInput.addEventListener("keyup", function(){



        const value = this.value.toLowerCase().trim();


        let visible = 0;



        cards.forEach(card => {



            const titleElement = card.querySelector("h3");

            const descElement = card.querySelector("p");



            const title = titleElement ? 
            titleElement.textContent.toLowerCase() : "";



            const desc = descElement ? 
            descElement.textContent.toLowerCase() : "";





            if(
                title.includes(value) ||
                desc.includes(value)
            ){


                card.style.display = "block";

                visible++;


            }else{


                card.style.display = "none";


            }



        });




        if(noResult){

            noResult.style.display =
            visible === 0 ? "block" : "none";

        }



    });








    // =========================
    // Search Suggestions
    // =========================



    const suggestions = [

        "Travel Nepal",
        "Technology",
        "Programming",
        "JavaScript",
        "HTML",
        "CSS",
        "Netflix",
        "Pets",
        "Education",
        "Tourism"

    ];




    const searchBox = document.querySelector(".search-box");



    if(searchBox){



        const suggestionBox = document.createElement("div");


        suggestionBox.className = "suggestions";


        suggestionBox.style.display = "none";



        searchBox.appendChild(suggestionBox);





        searchInput.addEventListener("input", function(){



            const value = this.value.toLowerCase();



            suggestionBox.innerHTML = "";



            if(value.length === 0){


                suggestionBox.style.display = "none";

                return;


            }





            const result = suggestions.filter(item =>

                item.toLowerCase()
                .includes(value)

            );






            result.forEach(item => {



                const div = document.createElement("div");


                div.className = "suggestion-item";


                div.textContent = item;





                div.addEventListener("click",function(){


                    searchInput.value = item;


                    suggestionBox.style.display="none";


                    searchInput.dispatchEvent(
                        new Event("keyup")
                    );


                });




                suggestionBox.appendChild(div);



            });





            suggestionBox.style.display =
            result.length ? "block" : "none";



        });

        document.addEventListener("click",function(e){



            if(!e.target.closest(".search-box")){


                suggestionBox.style.display="none";


            }


        });



    }





}


// =========================
// Category Cards
// =========================



const categoryCards = document.querySelectorAll(".category-card");



categoryCards.forEach(card => {



    card.addEventListener("click",function(){



        const name = 
        card.querySelector("h3")?.textContent;



        if(name){


            window.location.href =
            "categories.html?category=" 
            + encodeURIComponent(name);


        }



    });



});



});