const init = 0;

const reducerComp =(state=init,action)=>{

    switch (action.type){
        case 'increment':
        return state+1;
        case 'decrement':
        return state-1;
        default:
    }
}
export default reducerComp;