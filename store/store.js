import users from './UserSlice'
import counter from './CounterSlice'
import { combineReducers,  configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const combinedReducers = combineReducers({
   counter,
   users
})

const masterReducer = (state, action) =>{
  if(action.type === HYDRATE){
   const nextState = {
    ...state,
    counter: {
        count: state.counter.count + action.payload.counter.count,
    },
    users: {
        users: [...action.payload.users.users, ...state.users.users]
    }
   }
   return nextState
  }
  else{
    return combinedReducers(state, action)
  }
}

export const makeStore = () => 
configureStore({
   reducer: masterReducer
})

export const wrapper = createWrapper(makeStore, {debug: true});