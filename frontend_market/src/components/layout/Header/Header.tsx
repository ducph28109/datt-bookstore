import { Link } from 'react-router-dom';
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import SearchFilter from './components/SearchFilter';
import { Button, Col, Popover, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth, deleteTokenAndUser } from '../../../slices/authSlice'
import { useClearTokenMutation } from '../../../services/auth.service';

const Header = () => {
   const auth = useSelector((state: { userReducer: IAuth }) => state.userReducer);
   // console.log(auth?.user?._id);

   const [clearToken] = useClearTokenMutation();
   const dispatch = useDispatch();
   const onHandleLogout = () => {
      dispatch(deleteTokenAndUser());
      clearToken();
   };
   return (
      <div className='lg:px-40 md:px-32 px-20'>
         <div className='header-top  flex justify-between items-center'>
            <div className='hidden opacity-0 invisible md:block md:opacity-100 md:visible'>
               <div className=' flex justify-between items-center gap-5 pb-3'>
                  <span className='hidden opacity-0 invisible md:block md:opacity-100 md:visible'>
                     {!auth?.accessToken ? (
                        <Popover
                           placement='bottom'
                           content={
                              <>
                                 <Link className='text-[#00ab9f]' to={'/signup'}>
                                    Đăng ký
                                 </Link>
                                 <br />
                                 <Link className='text-[#00ab9f]' to={'/login'}>
                                    Đăng nhập
                                 </Link>
                              </>
                           }
                           trigger='click'
                        >
                           <span>
                              <CiUser className='w-7 h-7' />
                           </span>
                        </Popover>
                     ) : (
                        <>
                           <div className='w-[5%] h-full'></div>
                           <Popover
                              placement='bottom'
                              content={
                                 <>
                                    <Link to={'/userPage/' + auth?.user?._id}>Tài Khoản</Link>
                                    <br />
                                    <button onClick={() => onHandleLogout()}>Đăng xuất</button>
                                 </>
                              }
                              trigger='click'
                           >
                              <img src={auth?.user?.avatar} className='w-8 rounded-full  aspect-square m-0  cursor-pointer' />
                           </Popover>
                        </>
                     )}
                  </span>
                  <CiHeart className='w-7 h-7  hidden opacity-0 invisible md:block md:opacity-100 md:visible' />
               </div>
            </div>
            <div className='text-center'>
               <div className='md:w-48 md:h-36 w-24 h-fit py-2 pt-12'>
                  <img src='http://wp.acmeedesign.com/bookstore/wp-content/uploads/2016/01/logo_green.png' alt='' />
               </div>
            </div>
            <div className='flex justify-between items-center gap-5 '>
               <SearchFilter icon={<CiSearch className='w-7 h-7' />}></SearchFilter>
               <Button
                  className='pb-10 border-none hidden opacity-0 invisible md:block md:opacity-100 md:visible'
                  icon={<CiShoppingCart className='w-7 h-7 ' />}
               />


            </div>
         </div>
         <hr />
         <Row
            justify='center'
            className='py-5 text-center items-center md:gap-10 hidden opacity-0 invisible md:flex md:opacity-100 md:visible'
         >
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/'>Trang chủ</Link>
            </Col>
         
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/about'>Giới thiệu</Link>
            </Col>
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/contact'>Liên hệ</Link>
            </Col>
         </Row>
         {/* <MenuSideBar open={open} data={data} isLoading={isLoading} onClose={onClose} /> */}
      </div>
   );
};

export default Header;
