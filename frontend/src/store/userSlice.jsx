import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

 const userSlice = createSlice({    // create slice 2 chize return krta h reducers or actions
    name:"user", 
    initialState,      // reserved keyword      data h isme
    reducers: {
        loaduser: (state, action) => {
           // sync action || state means present state for eg. here initial state and actions jo data  isme ayega bhr se means api data. action m jo bhi aata h voh state m pass hota h. And loaduser jha bhi call hoga voh hme action dega 
         state.data = action.payload;
        
         
       
    }
    },
});

export const {loaduser} = userSlice.actions;

export default userSlice.reducer;