import drinks from "./drinks.json"
import { DrinksCard } from "./DrinksCard"

export function DrinksGrid(){
    return(
<ul className="drinksGrid">
 {drinks.map((drink)=>(
    <DrinksCard key={drink.idDrink} drink = {drink}/>

 ))

 }
</ul>
    )
}