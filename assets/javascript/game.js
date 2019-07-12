//Pokemon info blueprint
function Pokemon(name, hp, atk, upAtk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.upAtk = upAtk;
    this.updateAtk = function() {
        return this.atk = this.atk + this.upAtk;
    };
}
//Global Var
var fighter;
var waitingEnemy = [];
var enemy = [];
var x;




//var gameManager = {
//    setGameStart: function(name){
//        this.gettingPokemon(name);
//        //this.setUpFight();
//    },
    gettingPokemon = function(name) {
        switch (name) {
            case "Charmander":
                x= new Pokemon("Charmander", 100, 10, 2);
                break;
            case "Squirtle":
                x= new Pokemon("Squirtle", 180, 5, 4);
                break;
            case "Bulbasaur":
                x= new Pokemon("Bulbasaur", 130, 7, 5);
                break;
            case "Pikachu":
                x= new Pokemon("Pikachu", 70, 8, 10);
                break;
        }
        console.log(x);
    }
    if (fighter){
        fighter = x; 
    }
