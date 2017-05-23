import React from 'react'
import ReactDOM from 'react-dom'
// Import the Provider component from React Redux
import {Provider} from 'react-redux'
// Import the createStore method from Redux
import {createStore} from 'redux'
// Import our reducer to use when we create the store
import {puppiesApp} from './reducers'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


// Mocked server/API response
const puppiesFromServer = [
  {
    name: 'Prince Harry',
    breed: 'Jack Russell Terrier',
    available: true,
    avatar: 'https://s-media-cache-ak0.pinimg.com/736x/a3/37/42/a337422802682de0bdf7b7d66cbfd38d.jpg',
    id: 3,
  }, {
    name: 'Priscilla Queen of the Desert',
    breed: 'Australian Shepherd',
    avatar: 'https://s-media-cache-ak0.pinimg.com/564x/08/2b/8b/082b8b2f41a4c9532e4a1ce7b9ee2b7d.jpg',
    available: true,
    id: 1,
  }, {
    name: 'Sean Connery',
    breed: 'Scottish Terrier',
    available: true,
    avatar: 'https://s-media-cache-ak0.pinimg.com/564x/b9/95/18/b99518f3ec721f011b816dc8ad276495.jpg',
    id: 2,
  }
]

// Create the store, passing in the reducer as the
// first argument, and a mocked preloaded set of puppies
let store = createStore(puppiesApp, {
  puppies: puppiesFromServer,
})

// Wrap App in Provider so any containers using `connect`
// can access the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
