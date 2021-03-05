import { createStore } from 'redux';
import reducerComp from '../reducer/reducerComp';


const storeComp = createStore(
    reducerComp,window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default storeComp;
