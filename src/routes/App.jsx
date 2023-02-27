import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

import useProducts from '../hooks/useInitialState';
import AppContext from '../context/appContext';


const AsyncCheckutContainer = React.lazy(() => {
  import("@containers/Checkout")
})


const App = () => {
  const initialState = useProducts();
  const isEmpty = Object.keys(initialState.products).length;

  return (
    <>
      {isEmpty > 0 ? (
        <Suspense fallback={<div>Loading..</div>}>
          <AppContext.Provider value={initialSta}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/checkout" component={AsyncCheckoutContaine} />
                  <Route component={NotFound} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : <h1>Loading...</h1>
      }
    </>
  );
};

export default App;
