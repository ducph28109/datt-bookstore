import HeadPhone from '../../assets/icons/HeadPhone';
const Footer = () => {
   return (
      <footer className='w-full bg-primaryBg '>
         <div className='grid grid-cols-4 gap-10 items-center px-24 pt-28 pb-10 bg-[#f8f8f8]'>
            <div>
               <img
                  src='http://wp.acmeedesign.com/bookstore/wp-content/uploads/2016/01/logo_green.png'
                  alt='logo'
                  
               />
               <h5 className='py-7 w-[270px]'>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                  born.
               </h5>
               <div className='flex justify-between w-[255px]'>
                  <div>
                     <HeadPhone className='w-12 h-12 ' />
                  </div>
                  <div>
                     <h3 className=' pr-8 font-bold text-[#333333]'>HOTLINE NUMBER :-</h3>
                     <p>(+0261) 1200 0230 0256</p>
                  </div>
               </div>
            </div>
            <div className='pl-32'>
               <h2 className='pb-[12px] text-lg font-bold text-[#333333]'>Các danh mục</h2>
               <h2 className='pb-[7px] text-lg'>Sách giáo khoa</h2>
               <h2 className='pb-[7px] text-lg'>Sách thiếu nhi</h2>
               <h2 className='pb-[7px] text-lg'>Sách kinh doanh</h2>
               <h2 className='pb-[7px] text-lg'>Sách chính trị</h2>
               <h2 className='pb-[7px] text-lg'>Sách đời sống</h2>
            </div>
            <div className='px-14'>
               <h2 className='pb-[12px] text-lg font-bold text-[#333333]'>Thông tin</h2>
               <h2 className='pb-[7px] text-lg'>Chính sách bảo mật</h2>
               <h2 className='pb-[7px] text-lg'>Chính sách trả lại</h2>
               <h2 className='pb-[7px] text-lg'>Các điều khoản</h2>
               <h2 className='pb-[7px] text-lg'>Chăm sóc khách hàng</h2>
               <h2 className='pb-[7px] text-lg'>Danh sách mong muốn</h2>
            </div>
            <div>
               <h2 className='pt-5 pb-[12px] text-lg font-bold text-[#333333]'>Theo dõi trên Instagram</h2>
               <div className='grid grid-cols-3 grid-rows-2 gap-5'>
                  <img className='h-20'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSrevhizsy6rp-zaJtg20goLMMxMaZWbh_181HV2YvMoq7hxNMQSeli-GyimnjD0MKrg&usqp=CAU'
                     alt=''
                  />
                  <img className='h-20'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgACNMajzpJ1LHzgr4mvGnpARq2CITMHZaEH-CCibTnwVFdFz_QfZbFyTjBPDHBy_Duc&usqp=CAU'
                     alt=''
                  />
                  <img className='h-20'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDbYojdLmMH78b5bJy089LYcQEq3mPnZCAEcyDJ3myA0yaP2qs2u02lIFoGVqD_lbnXg&usqp=CAU'
                     alt=''
                  />
                  <img className='h-20'
                     src='https://png.pngtree.com/thumb_back/fh260/background/20230727/pngtree-the-book-is-opened-image_10224942.jpg'
                     alt=''
                  />
                  <img className='h-20'
                     src='https://file.vfo.vn/hinh/2016/01/hinh-nen-quyen-sach-23.jpg'
                     alt=''
                  />
                  <img className='h-20'
                     src='https://bloghomestay.vn/wp-content/uploads/2023/03/cap-nhat-155-hinh-anh-quyen-sach-dep-cute-hay-cam-xuc-nhat_1.jpg'
                     alt=''
                  />
               </div>
            </div>
         </div>
         <hr className='h-[1px] bg-slate-950 my-5' />
         <div className='flex justify-between py-8 px-28'>
            <h2 className='text-lg'>© 2023 spacingtech all rights reserved</h2>
            <div className='grid grid-cols-4'>
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/american.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/master.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/paypal.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/visa.svg' alt='' />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
