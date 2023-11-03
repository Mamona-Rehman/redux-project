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
        const {totalquantity ,totaprice , } =state.items.reduce(
            (cartTotal , cartItem  ) =>{
                console.log(" cartTotal" , cartTotal);
                console.log(" cartItem" , cartItem);
                const {newPrice ,quantity} = cartItem
                console.log(newPrice , quantity);
                const itemTotal = newPrice*quantity;
                cartTotal.totaprice += itemTotal
                cartTotal.totalquantity += quantity;
             
               
                return cartTotal; 
            },


            
            {
              totaprice : 0,
             totalquantity:0
            }
        
            )
            state.totaprice = parseInt(totaprice.toFixed(2))
            state.totalquantity = totalquantity
           
    },
    calculateSubTotal: (state) => {
      
      const {subTotal} = state.items.reduce(
        (total, cartItem ,item) => {
          console.log("total" , total)
          console.log("cartitem" , cartItem )
        
        const { newPrice, quantity ,title} = cartItem;
        const itemTotal = newPrice * quantity;
        total.subTotal+=itemTotal;
        return total  ;
      }, 
      {subTotal:0});

      state.subTotal = subTotal;
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
export const { addItemToCart , getCartTotal ,removeCartItems  , moveAll, likecart ,calculateSubTotal}  = cartSlice.actions;
export const selectSubTotal = (state) => state.cart.subTotal;
export default cartSlice.reducer;
