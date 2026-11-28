console.log(this); // reference to global Object -- In browsers - windows , In code Editor - node


function kushalOnGlobalStage() {
    return typeof this
}
console.log(kushalOnGlobalStage());  //  Object or empty Object

function kushalWithNoScript(){
    return this
}
console.log(kushalWithNoScript());  // Depends on where its running - browsers or node Env

const bollywoodFilm = {
    name:"Bajirao Mastani",
    lead:"Ranveer",
    introduce(){
        return `${this.lead} performs in ${this.name}`
    }
}
console.log(bollywoodFilm.introduce());


const filmDirector ={
    name:"Sanjay Leela Bhansali",
    cast:["Ranveer","Deepika","Priyanka"],

    announceCast(){
        this.cast.forEach((actor)=>{
            console.log(`${this.name} introduces ${actor}`);
        })
    }
}
filmDirector.announceCast()


const filmSet ={
    crew:"Spot Boys",
    prepareProps(){
        console.log(`Outer this.crew :${this.crew}`);
     
        function arrangeChairs(){
            console.log(`Inner this.crew: ${this.crew}`);
            
        }
        arrangeChairs()
        const arrangeProps = ()=>{
            console.log(`arrow this.crew:  ${this.crew}`);
            
        }
        arrangeProps()
    }
}
filmSet.prepareProps()