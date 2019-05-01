import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import spotifyReducers from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    spotifyReducers,
    applyMiddleware(...middlewares)
  )
}

export default configureStore;