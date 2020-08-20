function takeShower() {
     console.log("Taking the shower");
}

function takeBreakfast(){
     let meal = breakfastMeal()
     console.log(`I'm eating ${meal}`);
}

function breakfastMeal(){
     let items = ["Oatmeal", "Eggs", "Protein Shake"]
     return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
     takeShower()
     takeBreakfast()
     console.log("Good Morning ;)");
}

wakeUp()