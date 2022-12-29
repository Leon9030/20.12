window.onload = function(){
console.log("app started");
calculator.init()
}; 
let calculator = {
    buttons: undefined,
    input: undefined,

    init: function(){
        this.buttons = document.querySelectorAll(".numbers button, .operators button") //funkcja doc quer.selALL pozwala zebrac elementy z kodu html alee pobierajac go za pomoca selektora 
        // . oznacza klase stad apis .numbers buttom 
        //co jakis czas watro stwierzc czy dziła przez kons log. 
       // console.log(this.buttons)
       this.input = document.getElementById("input");
       for (let i = 0; i< this.buttons.length; i++ ){
        let el = this.buttons[i];
        el.addEventListener("click", this.buttonClick)//1 arg - nazwa zdazenia które nas interesuje tu jest kliknięcie 2 arg to nazwa funkcji któa zostanie wywołana 
       } 
        
    },

buttonClick: function(event) {
     let divHrmlText = event.target.innerHTML
     console.log("klik: "+ divHrmlText);
    
    switch (divHrmlText){
        case "=":
            calculator.evaluate();
        break;
        case "c":
            calculator.clear();
        break;
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4":
            case "3":
            case "2":
            case "1":
            case "0":
            case "00":
            case ".":
            case "+":
            case "*":
            case "/":
            case "-":
                calculator.addToInput(divHrmlText);
            break;
    }
    
     //calculator.addToInput(divHrmlText)// tu nie uzywamy this. bo buttonClik zostało przypusane w funkcji wyżej do przyciksu i nie uruchomi się w kontekscie obiektu calculatro
},
addToInput: function(str){
    this.input.value += str
},

evaluate: function(){
      let result =  math.evaluate(calculator.input.value)
     calculator.input.value = result;
},
clear: function(){
    calculator.input.value = ""
}
  
}; 
