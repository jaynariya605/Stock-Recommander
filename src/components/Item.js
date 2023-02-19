
const Item = ({ data, recomand }) => {
    
    return (
        <div className="list-item">
            <h3 className="list-item__title">{data.date.slice(4,)}</h3>
            <h3 className="list-item__title">${data.price}</h3>
            <h3 className="list-item__title">
                {recomand === 1 ? 'Buy' : (recomand === 0 ? 'Hold' : 'Sell')}
            </h3>
        </div>
    )
}

export default Item