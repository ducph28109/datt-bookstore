import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './component/Banner';
import Delivery from './component/Delivery';
import ProductPage from '../ProductPage/ProductPage';

const HomePage = () => {
   return (
      <div>
         <Helmet>
            <title>Trang chủ</title>
         </Helmet>

         <Banner />

         <Delivery />
         <ProductPage/>

      </div>
   );
};

export default HomePage;
