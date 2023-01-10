import React from 'react';
import Catigories from "../components/Catigories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

function Home(props) {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://63b883b66f4d5660c6d87d71.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setIsLoading(false)
                setItems(arr)
            })
    }, [])

    return (
        <>
            <div className="content__top">
                <Catigories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)}
            </div>
        </>
    );
}

export default Home;