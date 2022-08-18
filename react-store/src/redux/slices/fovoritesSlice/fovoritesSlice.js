import { createSlice } from "@reduxjs/toolkit";

let initialState;

!localStorage.fovorites ? initialState = [] : initialState = JSON.parse(localStorage.getItem('fovorites'))

export const fovoritesSlice = createSlice({
    name: 'fovorites',
    initialState,
    reducers: {
        addFovoritesItem(state, action) {
            state.push(action.payload)
        },
        removeFavorites(state, action) {
            return [...state.filter(item => item.id !== action.payload)]
        }
    }
})

export const { addFovoritesItem, removeFavorites } = fovoritesSlice.actions
export default fovoritesSlice.reducer