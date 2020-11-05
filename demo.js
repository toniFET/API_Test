/*Chained Promises to Get and Post Data */

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e){
    //select the actuel value of an html to include in Post
    const fav = document.getElementById("fav").value;
    //const newAnimal =  document.getElementById('animal').value;

    //Fake API call
    getAnimal("/fakeAnimalData")
        .then(function(data){
            postData("/addAnimal", {aniaml:data.animal, fact:data.fact, fav:fav})

            updateUI()
        })
}



//POST Example
const postData = async (url= "", data = {})=>{
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData
    } catch(error) {
        console.log("error", error);
    }
}

const getAnimal = async (url) =>{
    const res = await fetch(url)
    try {
        const data = await res.json();
        return data
    } catch(error) {
        console.log("error", error)
    }
}



//Update UI Demo
const updateUI = async ()=> {
    const request = await fetch("/all")
    try {
        const allData = await request.json();
        document.getElementById("animalName").innerHTML = allData[0].animal;
        document.getElementById("animalFact").innerHTML = allData[0].facts;
        document.getElementById("animalFav").innerHTML = allData[0].fav;
    } catch(error) {
        console.log("error", error)
    }
}