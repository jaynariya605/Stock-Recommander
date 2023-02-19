
import Application from "../context/Application";
import { useContext, useEffect, useState } from "react";
import data from "../fixtures/data";
import Item from "./Item";
import recommandation from "../algorithm/recommandation";


export const StockTable = ( { getData, state }) => {

    
    const [stockdata, setStockData] = useState([])
    const [loading, setLoading] = useState()

    

    useEffect(()=> {

        const fetchData = async () => {
            setLoading(true)
            return new Promise((resolve, reject)=>{
                //settime our for two seccongto see loader
                setTimeout(()=>{
                    resolve(getData(state.title))
               }, 2000)
            })
        }

        if(state){
            setStockData([])
            fetchData().then((data)=>{
                setLoading(false)
                setStockData(data)
            })  
        }
        
    },[state])
    
   
  

    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Date</div>
                <div className="show-for-desktop">Price</div>
                <div className="show-for-desktop">suggestion</div>
            </div>
            {loading && (
                <div className="loader">
                    <div class="loader-circle-2"></div>
                </div>
                
            )}

            {stockdata.length !== 0 && stockdata.slice(10).map((item, index)=> {
                return (
                    <Item key={index} recomand={recommandation({data: stockdata, item, index})} data={item}/>
                )
            }) 
        }
        </div>
    )

}

//replace with API function to get data via stock symbole with async call and Promise
const getData = async (symbole) => {
    return data[symbole]
}

export default () => {
    const { state } = useContext(Application)
    return <StockTable getData={getData} state={state} />
}