import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listanime:[],
    isLoading:false,
    
}

export const bodySlice = createSlice({
    name:'body',
    initialState,
    reducers:{
        insertList:(state,action) => {

            state.listanime = action.payload
            state.isLoading = false
        },
        startLoadingData:(state) => {
            state.isLoading = true
        }
        
    }

})

export const {
    insertList,
    startLoadingData
} = bodySlice.actions;