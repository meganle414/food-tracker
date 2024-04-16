const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    res.render('index', { nutrients })
})
  
router.get('/new', (req, res) => {
    res.render('nutrients/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        let data = { Food: req.body.foodName, Measure: req.body.foodMeasure, Grams: req.body.foodWeight, Calories: req.body.foodCalories, Fat: req.body.foodFat, Carbs: req.body.foodCarbs, Category: req.body.foodCategory }
        console.log(JSON.stringify(data))
        nutrients.push(data)
        res.redirect(`/nutrients/${ req.body.foodName }`)
    } else {
        console.log('Error')
        res.render('nutrients/new', { Food: req.body.foodName }, { Measure: req.body.foodMeasure }, { Grams: req.body.foodWeight }, { Calories: req.body.foodCalories }, { Protein: req.body.foodProtein }, { Fat: req.body.foodFat }, { Carbs: req.body.foodCarbs }, { Category: req.body.foodCategory })
    }
})

router
    .route('/:name')
    .get((req, res) => {
    // res.send(`Get Food With Name ${req.params.name}`)

    let index =  nutrients.findIndex(item => item.Food === req.params.name);
 
    // Check if the item is found before trying to log it
    if (index !== -1) {
        res.json(nutrients[index]);
    } else {
        console.log("Item not found");
    }
}).put((req, res) => {
    // res.send(`Update Food With Name ${req.params.name}`)

    let index =  nutrients.findIndex(item => item.Food === req.params.name);
 
    // Check if the item is found before trying to log it
    if (index !== -1) {
        // Do some changes to the food
        res.json(nutrients[index]);
    } else {
        console.log("Item not found");
    }
}).delete((req, res) => {
    // res.send(`Delete Food With Name ${req.params.name}`)

    let index =  nutrients.findIndex(item => item.Food === req.params.name);
 
    // Check if the item is found before trying to log it
    if (index !== -1) {
        // Do some changes to the food
        // res.json(nutrients[index]);
        nutrients = delete nutrients[index];
        res.json(nutrients[index]);
    } else {
        console.log("Item not found");
    }
})

