import { createSlice, current } from "@reduxjs/toolkit";
import SingIn from "../../pages/SingIn";

const initialState = {
    currentUser: null,
    error:null,
    loading: false,
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        SingInStart: (state) =>{
            state.loading = true;
            
            },
        SingInSuccess: (state, action) => {
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            },
        SingInFailure: (state,action) => {
            state.error = action.payload;
            state.loading = false;
            },   
        
        },
});
export const {SingInStart, SingInSuccess, SingInFailure} = userSlice.actions;
export default userSlice.reducer;