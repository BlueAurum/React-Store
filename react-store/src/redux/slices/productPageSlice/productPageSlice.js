import { createSlice } from "@reduxjs/toolkit";

let initialState;
!localStorage.product ? initialState = [] : initialState = JSON.parse(localStorage.getItem('product'))

export const productPageSlice = createSlice({
    name: 'productPageSlie',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            } else {
                return [{ ...action.payload }]
            }
        }
    }
})

export const { addItem } = productPageSlice.actions;

export default productPageSlice.reducer;