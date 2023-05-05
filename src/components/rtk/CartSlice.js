import { createSlice } from '@reduxjs/toolkit'


export const cart = createSlice({
  name: 'cart',
  initialState :[],
  reducers: {
    add:(state,action)=>{

      if (state.some(item => item.id === action.payload.id)) {

        state =  state.map(item => item.id === action.payload.id ?
        item.quantity += action.payload.quantity : null

        );
      } else {
        state.push(action.payload)
      }   

  
    },
    deleteFromCart:(state,action)=>{
    return  state.filter(item => item.id !== action.payload.id)
  
   },
   plusQuantity : (state,action)=>{
     state.map(item => item.id === action.payload.id && item.quantity < 100 ?
      
      item.quantity += 1 : null
    )
   },
   mynasQuantity : (state,action)=>{
     state.map(item => item.id === action.payload.id &&item.quantity > 1 ?
      item.quantity -= 1 : null
    )
   },
 

  }
})

// Action creators are generated for each case reducer function
export const { add , deleteFromCart,plusQuantity,mynasQuantity,} = cart.actions

export default cart.reducer