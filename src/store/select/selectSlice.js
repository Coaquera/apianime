import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title:'',
    images:'',
    episodes:0,
   
}

export const selectSlice = createSlice({
    name:'select',
    initialState,
    reducers:{
        selected: (state,action) => {
            //console.log(action)
            state.title = action.payload.title,
            state.images = action.payload.images,
            state.episodes = action.payload.episodes
        },
        clean: (state) => {
            state.name = '',
            state.images = '',
            state.episodes = ''
        }

        
    }

})

export const {selected,clean} = selectSlice.actions;