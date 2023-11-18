import { useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { useSearchProductMutation } from '../../../../services/product.service';
import axios from 'axios';
import { IProduct } from '../../../../interfaces/product';
import { Link } from 'react-router-dom';

const SearchFilter = ({ children, icon }: any) => {
   const [open, setOpen] = useState(false);
   const [search, setSearch] = useState<string>("");
   const [product, setProduct] = useState<IProduct[]>();
   const showDrawer = () => {
      setOpen(true);
   };
   const onSubmit = (e: any) => {
      e.preventDefault();
      console.log(search);
      axios.get(`http://localhost:8000/api/products?_q=${search}`).then(({ data }) => {
         setProduct(data.product);

      })
   };
   console.log(product);

   const onClose = () => {
      setOpen(false);
   };
   return (
      <div>
         <Space>
            <Button icon={icon} className='text-black border-none ' onClick={showDrawer}>
               {children}

            </Button>
         </Space>
         <Drawer placement='top' title='Basic Drawer' closable={false} onClose={onClose} open={open}>
            <form action="" onSubmit={onSubmit} method='POST'>
               <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                     </svg>
                  </div>
                  <input  onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                     <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
               </div>
               </form>

               
               <div className="grid grid-cols-4 gap-5 pt-10">
                  {product?.map((item: IProduct) => (
                     <div className='border border-gray-300 p-5 rounded-md h-[383px]'>
                        <div>
                           <Link className='flex justify-center' to={'/detail/' + item._id}>
                              <img className='w-[100%] h-[280px]' src={item?.image[0]?.url} alt='' />
                           </Link>
                        </div>
                        <div className='flex justify-center text-lg font-sans  font-semibold'>
                           <Link className='pt-3' to={'/detail/' + item._id}>
                              <p>{item?.name}</p>
                           </Link>
                        </div>
                        <div className='flex justify-center font-sans text-lg text-[#d84343] font-bold'>
                           <p>{item?.price} $</p>
                        </div>
                     </div>
                  ))}
               </div>
         </Drawer>

      </div>
   );
};

export default SearchFilter;
