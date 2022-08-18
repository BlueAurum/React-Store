import { createSlice } from "@reduxjs/toolkit";

let initialState;
!localStorage.basketItem ? initialState = [] : initialState = JSON.parse(localStorage.getItem('basketItem'))

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addProdoctItem(state, action) {
            const fintItem = state.find(obj => obj.id == action.payload.id);
            if (fintItem) {
                fintItem.count++;
            } else {
                state.push(action.payload)
            }
        },
        clearBasket (state,action) {
            state.length = 0
            state.push(...action.payload)
        },
        removeProductItem(state, action) {
            return [...state.filter(item => item.id != action.payload)]
        },
        itemIncrement(state, action) {
            state.map(item => {
                if (item.id === action.payload) {
                    item.count = item.count + 1
                }
                return item
            })
        },
        itemDecrement(state, action) {
            state.map(item => {
                if (item.count > 0) {
                    if (item.id === action.payload) {
                        item.count = item.count - 1
                    }
                }
                return item
            })
        }
    }
})

export const { addProdoctItem, removeProductItem, itemIncrement, itemDecrement, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;