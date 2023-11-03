import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subTotal:0,
    totalquantity: 0,
    totaprice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const find = state.items.findIndex(
        (t) => t.title === action.payload.title
      );
      if (find >= 0) {
        state.items[find].quantity += 1;
      } else {
        action.payload.quantity = 1; 
        state.items.push(action.payload);
      }
    },
    getCartTotal:(state)=>{
        const {totalquantity ,totaprice , subTotal} =state.items.reduce(
            (cartTotal , cartItem ,subTotal ) =>{
                console.log(" cartTotal" , cartTotal);
                console.log(" cartItem" , cartItem);
                const {newPrice ,quantity} = cartItem
                console.log(newPrice , quantity);
                const itemTotal = newPrice*quantity;
                cartTotal.totaprice += itemTotal
                cartTotal.totalquantity += quantity;
                state.items.forEach((item) => {
                  subTotal += item.newPrice * item.quantity;
                });
                return cartTotal; 
            },
            {subTotal:0,
              totaprice : 0,
             totalquantity:0
            }
        
            )
            state.totaprice = parseInt(totaprice.toFixed(2))
            state.totalquantity = totalquantity
            state.subTotal = subTotal
    },
    removeCartItems: (state, action) => {
        state.items = [];
    },
    moveAll:(state,action)=>{
      state.items = action.payload;
    },
    likecart:(state ,action)=>{
     
    }
 
  },
});
export const { addItemToCart , getCartTotal ,removeCartItems  , moveAll, likecart} = cartSlice.actions;
export default cartSlice.reducer;
