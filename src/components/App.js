import React, { useReducer } from "react";
import { Header } from "./Header";
import SearchForm from "./SearchForm";
import StockTable from "./StockTable";
import StockHeader from "./StockHeader";
import Application from "../context/Application";
import stockheader from "../reducer/stockheader";

const App = () =>  {
    const [state, dispatch ] = useReducer(stockheader)
    
    return (
        <div>
        <Application.Provider value={ { state, dispatch }} >
            <Header/>
            <StockHeader/>
            <SearchForm/>
            <StockTable/>
        </Application.Provider>
        </div>
    )
}

export default App