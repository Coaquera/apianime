import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    input:'',
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        insert:(state,action) => {
            state.input = action.payload
            //console.log("action",action);
        },
        clean:(state) => {
            state.input = ''
        },


    }

})

export const {
    insert,
    clean,
    
} = searchSlice.actions;