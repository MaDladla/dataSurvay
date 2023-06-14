function addToDatabase() {
    let surname = document.getElementById("surname").value
let fullNames= document.getElementById("fullname").value
let contact = document.getElementById("contact").value
let date = document.getElementById("date").value
let age = document.getElementById("age").value
let pizza= ""
let pasta = ""
let pap = ""
let chickenStir =""
let beef= ""
let other= ""

let eatOut = ""
let movies = ""
let tv = ""
let radio = ""

if(document.getElementById("pizza").checked){
    console.log(document.getElementById("pizza").value)
    pizza = document.getElementById("pizza").value;
}
if(document.getElementById("pasta").checked){
    console.log(document.getElementById("pasta").value)
    pasta = document.getElementById("pasta").value;
}
if(document.getElementById("pap").checked){
    console.log(document.getElementById("pap").value)
    pap = document.getElementById("pap").value;
}
if(document.getElementById("pizza").checked){
    console.log(document.getElementById("chicken").value)
    chickenStir = document.getElementById("chicken").value;
}
if(document.getElementById("beef").checked){
    console.log(document.getElementById("beef").value)
    beef = document.getElementById("beef").value;
}
if(document.getElementById("other").checked){
    console.log(document.getElementById("other").value)
    other= document.getElementById("other").value;
}

if(document.getElementById("eatOut").checked){
    console.log(document.getElementById("eatOut").value)
    eatOut = document.getElementById("eatOut").value;
}
if(document.getElementById("movies").checked){
    console.log(document.getElementById("movies").value)
    movies = document.getElementById("movies").value;
}
if(document.getElementById("tv").checked){
    console.log(document.getElementById("tv").value)
    tv = document.getElementById("tv").value;
}
if(document.getElementById("radio").checked){
    console.log(document.getElementById("radio").value)
    radio= document.getElementById("radio").value;
}

console.log(surname)

db.collection("survay").add({
surname:surname,
fullNames:fullNames,
contact:contact,
date:date,
age:age,
pizza:pizza,
pasta:pasta,
pap:pap,
chickenStir:chickenStir,
beef:beef,
other:other,
eatOut:eatOut,
movies:movies,
tv:tv,
radio:radio
})
.then((response)=>{

console.log(response)


})

alert("Thank you for participation on the survay")
location.href ="screen3.html"

}

function readData(){
console.log("running")
    db.collection("survay").get().then((snapshot)=>{
        console.log(snapshot.length)
        let count = 0
        let ageAvarage = 0
        let ageTotal = 0
        let ages = []
        let people = []
        let oldest=0
        let youngest = 0
        let likePizza = 0
        let likePasta= 0

        let eatOut = 0
        let movies = 0
        let tv = 0
        let radio = 0
        
    snapshot.forEach(element => {
        ages.push(Number(element.data().age))
        people.push(element.data())
        console.log(element.data())
        ageTotal += Number(element.data().age)
        count++
    });
    
    ageAvarage= (ageTotal/count).toFixed(2)
    console.log(ages)
    oldest = Math.max(...ages)
    youngest = Math.min(...ages)
    console.log(ageAvarage)
    console.log(oldest)
    console.log(youngest)
    console.log(people)
    document.getElementById("total").innerHTML = count +" People participated";
    document.getElementById("avgAge").innerHTML = ageAvarage + "Age avarage";
    document.getElementById("old").innerHTML = oldest + " Years";
    document.getElementById("young").innerHTML = youngest +" Years";

    
    likePizza = people.filter((person)=>{
        
        return(
            person.pizza !=""

        )

    })
    likePasta = people.filter((person)=>{
        
        return(
            person.pasta !=""

        )

    })
    likePap = people.filter((person)=>{
        
        return(
            person.pap !=""

        )

    })
    // console.log(likePizza.length)
    // console.log(likePasta.length)
   

        eatOut = people.filter((person)=>{
        
        return(
            person.eatOut == "1" || person.eatOut ==  "2"


        )

    })
    movies = people.filter((person)=>{
        
        return(
            person.movies =="1" ||  person.movies =="2"

        )

    })
    tv = people.filter((person)=>{
        
        return(
            person.tv =="1" || person.tv =="2"

        )

    })
    radio = people.filter((person)=>{
        
        return(
            person.radio =="1" ||  person.radio =="2"

        )

    })

    console.log(likePizza.length)
    let avgPizza = ((Number(likePizza.length)/count)*100).toFixed(2)
    document.getElementById("avgPizza").innerHTML = avgPizza +"%";
    // console.log(likePasta.length)
    let avgPasta = ((likePasta.length/count)*100).toFixed(2)
    document.getElementById("avgPasta").innerHTML = avgPasta +"%";
    let avgPap = ((likePap.length/count)*100).toFixed(2)
    document.getElementById("avgPap").innerHTML = avgPap +"%" ;

    let avgEatOut = ((eatOut.length/count)).toFixed(2)
    document.getElementById("avgEat").innerHTML = avgEatOut +" Average" ;
    let avgMovie = ((movies.length/count)).toFixed(2)
    document.getElementById("avgMovies").innerHTML = avgMovie +" Average" ;
    let avgTv = ((tv.length/count)).toFixed(2)
    document.getElementById("avgTv").innerHTML = avgTv +" Average" ;
    let avgRadio= ((radio.length/count)).toFixed(2)
    document.getElementById("avgRadio").innerHTML = avgRadio +" Average" ;
})
}
function redirect() {
    
    location.href = "index.html"
    
    }
