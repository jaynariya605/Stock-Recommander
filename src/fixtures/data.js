


const createStock = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1)
    
    return [...new Array(20)].map(()=>{
        date.setDate(date.getDate() - 1)
        
        return ({
            date: date.toDateString(),
            price: Math.round(Math.random() * 100),
            facebook: Math.round(Math.random() * 100)
        })
    })
}

const data = {
    apple: createStock(),
    google: createStock(),
    amazon: createStock(),
    goto: createStock(),
    tcs: createStock(),
}

export default data