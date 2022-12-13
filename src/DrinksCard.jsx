


export function DrinksCard(drink){
const imgUrl = "drink.strDrinkThumb"

    return(
        <li className="drinkCard">
            <div>{drink.strDrink}</div>
            <img className="drinkImage" src={imgUrl} alt={drink.strDrink} />
            
        </li>

    )
}

//hasta min 37 de la clase: 
//https://www.youtube.com/watch?v=bF0YaY8_1JM&t=5s


//Links a la API: 


//Coctels by ID:
//https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12724

//Info completa de 6 tragos:
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


