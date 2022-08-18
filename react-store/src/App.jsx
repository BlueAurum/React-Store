import React, { Suspense } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const FavoritesPage = React.lazy(() =>
  import(/* webpackChunkName: "FavoritesPage"*/ "./pages/favorites/Favorites")
);

const BasketPage = React.lazy(() =>
  import(/* webpackChunkName: "BasketPage"*/ "./pages/basket/Basket")
);

const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "NotFoundPage"*/ "./pages/notFound/NotFound")
);

const ReviewsPage = React.lazy(() =>
  import(/*webpackChunkName: "ReviewsPage"*/ "./pages/reviews/Reviews")
);

const ProductPage = React.lazy(() =>
  import(/* webpackChunkName: "ProductPage"*/ "./pages/poductPage/ProductPage")
);

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/favorites"
            element={
              <Suspense
                fallback={<div>Идёт загрузка избранных товаров !!!</div>}
              >
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route
            path="/reviews"
            element={
              <Suspense fallback={<div>идёт загрузка комментариев !!!</div>}>
                <ReviewsPage />
              </Suspense>
            }
          />
          <Route
            path="/baskets"
            element={
              <Suspense
                fallback={<div>Идёт загрузка товаров в карзине !!!</div>}
              >
                <BasketPage />
              </Suspense>
            }
          />
          <Route
            path="/productPage"
            element={
              <Suspense>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
