import { useState, useContext } from "react";
import data from "../fixtures/data";
import Application from "../context/Application";


export const SearchForm = ({fetchSearchQuery}) => {

    const [search, setSearch] = useState('')
    const [filtered, setFilterd] = useState([])
    const { dispatch } = useContext(Application)

    //Change list to customize socialmedia platform according to user prefernce
    const socialMediaList = ['Facebook']

    const onChangeSearch = (e) => {
        const text = e.target.value.toLowerCase().trim()
        setSearch(text)
        setFilterd(fetchSearchQuery(text))
        if(!text){
            setFilterd([])
        }
    }

    

    const onClickSearch = (e) => {
        const action = {
            type: 'ADD_TITLE',
            title: e.target.value
        }
        dispatch(action)
        setSearch('')
        setFilterd([])
    }

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input defaultValue={search} onChange={onChangeSearch} placeholder="Search Stock" className="text-input" type="text"/>
                    { filtered && 
                        <div className="input-dropdown"> 
                            {filtered.map((symbole)=> <button key={symbole} value={symbole} onClick={onClickSearch}>{symbole}</button>)}
                        </div>}
                </div>
                <div className="input-group__item">
                    <select className="select" >
                        {socialMediaList.map((platform)=> <option key={platform} value="date">{platform}</option>)}   
                    </select>
                </div>
            </div>
        </div>
    )
}


//Replace with Elastic search Api to get list of Stock symbols availabe in data set
const fetchSearchQuery = (text) => {
    return Object.keys(data).filter((symbole)=> symbole.includes(text))
}


export default () => {
    return <SearchForm fetchSearchQuery={fetchSearchQuery}/>
}