

const stockheader = (state ,action) => {
    switch(action.type){
        case 'ADD_TITLE':
            return { title: action.title}
        case 'REMOVE_TITLE':
            return state
        default:
            return state
    }
}   

export default stockheader
