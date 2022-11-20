import reducer from "./index"
import { createStore} from 'redux'

const store = createStore(reducer);

export default store;