nutrients = [
    {
      "Food": "Cows' milk",
      "Measure": "1 qt.",
      "Grams": 976,
      "Calories": 660,
      "Protein": 32,
      "Fat": 40,
      "Carbs": 48,
      "Category": "Dairy products"
    },
    {
      "Food": "Milk skim",
      "Measure": "1 qt.",
      "Grams": 984,
      "Calories": 360,
      "Protein": 36,
      "Fat": "t",
      "Carbs": 52,
      "Category": "Dairy products"
    },
    {
      "Food": "Buttermilk",
      "Measure": "1 cup",
      "Grams": 246,
      "Calories": 127,
      "Protein": 9,
      "Fat": 5,
      "Carbs": 13,
      "Category": "Dairy products"
    },
    {
      "Food": "Evaporated, undiluted",
      "Measure": "1 cup",
      "Grams": 252,
      "Calories": 345,
      "Protein": 16,
      "Fat": 20,
      "Carbs": 24,
      "Category": "Dairy products"
    },
    {
      "Food": "Fortified milk",
      "Measure": "6 cups",
      "Grams": "1,419",
      "Calories": "1,373",
      "Protein": 89,
      "Fat": 42,
      "Carbs": 119,
      "Category": "Dairy products"
    },
    {
      "Food": "Powdered milk",
      "Measure": "1 cup",
      "Grams": 103,
      "Calories": 515,
      "Protein": 27,
      "Fat": 28,
      "Carbs": 39,
      "Category": "Dairy products"
    },
    {
      "Food": "skim, instant",
      "Measure": "1 1/3 cups",
      "Grams": 85,
      "Calories": 290,
      "Protein": 30,
      "Fat": "t",
      "Carbs": 42,
      "Category": "Dairy products"
    },
    {
      "Food": "skim, non-instant",
      "Measure": "2/3 cup",
      "Grams": 85,
      "Calories": 290,
      "Protein": 30,
      "Fat": "t",
      "Carbs": 42,
      "Category": "Dairy products"
    },
    {
      "Food": "Goats' milk",
      "Measure": "1 cup",
      "Grams": 244,
      "Calories": 165,
      "Protein": 8,
      "Fat": 10,
      "Carbs": 11,
      "Category": "Dairy products"
    },
    {
      "Food": "(1/2 cup ice cream)",
      "Measure": "2 cups",
      "Grams": 540,
      "Calories": 690,
      "Protein": 24,
      "Fat": 24,
      "Carbs": 70,
      "Category": "Dairy products"
    },
    {
      "Food": "Cocoa",
      "Measure": "1 cup",
      "Grams": 252,
      "Calories": 235,
      "Protein": 8,
      "Fat": 11,
      "Carbs": 26,
      "Category": "Dairy products"
    },
    {
      "Food": "skim. milk",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 128,
      "Protein": 18,
      "Fat": 4,
      "Carbs": 13,
      "Category": "Dairy products"
    },
    {
      "Food": "(cornstarch)",
      "Measure": "1 cup",
      "Grams": 248,
      "Calories": 275,
      "Protein": 9,
      "Fat": 10,
      "Carbs": 40,
      "Category": "Dairy products"
    },
    {
      "Food": "Custard",
      "Measure": "1 cup",
      "Grams": 248,
      "Calories": 285,
      "Protein": 13,
      "Fat": 14,
      "Carbs": 28,
      "Category": "Dairy products"
    },
    {
      "Food": "Ice cream",
      "Measure": "1 cup",
      "Grams": 188,
      "Calories": 300,
      "Protein": 6,
      "Fat": 18,
      "Carbs": 29,
      "Category": "Dairy products"
    },
    {
      "Food": "Ice milk",
      "Measure": "1 cup",
      "Grams": 190,
      "Calories": 275,
      "Protein": 9,
      "Fat": 10,
      "Carbs": 32,
      "Category": "Dairy products"
    },
    {
      "Food": "Cream or half-and-half",
      "Measure": "1/2 cup",
      "Grams": 120,
      "Calories": 170,
      "Protein": 4,
      "Fat": 15,
      "Carbs": 5,
      "Category": "Dairy products"
    },
    {
      "Food": "or whipping",
      "Measure": "1/2 cup",
      "Grams": 119,
      "Calories": 430,
      "Protein": 2,
      "Fat": 44,
      "Carbs": 3,
      "Category": "Dairy products"
    },
    {
      "Food": "Cheese",
      "Measure": "1 cup",
      "Grams": 225,
      "Calories": 240,
      "Protein": 30,
      "Fat": 11,
      "Carbs": 6,
      "Category": "Dairy products"
    },
    {
      "Food": "uncreamed",
      "Measure": "1 cup",
      "Grams": 225,
      "Calories": 195,
      "Protein": 38,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Dairy products"
    },
    {
      "Food": "Cheddar",
      "Measure": "1-in. cube",
      "Grams": 17,
      "Calories": 70,
      "Protein": 4,
      "Fat": 6,
      "Carbs": "t",
      "Category": "Dairy products"
    },
    {
      "Food": "Cheddar, grated cup",
      "Measure": "1/2 cup",
      "Grams": 56,
      "Calories": 226,
      "Protein": 14,
      "Fat": 19,
      "Carbs": 1,
      "Category": "Dairy products"
    },
    {
      "Food": "Cream cheese",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 105,
      "Protein": 2,
      "Fat": 11,
      "Carbs": 1,
      "Category": "Dairy products"
    },
    {
      "Food": "Processed cheese",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 105,
      "Protein": 7,
      "Fat": 9,
      "Carbs": "t",
      "Category": "Dairy products"
    },
    {
      "Food": "Roquefort type",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 105,
      "Protein": 6,
      "Fat": 9,
      "Carbs": "t",
      "Category": "Dairy products"
    },
    {
      "Food": "Swiss",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 105,
      "Protein": 7,
      "Fat": 8,
      "Carbs": "t",
      "Category": "Dairy products"
    },
    {
      "Food": "Eggs raw",
      "Measure": 2,
      "Grams": 100,
      "Calories": 150,
      "Protein": 12,
      "Fat": 12,
      "Carbs": "t",
      "Category": "Dairy products"
    },
    {
      "Food": "Eggs Scrambled or fried",
      "Measure": 2,
      "Grams": 128,
      "Calories": 220,
      "Protein": 13,
      "Fat": 16,
      "Carbs": 1,
      "Category": "Dairy products"
    },
    {
      "Food": "Yolks",
      "Measure": 2,
      "Grams": 34,
      "Calories": 120,
      "Protein": 6,
      "Fat": 10,
      "Carbs": "t",
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Butter",
      "Measure": "1T.",
      "Grams": 14,
      "Calories": 100,
      "Protein": "t",
      "Fat": 11,
      "Carbs": "t",
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Butter",
      "Measure": "1/2 cup",
      "Grams": 112,
      "Calories": 113,
      "Protein": 114,
      "Fat": 115,
      "Carbs": 118,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Butter",
      "Measure": "1/4 lb.",
      "Grams": 112,
      "Calories": 113,
      "Protein": 114,
      "Fat": 115,
      "Carbs": 118,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Hydrogenated cooking fat",
      "Measure": "1/2 cup",
      "Grams": 100,
      "Calories": 665,
      "Protein": 0,
      "Fat": 100,
      "Carbs": 0,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Lard",
      "Measure": "1/2 cup",
      "Grams": 110,
      "Calories": 992,
      "Protein": 0,
      "Fat": 110,
      "Carbs": 0,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Margarine",
      "Measure": "1/2 cup",
      "Grams": 112,
      "Calories": 806,
      "Protein": "t",
      "Fat": 91,
      "Carbs": "t",
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Margarine, 2 pat or",
      "Measure": "1 T.",
      "Grams": 14,
      "Calories": 100,
      "Protein": "t",
      "Fat": 11,
      "Carbs": "t",
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Mayonnaise",
      "Measure": "1 T.",
      "Grams": 15,
      "Calories": 110,
      "Protein": "t",
      "Fat": 12,
      "Carbs": "t",
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Corn oil",
      "Measure": "1 T.",
      "Grams": 14,
      "Calories": 125,
      "Protein": 0,
      "Fat": 14,
      "Carbs": 0,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Olive oil",
      "Measure": "1T.",
      "Grams": 14,
      "Calories": 125,
      "Protein": 0,
      "Fat": 14,
      "Carbs": 0,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Safflower seed oil",
      "Measure": "1 T.",
      "Grams": 14,
      "Calories": 125,
      "Protein": 0,
      "Fat": 14,
      "Carbs": 0,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "French dressing",
      "Measure": "1 T.",
      "Grams": 15,
      "Calories": 60,
      "Protein": "t",
      "Fat": 6,
      "Carbs": 2,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Thousand Island sauce",
      "Measure": "1 T.",
      "Grams": 15,
      "Calories": 75,
      "Protein": "t",
      "Fat": 8,
      "Carbs": 1,
      "Category": "Fats, Oils, Shortenings"
    },
    {
      "Food": "Salt pork",
      "Measure": "2 oz.",
      "Grams": 60,
      "Calories": 470,
      "Protein": 3,
      "Fat": 55,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Bacon",
      "Measure": "2 slices",
      "Grams": 16,
      "Calories": 95,
      "Protein": 4,
      "Fat": 8,
      "Carbs": 1,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Beef",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 245,
      "Protein": 23,
      "Fat": 16,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Hamburger",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 245,
      "Protein": 21,
      "Fat": 17,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Ground lean",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 185,
      "Protein": 24,
      "Fat": 10,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Roast beef",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 390,
      "Protein": 16,
      "Fat": 36,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Steak",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 330,
      "Protein": 20,
      "Fat": 27,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Steak, lean, as round",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 220,
      "Protein": 24,
      "Fat": 12,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Corned beef",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 185,
      "Protein": 22,
      "Fat": 10,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Corned beef hash canned",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 120,
      "Protein": 12,
      "Fat": 8,
      "Carbs": 6,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Corned beef hash Dried",
      "Measure": "2 oz.",
      "Grams": 56,
      "Calories": 115,
      "Protein": 19,
      "Fat": 4,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Pot-pie",
      "Measure": "1 pie",
      "Grams": 227,
      "Calories": 480,
      "Protein": 18,
      "Fat": 28,
      "Carbs": 32,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Corned beef hash Stew",
      "Measure": "1 cup",
      "Grams": 235,
      "Calories": 185,
      "Protein": 15,
      "Fat": 10,
      "Carbs": 15,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "chicken",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 185,
      "Protein": 23,
      "Fat": 9,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Fried, breast or leg and thigh chicken",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 245,
      "Protein": 25,
      "Fat": 15,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Roasted chicken",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 290,
      "Protein": 25,
      "Fat": 20,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Chicken livers, fried",
      "Measure": "3 med.",
      "Grams": 100,
      "Calories": 140,
      "Protein": 22,
      "Fat": 14,
      "Carbs": 2.3,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Duck, domestic",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 370,
      "Protein": 16,
      "Fat": 28,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Lamb, chop, broiled",
      "Measure": "4 oz.",
      "Grams": 115,
      "Calories": 480,
      "Protein": 24,
      "Fat": 35,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Leg roasted",
      "Measure": "3 oz.",
      "Grams": 86,
      "Calories": 314,
      "Protein": 20,
      "Fat": 14,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Shoulder, braised",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 285,
      "Protein": 18,
      "Fat": 23,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Pork, chop, 1 thick",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 260,
      "Protein": 16,
      "Fat": 21,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Ham pan-broiled",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 290,
      "Protein": 16,
      "Fat": 22,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Ham, as",
      "Measure": "2 oz.",
      "Grams": 57,
      "Calories": 170,
      "Protein": 13,
      "Fat": 13,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Ham, canned, spiced",
      "Measure": "2 oz.",
      "Grams": 57,
      "Calories": 165,
      "Protein": 8,
      "Fat": 14,
      "Carbs": 1,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Pork roast",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 310,
      "Protein": 21,
      "Fat": 24,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Pork sausage",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 475,
      "Protein": 18,
      "Fat": 44,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Turkey",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 265,
      "Protein": 27,
      "Fat": 15,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Veal",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 185,
      "Protein": 23,
      "Fat": 9,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Roast",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 305,
      "Protein": 13,
      "Fat": 14,
      "Carbs": 0,
      "Category": "Meat, Poultry"
    },
    {
      "Food": "Clams",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 87,
      "Protein": 12,
      "Fat": 1,
      "Carbs": 2,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Cod",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 170,
      "Protein": 28,
      "Fat": 5,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Crab meat",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 90,
      "Protein": 14,
      "Fat": 2,
      "Carbs": 1,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Fish sticks fried",
      "Measure": 5,
      "Grams": 112,
      "Calories": 200,
      "Protein": 19,
      "Fat": 10,
      "Carbs": 8,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Flounder",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 200,
      "Protein": 30,
      "Fat": 8,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Haddock",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 135,
      "Protein": 16,
      "Fat": 5,
      "Carbs": 6,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Halibut",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 182,
      "Protein": 26,
      "Fat": 8,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Herring",
      "Measure": "1 small",
      "Grams": 100,
      "Calories": 211,
      "Protein": 22,
      "Fat": 13,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Lobster",
      "Measure": "aver.",
      "Grams": 100,
      "Calories": 92,
      "Protein": 18,
      "Fat": 1,
      "Carbs": "t",
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Mackerel",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 155,
      "Protein": 18,
      "Fat": 9,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Oysters",
      "Measure": "6-8 med.",
      "Grams": 230,
      "Calories": 231,
      "Protein": 232,
      "Fat": 233,
      "Carbs": 236,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Oyster stew",
      "Measure": "1 cup",
      "Grams": 85,
      "Calories": 125,
      "Protein": 19,
      "Fat": 6,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Salmon",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 120,
      "Protein": 17,
      "Fat": 5,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Sardines",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 180,
      "Protein": 22,
      "Fat": 9,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Scallops",
      "Measure": "3 1/2 oz.",
      "Grams": 100,
      "Calories": 104,
      "Protein": 18,
      "Fat": 8,
      "Carbs": 10,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Shad",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 170,
      "Protein": 20,
      "Fat": 10,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Shrimp",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 110,
      "Protein": 23,
      "Fat": 1,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Swordfish",
      "Measure": "1 steak",
      "Grams": 100,
      "Calories": 180,
      "Protein": 27,
      "Fat": 6,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Tuna",
      "Measure": "3 oz.",
      "Grams": 85,
      "Calories": 170,
      "Protein": 25,
      "Fat": 7,
      "Carbs": 0,
      "Category": "Fish, Seafood"
    },
    {
      "Food": "Artichoke",
      "Measure": "1 large",
      "Grams": 100,
      "Calories": "8-44",
      "Protein": 2,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Asparagus",
      "Measure": "6 spears",
      "Grams": 96,
      "Calories": 18,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 3,
      "Category": "Vegetables"
    },
    {
      "Food": "Beans",
      "Measure": "1 cup",
      "Grams": 125,
      "Calories": 25,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Lima",
      "Measure": "1 cup",
      "Grams": 160,
      "Calories": 140,
      "Protein": 8,
      "Fat": "t",
      "Carbs": 24,
      "Category": "Vegetables"
    },
    {
      "Food": "Lima, dry, cooked",
      "Measure": "1 cup",
      "Grams": 192,
      "Calories": 260,
      "Protein": 16,
      "Fat": "t",
      "Carbs": 48,
      "Category": "Vegetables"
    },
    {
      "Food": "Navy, baked with pork",
      "Measure": "3/4 cup",
      "Grams": 200,
      "Calories": 250,
      "Protein": 11,
      "Fat": 6,
      "Carbs": 37,
      "Category": "Vegetables"
    },
    {
      "Food": "Red kidney",
      "Measure": "1 cup",
      "Grams": 260,
      "Calories": 230,
      "Protein": 15,
      "Fat": 1,
      "Carbs": 42,
      "Category": "Vegetables"
    },
    {
      "Food": "Bean sprouts",
      "Measure": "1 cup",
      "Grams": 50,
      "Calories": 17,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 3,
      "Category": "Vegetables"
    },
    {
      "Food": "Beet greens",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 27,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Beetroots",
      "Measure": "1 cup",
      "Grams": 165,
      "Calories": 1,
      "Protein": 12,
      "Fat": 0,
      "Carbs": 0.8,
      "Category": "Vegetables"
    },
    {
      "Food": "Broccoli",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 45,
      "Protein": 5,
      "Fat": "t",
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Brussels sprouts",
      "Measure": "1 cup",
      "Grams": 130,
      "Calories": 60,
      "Protein": 6,
      "Fat": "t",
      "Carbs": 12,
      "Category": "Vegetables"
    },
    {
      "Food": "Sauerkraut",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 32,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 7,
      "Category": "Vegetables"
    },
    {
      "Food": "Steamed cabbage",
      "Measure": "1 cup",
      "Grams": 170,
      "Calories": 40,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Vegetables"
    },
    {
      "Food": "Carrots",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 45,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Raw, grated",
      "Measure": "1 cup",
      "Grams": 110,
      "Calories": 45,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Strips, from raw",
      "Measure": "1 mad.",
      "Grams": 50,
      "Calories": 20,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 5,
      "Category": "Vegetables"
    },
    {
      "Food": "Cauliflower",
      "Measure": "1 cup",
      "Grams": 120,
      "Calories": 30,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Celery",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 20,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 4,
      "Category": "Vegetables"
    },
    {
      "Food": "Stalk raw",
      "Measure": "1 large",
      "Grams": 40,
      "Calories": 5,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 1,
      "Category": "Vegetables"
    },
    {
      "Food": "Chard steamed",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 30,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 7,
      "Category": "Vegetables"
    },
    {
      "Food": "Collards",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 51,
      "Protein": 5,
      "Fat": "t",
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Corn",
      "Measure": "1 ear",
      "Grams": 100,
      "Calories": 92,
      "Protein": 3,
      "Fat": 1,
      "Carbs": 21,
      "Category": "Vegetables"
    },
    {
      "Food": "cooked or canned",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 170,
      "Protein": 5,
      "Fat": "t",
      "Carbs": 41,
      "Category": "Vegetables"
    },
    {
      "Food": "Cucumbers",
      "Measure": 8,
      "Grams": 50,
      "Calories": 6,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 1,
      "Category": "Vegetables"
    },
    {
      "Food": "Dandelion greens",
      "Measure": "1 cup",
      "Grams": 180,
      "Calories": 80,
      "Protein": 5,
      "Fat": 1,
      "Carbs": 16,
      "Category": "Vegetables"
    },
    {
      "Food": "Eggplant",
      "Measure": "1 cup",
      "Grams": 180,
      "Calories": 30,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Vegetables"
    },
    {
      "Food": "Endive",
      "Measure": "2 oz.",
      "Grams": 57,
      "Calories": 10,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 2,
      "Category": "Vegetables"
    },
    {
      "Food": "Kale",
      "Measure": "1 cup",
      "Grams": 110,
      "Calories": 45,
      "Protein": 4,
      "Fat": 1,
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Kohlrabi",
      "Measure": "1 cup",
      "Grams": 140,
      "Calories": 40,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Vegetables"
    },
    {
      "Food": "Lambs quarters, steamed",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 48,
      "Protein": 5,
      "Fat": "t",
      "Carbs": 7,
      "Category": "Vegetables"
    },
    {
      "Food": "Lentils",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 212,
      "Protein": 15,
      "Fat": "t",
      "Carbs": 38,
      "Category": "Vegetables"
    },
    {
      "Food": "Lettuce",
      "Measure": "1/4 head",
      "Grams": 100,
      "Calories": 14,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 2,
      "Category": "Vegetables"
    },
    {
      "Food": "Iceberg",
      "Measure": "1/4 head",
      "Grams": 100,
      "Calories": 13,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 3,
      "Category": "Vegetables"
    },
    {
      "Food": "Mushrooms canned",
      "Measure": 4,
      "Grams": 120,
      "Calories": 12,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 4,
      "Category": "Vegetables"
    },
    {
      "Food": "Mustard greens",
      "Measure": 1,
      "Grams": 140,
      "Calories": 30,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Okra",
      "Measure": "1 1/3 cups",
      "Grams": 100,
      "Calories": 32,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 7,
      "Category": "Vegetables"
    },
    {
      "Food": "Onions",
      "Measure": 1,
      "Grams": 210,
      "Calories": 80,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 18,
      "Category": "Vegetables"
    },
    {
      "Food": "Raw, green",
      "Measure": "6 small",
      "Grams": 50,
      "Calories": 22,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 5,
      "Category": "Vegetables"
    },
    {
      "Food": "Parsley",
      "Measure": "2 T.",
      "Grams": 50,
      "Calories": 2,
      "Protein": "t",
      "Fat": "t",
      "Carbs": "t",
      "Category": "Vegetables"
    },
    {
      "Food": "Parsnips",
      "Measure": "1 cup",
      "Grams": 155,
      "Calories": 95,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 22,
      "Category": "Vegetables"
    },
    {
      "Food": "Peas",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 66,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 13,
      "Category": "Vegetables"
    },
    {
      "Food": "Fresh, steamed peas",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 70,
      "Protein": 5,
      "Fat": "t",
      "Carbs": 12,
      "Category": "Vegetables"
    },
    {
      "Food": "Frozen peas",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": "",
      "Protein": 5,
      "Fat": "t",
      "Carbs": 12,
      "Category": "Vegetables"
    },
    {
      "Food": "Split cooked peas",
      "Measure": "4 cups",
      "Grams": 100,
      "Calories": 115,
      "Protein": 8,
      "Fat": "t",
      "Carbs": 21,
      "Category": "Vegetables"
    },
    {
      "Food": "heated peas",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 53,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Peppers canned",
      "Measure": "1 pod",
      "Grams": 38,
      "Calories": 10,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 2,
      "Category": "Vegetables"
    },
    {
      "Food": "Peppers Raw, green, sweet",
      "Measure": "1 large",
      "Grams": 100,
      "Calories": 25,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Peppers with beef and crumbs",
      "Measure": "1 med.",
      "Grams": 150,
      "Calories": 255,
      "Protein": 19,
      "Fat": 9,
      "Carbs": 24,
      "Category": "Vegetables"
    },
    {
      "Food": "Potatoes, baked",
      "Measure": "1 med.",
      "Grams": 100,
      "Calories": 100,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 22,
      "Category": "Vegetables"
    },
    {
      "Food": "French-fried",
      "Measure": "10 pieces",
      "Grams": 60,
      "Calories": 155,
      "Protein": -1,
      "Fat": 7,
      "Carbs": 20,
      "Category": "Vegetables"
    },
    {
      "Food": "Potatoes Mashed with milk and butter",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 230,
      "Protein": 4,
      "Fat": 12,
      "Carbs": 28,
      "Category": "Vegetables"
    },
    {
      "Food": "Potatoes, pan-tried",
      "Measure": "3/4 cup",
      "Grams": 100,
      "Calories": 268,
      "Protein": 4,
      "Fat": 14,
      "Carbs": 33,
      "Category": "Vegetables"
    },
    {
      "Food": "Scalloped with cheese potatoes",
      "Measure": "3/4 cup",
      "Grams": 100,
      "Calories": 145,
      "Protein": 6,
      "Fat": 8,
      "Carbs": 14,
      "Category": "Vegetables"
    },
    {
      "Food": "Steamed potatoes before peeling",
      "Measure": "1 med.",
      "Grams": 100,
      "Calories": 80,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 19,
      "Category": "Vegetables"
    },
    {
      "Food": "Potato chips",
      "Measure": 10,
      "Grams": 20,
      "Calories": 110,
      "Protein": 1,
      "Fat": 7,
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Radishes",
      "Measure": "5 small",
      "Grams": 50,
      "Calories": 10,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 2,
      "Category": "Vegetables"
    },
    {
      "Food": "Rutabagas",
      "Measure": "4 cups",
      "Grams": 100,
      "Calories": 32,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Soybeans",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 260,
      "Protein": 22,
      "Fat": 11,
      "Carbs": 20,
      "Category": "Vegetables"
    },
    {
      "Food": "Spinach",
      "Measure": "1 cup",
      "Grams": 100,
      "Calories": 26,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 3,
      "Category": "Vegetables"
    },
    {
      "Food": "Squash",
      "Measure": "1 cup",
      "Grams": 210,
      "Calories": 35,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Winter, mashed",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 95,
      "Protein": 4,
      "Fat": "t",
      "Carbs": 23,
      "Category": "Vegetables"
    },
    {
      "Food": "Sweet potatoes",
      "Measure": "1 med.",
      "Grams": 110,
      "Calories": 155,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 36,
      "Category": "Vegetables"
    },
    {
      "Food": "Candied",
      "Measure": "1 med.",
      "Grams": 175,
      "Calories": 235,
      "Protein": 2,
      "Fat": 6,
      "Carbs": 80,
      "Category": "Vegetables"
    },
    {
      "Food": "Tomatoes",
      "Measure": "1 cup",
      "Grams": 240,
      "Calories": 50,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Vegetables"
    },
    {
      "Food": "Raw, 2 by 2 1/2",
      "Measure": "1 med.",
      "Grams": 150,
      "Calories": 30,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 6,
      "Category": "Vegetables"
    },
    {
      "Food": "Tomato juice",
      "Measure": "1 cup",
      "Grams": 240,
      "Calories": 50,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Vegetables"
    },
    {
      "Food": "Tomato catsup",
      "Measure": "1 T.",
      "Grams": 17,
      "Calories": 15,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 4,
      "Category": "Vegetables"
    },
    {
      "Food": "Turnip greens",
      "Measure": "1 cup",
      "Grams": 145,
      "Calories": 45,
      "Protein": 4,
      "Fat": 1,
      "Carbs": 8,
      "Category": "Vegetables"
    },
    {
      "Food": "Turnips, steamed",
      "Measure": "1 cup",
      "Grams": 155,
      "Calories": 40,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Vegetables"
    },
    {
      "Food": "Watercress stems, raw",
      "Measure": "1 cup",
      "Grams": 50,
      "Calories": 9,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 1,
      "Category": "Fruits"
    },
    {
      "Food": "Apple juice canned",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 125,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 34,
      "Category": "Fruits"
    },
    {
      "Food": "Apple vinegar",
      "Measure": "1/3 cup",
      "Grams": 100,
      "Calories": 14,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 3,
      "Category": "Fruits"
    },
    {
      "Food": "Apples, raw",
      "Measure": "1 med",
      "Grams": 130,
      "Calories": 70,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 18,
      "Category": "Fruits"
    },
    {
      "Food": "Stewed or canned",
      "Measure": "1 cup",
      "Grams": 240,
      "Calories": 100,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 26,
      "Category": "Fruits"
    },
    {
      "Food": "Apricots",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 220,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 57,
      "Category": "Fruits"
    },
    {
      "Food": "Dried, uncooked",
      "Measure": "1/2 cup",
      "Grams": 75,
      "Calories": 220,
      "Protein": 4,
      "Fat": "t",
      "Carbs": 50,
      "Category": "Fruits"
    },
    {
      "Food": "Fresh",
      "Measure": "3 med.",
      "Grams": 114,
      "Calories": 55,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 14,
      "Category": "Fruits"
    },
    {
      "Food": "Nectar, or juice",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 140,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 36,
      "Category": "Fruits"
    },
    {
      "Food": "Avocado",
      "Measure": "1/2 large",
      "Grams": 108,
      "Calories": 185,
      "Protein": 2,
      "Fat": 18,
      "Carbs": 6,
      "Category": "Fruits"
    },
    {
      "Food": "Banana",
      "Measure": "1 med.",
      "Grams": 150,
      "Calories": 85,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 23,
      "Category": "Fruits"
    },
    {
      "Food": "Blackberries",
      "Measure": "1 cup",
      "Grams": 144,
      "Calories": 85,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 19,
      "Category": "Fruits"
    },
    {
      "Food": "Blueberries",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 245,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 65,
      "Category": "Fruits"
    },
    {
      "Food": "Cantaloupe",
      "Measure": "1/2 med.",
      "Grams": 380,
      "Calories": 40,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 9,
      "Category": "Fruits"
    },
    {
      "Food": "Cherries",
      "Measure": "1 cup",
      "Grams": 257,
      "Calories": 100,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 26,
      "Category": "Fruits"
    },
    {
      "Food": "Fresh, raw",
      "Measure": "1 cup",
      "Grams": 114,
      "Calories": 65,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 15,
      "Category": "Fruits"
    },
    {
      "Food": "Cranberry sauce sweetened",
      "Measure": "1 cup",
      "Grams": 277,
      "Calories": 530,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 142,
      "Category": "Fruits"
    },
    {
      "Food": "Dates",
      "Measure": "1 cup",
      "Grams": 178,
      "Calories": 505,
      "Protein": 4,
      "Fat": "t",
      "Carbs": 134,
      "Category": "Fruits"
    },
    {
      "Food": "Figs",
      "Measure": 2,
      "Grams": 42,
      "Calories": 120,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 30,
      "Category": "Fruits"
    },
    {
      "Food": "Fresh, raw figs",
      "Measure": "3 med.",
      "Grams": 114,
      "Calories": 90,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 22,
      "Category": "Fruits"
    },
    {
      "Food": "figs Canned with syrup",
      "Measure": 3,
      "Grams": 115,
      "Calories": 130,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 32,
      "Category": "Fruits"
    },
    {
      "Food": "Fruit cocktail, canned",
      "Measure": "1 cup",
      "Grams": 256,
      "Calories": 195,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 50,
      "Category": "Fruits"
    },
    {
      "Food": "Grapefruit sections",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 170,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 44,
      "Category": "Fruits"
    },
    {
      "Food": "Grapefruit, fresh, 5\" diameter",
      "Measure": "1/2",
      "Grams": 285,
      "Calories": 50,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 14,
      "Category": "Fruits"
    },
    {
      "Food": "Grapefruit juice",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 100,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 24,
      "Category": "Fruits"
    },
    {
      "Food": "Grapes",
      "Measure": "1 cup",
      "Grams": 153,
      "Calories": 70,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 16,
      "Category": "Fruits"
    },
    {
      "Food": "European, as Muscat, Tokay",
      "Measure": "1 cup",
      "Grams": 160,
      "Calories": 100,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 26,
      "Category": "Fruits"
    },
    {
      "Food": "Grape juice",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 160,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 42,
      "Category": "Fruits"
    },
    {
      "Food": "Lemon juice",
      "Measure": "1/2 cup",
      "Grams": 125,
      "Calories": 30,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 10,
      "Category": "Fruits"
    },
    {
      "Food": "Lemonade concentratefrozen",
      "Measure": "6-oz. can",
      "Grams": 220,
      "Calories": 430,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 112,
      "Category": "Fruits"
    },
    {
      "Food": "Limeade concentrate frozen",
      "Measure": "6-oz. can",
      "Grams": 218,
      "Calories": 405,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 108,
      "Category": "Fruits"
    },
    {
      "Food": "Olives large",
      "Measure": 10,
      "Grams": 65,
      "Calories": 72,
      "Protein": 1,
      "Fat": 10,
      "Carbs": 3,
      "Category": "Fruits"
    },
    {
      "Food": "OlivesRipe",
      "Measure": 10,
      "Grams": 65,
      "Calories": 105,
      "Protein": 1,
      "Fat": 13,
      "Carbs": 1,
      "Category": "Fruits"
    },
    {
      "Food": "Oranges 3\" diameter",
      "Measure": "1 med.",
      "Grams": 180,
      "Calories": 60,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 16,
      "Category": "Fruits"
    },
    {
      "Food": "Orange juice",
      "Measure": "8 oz. or",
      "Grams": 250,
      "Calories": 112,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 25,
      "Category": "Fruits"
    },
    {
      "Food": "Frozen",
      "Measure": "6-oz. can",
      "Grams": 210,
      "Calories": 330,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 78,
      "Category": "Fruits"
    },
    {
      "Food": "Papaya",
      "Measure": "1/2 med.",
      "Grams": 200,
      "Calories": 75,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 18,
      "Category": "Fruits"
    },
    {
      "Food": "Peaches",
      "Measure": "1 cup",
      "Grams": 257,
      "Calories": 200,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 52,
      "Category": "Fruits"
    },
    {
      "Food": "Fresh, raw",
      "Measure": "1 med.",
      "Grams": 114,
      "Calories": 35,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Fruits"
    },
    {
      "Food": "Pears",
      "Measure": "1 cup",
      "Grams": 255,
      "Calories": 195,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 50,
      "Category": "Fruits"
    },
    {
      "Food": "Raw, 3 by 2V",
      "Measure": "1 med.",
      "Grams": 182,
      "Calories": 100,
      "Protein": 1,
      "Fat": 1,
      "Carbs": 25,
      "Category": "Fruits"
    },
    {
      "Food": "Persimmons",
      "Measure": "1 med.",
      "Grams": 125,
      "Calories": 75,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 20,
      "Category": "Fruits"
    },
    {
      "Food": "Pineapple",
      "Measure": "1 large slice",
      "Grams": 122,
      "Calories": 95,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 26,
      "Category": "Fruits"
    },
    {
      "Food": "Pineapple Crushed",
      "Measure": "1 cup",
      "Grams": 260,
      "Calories": 205,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 55,
      "Category": "Fruits"
    },
    {
      "Food": "Raw, diced",
      "Measure": "1 cup",
      "Grams": 140,
      "Calories": 75,
      "Protein": 1,
      "Fat": "t'",
      "Carbs": 19,
      "Category": "Fruits"
    },
    {
      "Food": "Pineapple juice",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 120,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 32,
      "Category": "Fruits"
    },
    {
      "Food": "Plums",
      "Measure": "1 cup",
      "Grams": 256,
      "Calories": 185,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 50,
      "Category": "Fruits"
    },
    {
      "Food": "Raw, 2\" diameter",
      "Measure": 1,
      "Grams": 60,
      "Calories": 30,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 7,
      "Category": "Fruits"
    },
    {
      "Food": "Prunes",
      "Measure": "1 cup",
      "Grams": 270,
      "Calories": 300,
      "Protein": 3,
      "Fat": 1,
      "Carbs": 81,
      "Category": "Fruits"
    },
    {
      "Food": "Prune juice",
      "Measure": "1 cup",
      "Grams": 240,
      "Calories": 170,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 45,
      "Category": "Fruits"
    },
    {
      "Food": "Raisins",
      "Measure": "1/2 cup",
      "Grams": 88,
      "Calories": 230,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 82,
      "Category": "Fruits"
    },
    {
      "Food": "Raspberries",
      "Measure": "1/2 cup",
      "Grams": 100,
      "Calories": 100,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 25,
      "Category": "Fruits"
    },
    {
      "Food": "Raw, red",
      "Measure": "3/4 cup",
      "Grams": 100,
      "Calories": 57,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 14,
      "Category": "Fruits"
    },
    {
      "Food": "Rhubarb sweetened",
      "Measure": "1 cup",
      "Grams": 270,
      "Calories": 385,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 98,
      "Category": "Fruits"
    },
    {
      "Food": "Strawberries",
      "Measure": "1 cup",
      "Grams": 227,
      "Calories": 242,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 60,
      "Category": "Fruits"
    },
    {
      "Food": "Raw",
      "Measure": "1 cup",
      "Grams": 149,
      "Calories": 54,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 12,
      "Category": "Fruits"
    },
    {
      "Food": "Tangerines",
      "Measure": "I med.",
      "Grams": 114,
      "Calories": 40,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 10,
      "Category": "Fruits"
    },
    {
      "Food": "Watermelon",
      "Measure": "1 wedge",
      "Grams": 925,
      "Calories": 120,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 29,
      "Category": "Fruits"
    },
    {
      "Food": "Biscuits",
      "Measure": 1,
      "Grams": 38,
      "Calories": 130,
      "Protein": 3,
      "Fat": 4,
      "Carbs": 18,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Bran flakes",
      "Measure": "1 cup",
      "Grams": 25,
      "Calories": 117,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 32,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Bread, cracked wheat",
      "Measure": "1 slice",
      "Grams": 23,
      "Calories": 60,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 12,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Rye",
      "Measure": "1 slice",
      "Grams": 23,
      "Calories": 55,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 12,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "White, 20 slices, or",
      "Measure": "1-lb. loaf",
      "Grams": 454,
      "Calories": "1,225",
      "Protein": 39,
      "Fat": 15,
      "Carbs": 229,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Whole-wheat",
      "Measure": "1-lb. loaf",
      "Grams": 454,
      "Calories": "1,100",
      "Protein": 48,
      "Fat": 14,
      "Carbs": 216,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Whole-wheat",
      "Measure": "1 slice",
      "Grams": 23,
      "Calories": 55,
      "Protein": 2,
      "Fat": 1,
      "Carbs": 11,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Corn bread ground meal",
      "Measure": "1 serving",
      "Grams": 50,
      "Calories": 100,
      "Protein": 3,
      "Fat": 4,
      "Carbs": 15,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Cornflakes",
      "Measure": "1 cup",
      "Grams": 25,
      "Calories": 110,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 25,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Corn grits cooked",
      "Measure": "1 cup",
      "Grams": 242,
      "Calories": 120,
      "Protein": 8,
      "Fat": "t",
      "Carbs": 27,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Corn meal",
      "Measure": "1 cup",
      "Grams": 118,
      "Calories": 360,
      "Protein": 9,
      "Fat": 4,
      "Carbs": 74,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Crackers",
      "Measure": "2 med.",
      "Grams": 14,
      "Calories": 55,
      "Protein": 1,
      "Fat": 1,
      "Carbs": 10,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Soda, 2 1/2 square",
      "Measure": 2,
      "Grams": 11,
      "Calories": 45,
      "Protein": 1,
      "Fat": 1,
      "Carbs": 8,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Farina",
      "Measure": "1 cup",
      "Grams": 238,
      "Calories": 105,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 22,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Flour",
      "Measure": "1 cup",
      "Grams": 110,
      "Calories": 460,
      "Protein": 39,
      "Fat": 22,
      "Carbs": 33,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat (all purpose)",
      "Measure": "1 cup",
      "Grams": 110,
      "Calories": 400,
      "Protein": 12,
      "Fat": 1,
      "Carbs": 84,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat (whole)",
      "Measure": "1 cup",
      "Grams": 120,
      "Calories": 390,
      "Protein": 13,
      "Fat": 2,
      "Carbs": 79,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Macaroni",
      "Measure": "1 cup",
      "Grams": 140,
      "Calories": 155,
      "Protein": 5,
      "Fat": 1,
      "Carbs": 32,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Baked with cheese",
      "Measure": "1 cup",
      "Grams": 220,
      "Calories": 475,
      "Protein": 18,
      "Fat": 25,
      "Carbs": 44,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Muffins",
      "Measure": 1,
      "Grams": 48,
      "Calories": 135,
      "Protein": 4,
      "Fat": 5,
      "Carbs": 19,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Noodles",
      "Measure": "1 cup",
      "Grams": 160,
      "Calories": 200,
      "Protein": 7,
      "Fat": 2,
      "Carbs": 37,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Oatmeal",
      "Measure": "1 cup",
      "Grams": 236,
      "Calories": 150,
      "Protein": 5,
      "Fat": 3,
      "Carbs": 26,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Pancakes 4\" diam.",
      "Measure": 4,
      "Grams": 108,
      "Calories": 250,
      "Protein": 7,
      "Fat": 9,
      "Carbs": 28,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat, pancakes 4\" diam.",
      "Measure": 4,
      "Grams": 108,
      "Calories": 250,
      "Protein": 7,
      "Fat": 9,
      "Carbs": 28,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Pizza 14\" diam.",
      "Measure": "1 section",
      "Grams": 75,
      "Calories": 180,
      "Protein": 8,
      "Fat": 6,
      "Carbs": 23,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Popcorn salted",
      "Measure": "2 cups",
      "Grams": 28,
      "Calories": 152,
      "Protein": 3,
      "Fat": 7,
      "Carbs": 20,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Puffed rice",
      "Measure": "1 cup",
      "Grams": 14,
      "Calories": 55,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 12,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Puffed wheat presweetened",
      "Measure": "1 cup",
      "Grams": 28,
      "Calories": 105,
      "Protein": 1,
      "Fat": "t",
      "Carbs": 26,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Rice",
      "Measure": "1 cup",
      "Grams": 208,
      "Calories": 748,
      "Protein": 15,
      "Fat": 3,
      "Carbs": 154,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Converted",
      "Measure": "1 cup",
      "Grams": 187,
      "Calories": 677,
      "Protein": 14,
      "Fat": "t",
      "Carbs": 142,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "White",
      "Measure": "1 cup",
      "Grams": 191,
      "Calories": 692,
      "Protein": 14,
      "Fat": "t",
      "Carbs": 150,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Rice flakes",
      "Measure": "1 cup",
      "Grams": 30,
      "Calories": 115,
      "Protein": 2,
      "Fat": "t",
      "Carbs": 26,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Rice polish",
      "Measure": "1/2 cup",
      "Grams": 50,
      "Calories": 132,
      "Protein": 6,
      "Fat": 6,
      "Carbs": 28,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Rolls",
      "Measure": "1 large",
      "Grams": 50,
      "Calories": 411,
      "Protein": 3,
      "Fat": 12,
      "Carbs": 23,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "of refined flour",
      "Measure": 1,
      "Grams": 38,
      "Calories": 115,
      "Protein": 3,
      "Fat": 2,
      "Carbs": 20,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "whole-wheat",
      "Measure": 1,
      "Grams": 40,
      "Calories": 102,
      "Protein": 4,
      "Fat": 1,
      "Carbs": 20,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Spaghetti with meat sauce",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 285,
      "Protein": 13,
      "Fat": 10,
      "Carbs": 35,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "with tomatoes and cheese",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 210,
      "Protein": 6,
      "Fat": 5,
      "Carbs": 36,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Spanish rice",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 217,
      "Protein": 4,
      "Fat": 4,
      "Carbs": 40,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Shredded wheat biscuit",
      "Measure": 1,
      "Grams": 28,
      "Calories": 100,
      "Protein": 3,
      "Fat": 1,
      "Carbs": 23,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Waffles",
      "Measure": 1,
      "Grams": 75,
      "Calories": 240,
      "Protein": 8,
      "Fat": 9,
      "Carbs": 30,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat germ",
      "Measure": "1 cup",
      "Grams": 68,
      "Calories": 245,
      "Protein": 17,
      "Fat": 7,
      "Carbs": 34,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat-germ cereal toasted",
      "Measure": "1 cup",
      "Grams": 65,
      "Calories": 260,
      "Protein": 20,
      "Fat": 7,
      "Carbs": 36,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat meal cereal unrefined",
      "Measure": "3/4 cup",
      "Grams": 30,
      "Calories": 103,
      "Protein": 4,
      "Fat": 1,
      "Carbs": 25,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Wheat, cooked",
      "Measure": "3/4 cup",
      "Grams": 200,
      "Calories": 275,
      "Protein": 12,
      "Fat": 1,
      "Carbs": 35,
      "Category": "Breads, cereals, fastfood,grains"
    },
    {
      "Food": "Bean soups",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 190,
      "Protein": 8,
      "Fat": 5,
      "Carbs": 30,
      "Category": "Soups"
    },
    {
      "Food": "Beef soup",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 100,
      "Protein": 6,
      "Fat": 4,
      "Carbs": 11,
      "Category": "Soups"
    },
    {
      "Food": "Bouillon",
      "Measure": "1 cup",
      "Grams": 240,
      "Calories": 24,
      "Protein": 5,
      "Fat": 0,
      "Carbs": 0,
      "Category": "Soups"
    },
    {
      "Food": "chicken soup",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 75,
      "Protein": 4,
      "Fat": 2,
      "Carbs": 10,
      "Category": "Soups"
    },
    {
      "Food": "Clam chowder",
      "Measure": "1 cup",
      "Grams": 255,
      "Calories": 85,
      "Protein": 5,
      "Fat": 2,
      "Carbs": 12,
      "Category": "Soups"
    },
    {
      "Food": "Cream soups",
      "Measure": "1 cup",
      "Grams": 255,
      "Calories": 200,
      "Protein": 7,
      "Fat": 12,
      "Carbs": 18,
      "Category": "Soups"
    },
    {
      "Food": "Noodle",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 115,
      "Protein": 6,
      "Fat": 4,
      "Carbs": 13,
      "Category": "Soups"
    },
    {
      "Food": "Split-pea soup",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 147,
      "Protein": 8,
      "Fat": 3,
      "Carbs": 25,
      "Category": "Soups"
    },
    {
      "Food": "Tomato soup",
      "Measure": "1 cup",
      "Grams": 245,
      "Calories": 175,
      "Protein": 6,
      "Fat": 7,
      "Carbs": 22,
      "Category": "Soups"
    },
    {
      "Food": "Vegetable",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 80,
      "Protein": 4,
      "Fat": 2,
      "Carbs": 14,
      "Category": "Soups"
    },
    {
      "Food": "Apple betty",
      "Measure": "1 serving",
      "Grams": 100,
      "Calories": 150,
      "Protein": 1,
      "Fat": 4,
      "Carbs": 29,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Bread pudding",
      "Measure": "3/4 cup",
      "Grams": 200,
      "Calories": 374,
      "Protein": 11,
      "Fat": 12,
      "Carbs": 56,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Cakes",
      "Measure": "1 slice",
      "Grams": 40,
      "Calories": 110,
      "Protein": 3,
      "Fat": "t",
      "Carbs": 23,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Chocolate fudge",
      "Measure": "1 slice",
      "Grams": 120,
      "Calories": 420,
      "Protein": 5,
      "Fat": 14,
      "Carbs": 70,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Cupcake",
      "Measure": 1,
      "Grams": 50,
      "Calories": 160,
      "Protein": 3,
      "Fat": 3,
      "Carbs": 31,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Fruit cake",
      "Measure": "1 slice",
      "Grams": 30,
      "Calories": 105,
      "Protein": 2,
      "Fat": 4,
      "Carbs": 17,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Gingerbread",
      "Measure": "1 slice",
      "Grams": 55,
      "Calories": 180,
      "Protein": 2,
      "Fat": 7,
      "Carbs": 28,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Plain, with no icing",
      "Measure": "1 slice",
      "Grams": 55,
      "Calories": 180,
      "Protein": 4,
      "Fat": 5,
      "Carbs": 31,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Sponge cake",
      "Measure": "1 slice",
      "Grams": 40,
      "Calories": 115,
      "Protein": 3,
      "Fat": 2,
      "Carbs": 22,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Candy",
      "Measure": 5,
      "Grams": 25,
      "Calories": 104,
      "Protein": "t",
      "Fat": 3,
      "Carbs": 19,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Chocolate creams",
      "Measure": 2,
      "Grams": 30,
      "Calories": 130,
      "Protein": "t",
      "Fat": 4,
      "Carbs": 24,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Fudge",
      "Measure": "2 pieces",
      "Grams": 90,
      "Calories": 370,
      "Protein": "t",
      "Fat": 12,
      "Carbs": 80,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Hard candies",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 90,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 28,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Marshmallows",
      "Measure": 5,
      "Grams": 30,
      "Calories": 98,
      "Protein": 1,
      "Fat": 0,
      "Carbs": 23,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Milk chocolate",
      "Measure": "2-oz. bar",
      "Grams": 56,
      "Calories": 290,
      "Protein": 2,
      "Fat": 6,
      "Carbs": 44,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Chocolate syrup",
      "Measure": "2 T.",
      "Grams": 40,
      "Calories": 80,
      "Protein": "t",
      "Fat": "t",
      "Carbs": 22,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Doughnuts",
      "Measure": 1,
      "Grams": 33,
      "Calories": 135,
      "Protein": 2,
      "Fat": 7,
      "Carbs": 17,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Gelatin, made with water",
      "Measure": "1 cup",
      "Grams": 239,
      "Calories": 155,
      "Protein": 4,
      "Fat": "t",
      "Carbs": 36,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Honey",
      "Measure": "2 T.",
      "Grams": 42,
      "Calories": 120,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 30,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Ice cream",
      "Measure": "2 cups",
      "Grams": 300,
      "Calories": 250,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 0,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Ices",
      "Measure": "1 cup",
      "Grams": 150,
      "Calories": 117,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 48,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "preserves",
      "Measure": "1 T.",
      "Grams": 20,
      "Calories": 55,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 14,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Jellies",
      "Measure": "1 T.",
      "Grams": 20,
      "Calories": 50,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 13,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Molasses",
      "Measure": "1 T.",
      "Grams": 20,
      "Calories": 45,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 11,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Cane Syrup",
      "Measure": "1 T.",
      "Grams": 20,
      "Calories": 50,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 13,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "9\" diam. pie",
      "Measure": "1 slice",
      "Grams": 135,
      "Calories": 330,
      "Protein": 3,
      "Fat": 13,
      "Carbs": 53,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Cherry Pie",
      "Measure": "1 slice",
      "Grams": 135,
      "Calories": 340,
      "Protein": 3,
      "Fat": 13,
      "Carbs": 55,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Custard",
      "Measure": "1 slice",
      "Grams": 130,
      "Calories": 265,
      "Protein": 7,
      "Fat": 11,
      "Carbs": 34,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Lemon meringue",
      "Measure": "1 slice",
      "Grams": 120,
      "Calories": 300,
      "Protein": 4,
      "Fat": 12,
      "Carbs": 45,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Mince",
      "Measure": "1 slice",
      "Grams": 135,
      "Calories": 340,
      "Protein": 3,
      "Fat": 9,
      "Carbs": 62,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Pumpkin Pie",
      "Measure": "1 slice",
      "Grams": 130,
      "Calories": 265,
      "Protein": 5,
      "Fat": 12,
      "Carbs": 34,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Puddings Sugar",
      "Measure": "1 cup",
      "Grams": 200,
      "Calories": 770,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 199,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "3 teaspoons sugar",
      "Measure": "1 T.",
      "Grams": 12,
      "Calories": 50,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 12,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Brown, firm-packed, dark sugar",
      "Measure": "1 cup",
      "Grams": 220,
      "Calories": 815,
      "Protein": 0,
      "Fat": "t",
      "Carbs": 210,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Syrup",
      "Measure": "2 T.",
      "Grams": 40,
      "Calories": 100,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 25,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "table blends sugar",
      "Measure": "2 T.",
      "Grams": 40,
      "Calories": 110,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 29,
      "Category": "Jams, Jellies"
    },
    {
      "Food": "Tapioca cream pudding",
      "Measure": "1 cup",
      "Grams": 250,
      "Calories": 335,
      "Protein": 10,
      "Fat": 10,
      "Carbs": 42,
      "Category": "Desserts, sweets"
    },
    {
      "Food": "Almonds",
      "Measure": "1/2 cup",
      "Grams": 70,
      "Calories": 425,
      "Protein": 13,
      "Fat": 38,
      "Carbs": 13,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "roasted and salted",
      "Measure": "1/2 cup",
      "Grams": 70,
      "Calories": 439,
      "Protein": 13,
      "Fat": 40,
      "Carbs": 13,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Brazil nuts",
      "Measure": "1/2 cup",
      "Grams": 70,
      "Calories": 457,
      "Protein": 10,
      "Fat": 47,
      "Carbs": 7,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Cashews",
      "Measure": "1/2 cup",
      "Grams": 70,
      "Calories": 392,
      "Protein": 12,
      "Fat": 32,
      "Carbs": 20,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "coconut sweetened",
      "Measure": "1/2 cup",
      "Grams": 50,
      "Calories": 274,
      "Protein": 1,
      "Fat": 20,
      "Carbs": 26,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Peanut butter",
      "Measure": "1/3 cup",
      "Grams": 50,
      "Calories": 300,
      "Protein": 12,
      "Fat": 25,
      "Carbs": 9,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Peanut butter, natural",
      "Measure": "1/3 cup",
      "Grams": 50,
      "Calories": 284,
      "Protein": 13,
      "Fat": 24,
      "Carbs": 8,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Peanuts",
      "Measure": "1/3 cup",
      "Grams": 50,
      "Calories": 290,
      "Protein": 13,
      "Fat": 25,
      "Carbs": 9,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Pecans",
      "Measure": "1/2 cup",
      "Grams": 52,
      "Calories": 343,
      "Protein": 5,
      "Fat": 35,
      "Carbs": 7,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Sesame seeds",
      "Measure": "1/2 cup",
      "Grams": 50,
      "Calories": 280,
      "Protein": 9,
      "Fat": 24,
      "Carbs": 10,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Sunflower seeds",
      "Measure": "1/2 cup",
      "Grams": 50,
      "Calories": 280,
      "Protein": 12,
      "Fat": 26,
      "Carbs": 10,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Walnuts",
      "Measure": "1/2 cup",
      "Grams": 50,
      "Calories": 325,
      "Protein": 7,
      "Fat": 32,
      "Carbs": 8,
      "Category": "Seeds and Nuts"
    },
    {
      "Food": "Beer",
      "Measure": "2 cups",
      "Grams": 480,
      "Calories": 228,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 8,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Gin",
      "Measure": "1 oz.",
      "Grams": 28,
      "Calories": 70,
      "Protein": 0,
      "Fat": 0,
      "Carbs": "t",
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Wines",
      "Measure": "1/2 cup",
      "Grams": 120,
      "Calories": 164,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 9,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Table (12.2% alcohol)",
      "Measure": "1/2 cup",
      "Grams": 120,
      "Calories": 100,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 5,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Carbonated drinks Artificially sweetened",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 0,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 0,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Club soda",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 0,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 0,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Cola drinks",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 137,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 38,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Fruit-flavored soda",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 161,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 42,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Ginger ale",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 105,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 28,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Root beer",
      "Measure": "12 oz.",
      "Grams": 346,
      "Calories": 140,
      "Protein": 0,
      "Fat": 0,
      "Carbs": 35,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Coffee",
      "Measure": "1 cup",
      "Grams": 230,
      "Calories": 3,
      "Protein": "t",
      "Fat": 0,
      "Carbs": 1,
      "Category": "Drinks,Alcohol, Beverages"
    },
    {
      "Food": "Tea",
      "Measure": "1 cup",
      "Grams": 230,
      "Calories": 4,
      "Protein": 0,
      "Fat": "t",
      "Carbs": 1,
      "Category": "Drinks,Alcohol, Beverages"
    }
  ]

router.param("food", (req, res, next, id) => {
    req.food = nutrients[food]
    next()
})

module.exports = router