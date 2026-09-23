import { createSlice } from "@reduxjs/toolkit";

const initialState = {                // initial state mtlv cart m ky data aane wla h and ye hmesha null hoga ya ek obj
     carts: [],


}                             
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        loadcart: (state,action) => {
            state.carts = action.payload;      // payload means data
        }
    },

})

export default cartSlice.reducer;
export const {loadcarts} = cartSlice.actions;