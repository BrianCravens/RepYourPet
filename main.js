let Mia = {
    name: "Mia",
    breed: "Shitzu",
    nicknames: ["lil bit", "lil $%$t", "girlfriend", "baby girl"],
    age: 5,
    bark () {window.alert("Woof!!!!")},
    favoriteToys: [],
    play: function (toy){
        if (toy.includes("shoes")) {
            this.favoriteToys.push(toy)
            console.log("Me Likey!!!")
        }
            else{
                console.log ("What is this?")
            };

    }
}



              