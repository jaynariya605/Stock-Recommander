import {  useContext } from "react";
import Application from "../context/Application";

export const StockHeader= ({state}) => {
  
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"><span>{state && state.title}</span> </h1>    
            </div>
            
        </div>
    )
}

export default ()=> {
    const { state } = useContext(Application)
    return <StockHeader state={state}/>
}