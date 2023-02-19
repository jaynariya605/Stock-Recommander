
const createStock = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1)
    
    return [...new Array(20)].map(()=>{
        date.setDate(date.getDate() - 1)
        
        return ({
            date: date.toDateString(),
            price: 100,
            facebook: 100
        })
    })
}

export default createStock()