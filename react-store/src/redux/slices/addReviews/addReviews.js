import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
!localStorage.reviews
    ? (initialState = [])
    : (initialState = JSON.parse(localStorage.getItem("reviews")));

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        addReviews(state, action) {
            state.push(action.payload);
        },
    },
});

export const { addReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
