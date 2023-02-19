
//replace recommandation algoritham with return 1, 0 , -1 for buy , hold, sell respectively.
const recommandation = ({ data, social = 'facebook', item, index }) => {
    
    const avgPrice = (data.slice(index,index + 10).reduce((acc, ele)=> acc + ele.price, 0)) / 10
    const avgPost = (data.slice(index,index + 10).reduce((acc, ele)=> acc + ele[social], 0)) / 10

    if(item.price > avgPrice && item[social] < avgPost){
        return -1
    }else if(item.price < avgPrice && item[social] > avgPost){
        return 1
    }else{
        return 0
    }
}

export default recommandation