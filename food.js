class Food {
    constructor() {
        this.image = loadImage("Milk.png");
    }
    
    FoodStock() {
        var foodStockRef = database.ref('food');
        foodStockRef.on("value", (data)=>{
        foodCount = data.val();
        });
    }

    addFoodStock(foodStockToUpdate) {
        database.ref('/').update({
            food: foodStockToUpdate
        });
    }
    lastFedTime() {
        var foodStockRef = database.ref('lastfed');
        foodStockRef.on("value", (data)=>{
        lastfed = data.val();
        });
    }

    addFedTime(foodStockToUpdate) {
        database.ref('/').update({
            lastfed: foodStockToUpdate
        });
    }

    getGameState() {
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", (data)=>{
        gameState = data.val();
        });
    }

    addGamestate(gs) {
        database.ref('/').update({
            gameState: gs
        });
    }

    bedroom(){
        background(bedroomImg)
        }
        
        garden(){
        background(gardenImg)
        }
        
        washroom(){
        background(washroomImg)
        }

        
        display() {
         var x = 80, y = 100;
        imageMode(CENTER);
        if(foodCount != 0) {
            for(var i = 0; i < foodCount; i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }

    }