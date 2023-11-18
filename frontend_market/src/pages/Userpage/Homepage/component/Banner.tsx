import { Carousel } from 'antd';
const Banner = () => {
   return (
      <div>
         <Carousel autoplay>
            <div>
               <img
                  className='w-screen h-[450px]'
                  src='https://theme.hstatic.net/200000060620/1001009508/14/ms_banner_img1.jpg?v=23'
                  alt=''
               />
            </div>
            <div>
               <img
                  className='w-screen h-[450px]'
                  src='https://newshop.vn/public/uploads/news/nhung-cuon-sach-van-hoc-hay.jpg'
                  alt=''
               />
            </div>
            <div>
               <img
                  className='w-screen h-[450px]'
                  src='https://cbca.blob.core.windows.net/images/2023_theme_/CBookWeek_Resources/Banner-2_1500x600.jpg'
                  alt=''
               />
            </div>
         </Carousel>
      </div>
   );
};

export default Banner;
