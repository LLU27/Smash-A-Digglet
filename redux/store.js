import scoreReducer from './scoreReducer'
import { createStore} from 'redux'

const store = createStore(scoreReducer);

export default store;