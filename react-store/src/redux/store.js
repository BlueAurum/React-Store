import { configureStore } from "@reduxjs/toolkit";
import productPageSlice from "./slices/productPageSlice/productPageSlice";
import basketSlice from "./slices/basketSlice/basketSlice";
import fovoritesSlice from "./slices/fovoritesSlice/fovoritesSlice";
import reviewsSlice from './slices/addReviews/addReviews'

export const store = configureStore({
    reducer: {
        productSlice: productPageSlice,
        basketSlice,
        fovoritesItem: fovoritesSlice,
        reviews: reviewsSlice
    }
})
