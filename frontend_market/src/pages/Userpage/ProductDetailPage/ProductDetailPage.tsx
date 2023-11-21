import { useDispatch } from 'react-redux';
import { useGetProductByIdQuery, useGetRelatedProductsQuery } from '../../../services/product.service';
import { Link, useParams } from 'react-router-dom';
import { addItem } from '../../../slices/cartSlice';
import { message } from 'antd';
import { useState } from 'react';


const ProductDetailPage = () => {
  const [inputQuantity, setinputQuantity] = useState<any>(1);
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
console.log(data);

  const handleinputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[\d.]+$/.test(e.target.value)) {
      const value = e.target.value;
      if (value.endsWith('.') && !/\.\d+$/.test(value)) {
        setinputQuantity(value);
      } else {
        const rounded = Math.floor(Number(e.target.value));
        const result = Number(e.target.value) - rounded;
        if (result >= 1) {
          setinputQuantity(rounded + 1);
        } else {
          setinputQuantity(rounded);
        }
      }
    } else {
      setinputQuantity('');
    }
  };
  const dispatch = useDispatch();
  const add_to_cart = () => {
    if (inputQuantity > data?.product?.maxQuantity) {
      message.error('Số lượng đã vượt quá số lượng hiện có');
    } else if (inputQuantity != '') {
      const product = {
        _id: data?.product?._id,
        name: data?.product?.name,
        image: data?.product?.image[0].url,
        price:
          data?.product?.discount > 0
            ? data?.product?.price - (data?.product?.price * data?.product?.discount) / 100
            : data?.product?.price,
        quantity: inputQuantity,
        maxQuantity: data?.product?.maxQuantity
      };
      dispatch(addItem(product));
    } else {
      setinputQuantity(1);
      message.error('Số lượng không hợp lệ');
    }

  };

  const dec = () => {
    setinputQuantity(inputQuantity + 1);
  };
  const inc = () => {
    if (inputQuantity > 1) {
      setinputQuantity(inputQuantity - 1);
    }
  };
  const objId = {
    idCategory: data?.product?.categoryId?._id,
    idProduct: id
  };
  console.log(objId);
  
  const { data: relatedProductsData } = useGetRelatedProductsQuery(objId!, {
    skip: !objId.idCategory || !objId.idProduct
  });
console.log(relatedProductsData);

  return (
    <div>
      <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
        <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
          <span>
            <a href='/'>Trang chủ </a> / Chi tiết
          </span>
        </div>
      </section>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        {!isLoading && data?.product ?
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <img src={data?.product.image[0]?.url} alt=""
                      className="object-cover w-[100%] lg:h-[500px] " />
                  </div>
                  <div className="flex-wrap hidden md:flex  ">
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={data?.product.image[1]?.url} alt=""
                          className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={data?.product.image[2]?.url} alt=""
                          className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={data?.product.image[3]?.url} alt=""
                          className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={data?.product.image[4]?.url} alt=""
                          className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">

                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                      {data?.product.name}
                    </h2>
                    <div className="flex items-center mb-6">
                      <ul className="flex mr-2">
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                    </div>
                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                      {data?.product.desc}
                    </p>
                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
                      <span>{data?.product.price}$</span>
                      <span
                        className="text-base font-normal text-gray-500 line-through dark:text-gray-400">{data?.product.discount}%</span>
                    </p>
                    <p className="text-green-600 dark:text-green-300 "> Số lượng:{data?.product.maxQuantity}</p>
                  </div>

                  <div className="flex mb-8">
                    <h2 className="w-[19%] text-xl font-medium dark:text-gray-400">
                      Tác giả:</h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {data?.product.author}
                    </div>
                  </div>
                  <div className="flex mb-8">
                    <h2 className="w-[25%] text-xl font-medium dark:text-gray-400">
                      Danh mục:</h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {data?.product.categoryId.cateName}
                    </div>
                  </div>
                  <div className="w-32 mb-8 ">
                    <label
                      className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                      <button
                        onClick={inc}
                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input type="number"
                        onChange={handleinputQuantity}
                        value={inputQuantity}
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                        placeholder="1" />
                      <button
                        onClick={dec}
                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center -mx-4 ">
                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                      <button
                        onClick={add_to_cart}
                        className="flex items-center justify-center w-full p-4 text-green-500 border border-green-500 rounded-md dark:text-gray-200 dark:border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-gray-100 dark:bg-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:hover:text-gray-300">
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <></>}
      </section>
      <section className='flex justify-center'>
        <div className='w-[85%] section-breadcrumb py-[15px]  border-b-[1px] border-[#e2e2e2]'>
          <span>
            <h1 className='text-3xl'>Sản phẩm liên quan</h1>
          </span>
        </div>
      </section>
      <div className='flex justify-center'>
        <div className="grid grid-cols-4 gap-5 pt-10 w-[85%]">
        {relatedProductsData?.products?.map((item: any) => (

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

export default ProductDetailPage