import { useEffect } from "react";
import { useState } from "react";
import Botale from "./Botale";
import { addToLs, getStoreItem, removecartItem } from "../utilites/loacl-storge";
import Cart from "./Cart";

const Botales = () => {
    const [botales, setBottales] = useState([]);
    const [carts, setCarts]= useState([])
    useEffect(()=>{
        fetch('Botle.json')
        .then(res => res.json())
        .then(data =>setBottales(data))
    },[]);

    useEffect(() =>{
        
    if (botales.length> 0) {
        const storedItem = getStoreItem();
        console.log(storedItem);
        const savedCart = [];
        for (const id of storedItem) {
            console.log(id);
            const findBottale = botales.find(botale =>botale.id===id)
            if (findBottale) {
                savedCart.push(findBottale);
            }
        }
        setCarts(savedCart)
    }
    },[botales]);

    const handlePurchase =botale =>{
        const newArray = [...carts, botale];
        setCarts(newArray);
        addToLs(botale.id)
        console.log(addToLs);
    }

    const handelRemove= id =>{
        const reaming =carts.filter(botale => botale.id!== id)
        setCarts(reaming)
        removecartItem(id)
    }

    return (
        <div>
            <h2 className=" text-xl font-bold">Botels Here:{botales.length}</h2>
          
            <Cart carts={carts} handelRemove ={handelRemove}></Cart>
           
            <div className="grid  grid-cols-3 gap-5">
            {
                botales.map(botale => <Botale key={botale.id} botale={botale} handlePurchase = {handlePurchase } ></Botale>)
            }
            </div>
        </div>
    );
};

export default Botales;