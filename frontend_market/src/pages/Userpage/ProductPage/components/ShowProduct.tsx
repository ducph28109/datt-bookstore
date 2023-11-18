import React, { useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../../../../services/product.service';
import { useGetAllCateQuery } from '../../../../services/cate.service';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../../interfaces/product';


const ShowProduct = () => {

  const { data } = useGetAllProductsQuery();
  const { data: item, isLoading } = useGetAllCateQuery();
  const [currentProduct, setCurrentProduct] = useState<IProduct[]>([])
  useEffect(() => {
    if (!isLoading && item?.data) {
      setCurrentProduct(item?.data[0].productId)
    }
  }, [item, isLoading])

  return (
    <div className='m-[5%] font-serif '>

      <div className='bg-[#F0F0F0] h-[600px]'>
        <div className="flex justify-center text-3xl pt-[2%] font-medium	">
        <button className="bg-yellow-400 text-white w-[30%] h-[50px] rounded-full"> <h1>Sản phẩm nổi bật</h1></button> 
        </div>

        <div className="grid grid-cols-5 font-sans  font-semibold bg-[white]  m-[3%]">
          <div className=' m-5'>
            <div>
              <a className='flex justify-center' href="">
                <img className='w-[100%] h-[300px]' src="https://www.vinabook.com/images/thumbnails/product/240x/372407_p96270mscreenshot20220824091942.jpg" alt="" />
              </a>
            </div>
            <div className='flex justify-center p-3 font-medium'>
              <a href="">
                <p>Tàn nhẫn yêu thương</p>
              </a>
            </div>
            <div className='flex justify-center text-[#d84343] font-bold'>
              <p>150.000đ</p>
            </div>
          </div>

          <div className=' m-5'>
            <div>
              <a className='flex justify-center' href="">
                <img className='w-[100%] h-[300px]' src="https://www.vinabook.com/images/thumbnails/product/240x/376639_p97463mmuonkiepnhansinh3khonhobia11.jpg" alt="" />
              </a>
            </div>
            <div className='flex justify-center p-3 font-medium'>
              <a href="">
                <p>Muôn kiếp nhân sinh</p>
              </a>
            </div>
            <div className='flex justify-center text-[#d84343] font-bold'>
              <p>270.000đ</p>
            </div>
          </div>

          <div className=' m-5'>
            <div>
              <a className='flex justify-center' href="">
                <img className='w-[100%] h-[300px]' src="https://www.vinabook.com/images/thumbnails/product/240x/372234_p95162mscreenshot20220822101250.jpg" alt="" />
              </a>
            </div>
            <div className='flex justify-center p-3 font-medium'>
              <a href="">
                <p>Giải mã chiến lược</p>
              </a>
            </div>
            <div className='flex justify-center text-[#d84343] font-bold'>
              <p>50.000đ</p>
            </div>
          </div>

          <div className=' m-5'>
            <div>
              <a className='flex justify-center' href="">
                <img className='w-[100%] h-[300px]' src="https://www.vinabook.com/images/thumbnails/product/240x/372042_p93100mscreenshot20220811135549.jpg" alt="" />
              </a>
            </div>
            <div className='flex justify-center p-3 font-medium'>
              <a href="">
                <p>Thói quen thành đạt</p>
              </a>
            </div>
            <div className='flex justify-center text-[#d84343] font-bold'>
              <p>125.000đ</p>
            </div>
          </div>

          <div className=' m-5'>
            <div>
              <a className='flex justify-center' href="">
                <img className='w-[100%] h-[300px]' src="https://www.vinabook.com/images/thumbnails/product/240x/368559_p94826mkhatvongviet1bia1.jpg" alt="" />
              </a>
            </div>
            <div className='flex justify-center p-3 font-medium'>
              <a href="">
                <p>Khát vọng việt</p>
              </a>
            </div>
            <div className='flex justify-center text-[#d84343] font-bold'>
              <p>350.000đ</p>
            </div>
          </div>

        </div>

      </div>


      <div className='flex'>
        <div className='flex-1 grid grid-cols-4 gap-5 pt-10'>
          {currentProduct?.map((item: any) => (
            <div className='border border-gray-300 p-5 rounded-md h-[285px]'>
              <div>
                <Link className='flex justify-center' to={'/detail/' + item._id}>
                  <img className='w-[100%] h-[185px]' src={item?.image[0]?.url} alt='' />
                </Link>
              </div>
              <div className='flex justify-center text-lg font-sans  font-semibold'>
                <Link className='pt-2' to={'/detail/' + item._id}>
                  <p>{item?.name}</p>
                </Link>
              </div>
              <div className='flex justify-center font-sans text-lg text-[#d84343] font-bold'>
                <p>{item?.price} $</p>
              </div>
            </div>
          ))}

        </div>

        <div className='w-[200px]'>
          <div className='bg-[#F2D338] pl-[15px]'>
            <h1 className='mb-[20px] text-[30px]'>Danh mục</h1>
          </div>
          {item?.data?.map((cate: any) => (
            <ul>
              <li className='m-[15px] font-semibold'><button onClick={() => setCurrentProduct(cate.productId)}>{cate?.cateName}</button></li>
              <hr />
            </ul>
          ))}
        </div>
      </div>


      <div className='pt-10'>
        <div className=' text-4xl text-white '>
          <button className="bg-yellow-400 w-[100%] h-[50px]">
            Sản Phẩm
          </button>
        </div>

        <div className="grid grid-cols-4 gap-5 pt-10">
          {data?.product?.map((item: any, index) => (
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


      </div>






    </div>
  )
}

export default ShowProduct