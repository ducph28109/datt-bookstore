import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useGetAllProductsQuery, useRemoveProductMutation } from '../../../services/product.service';


const ProductAdmin = () => {
    const { data } = useGetAllProductsQuery();
    
    const [removeProduct] = useRemoveProductMutation();
    const onHandleDelete = (id: any) => {
        removeProduct(id);
    };

    return (
        <>

            <Layout style={{ minHeight: '100vh', display: 'flex', position: 'relative', width: '100%' }}>
                <div className='flex-1 flex justify-center items-center flex-col mt-10 w-[100%]'>
                    <div className='flex justify-between items-center w-[90%]'>
                        <h1 className='text-3xl font-semibold text-[rgba(0,0,0,0.7)]'>Sản phẩm</h1>
                        <Link to='/admin/addproduct'>
                            <button className='bg-green-500 duration-100 hover:bg-greenPri600 text-white text-lg p-2 font-semibold rounded-lg flex justify-start items-center gap-2'>
                                <PlusCircleOutlined style={{ color: 'white' }} />
                                Thêm sản phẩm
                            </button>
                        </Link> 
                    </div>

                    <div className='w-[90%] min-h-[100vh] bg-white rounded-lg mt-5'>
                        <header className='flex justify-start gap-4 items-center px-5 py-5'>
                            <div className='flex justify-between items-center max-w-[50%] gap-2 rounded-[100px] border-[1px] border-[#80b235] p-2'>
                                <SearchOutlined style={{ fontSize: '1rem', color: '#80b235' }} />
                                <input
                                    type='text'
                                    className='text-sm outline-none border-none w-full flex-1'
                                    placeholder='Tìm kiếm sản phẩm'
                                />
                            </div>
                        </header>

                        <div className='flex gap-7 flex-wrap' style={{ margin: 30 }}>

                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full text-left text-sm font-light">
                                                <thead className="border-b font-medium dark:border-neutral-500">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4">Tên sản phẩm</th>
                                                        <th scope="col" className="px-6 py-4">Ảnh</th>
                                                        <th scope="col" className="px-6 py-4">Giá</th>
                                                        <th scope="col" className="px-6 py-4">Danh mục</th>
                                                        <th scope="col" className="px-6 py-4">Mã giảm giá</th>
                                                        <th scope="col" className="px-6 py-4">Tác giả</th>
                                                        <th scope="col" className="px-6 py-4">Số lượng</th>
                                                        <th scope="col" className="px-6 py-4">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data?.product?.map((item: any) => (
                                                        <tr className="border-b dark:border-neutral-500">
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.name}</td>
                                                            <td className="whitespace-nowrap px-6 py-4"> <img src={item?.image[0]?.url} alt='' /></td>
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.price}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.categoryId.cateName}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.discount}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.author}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{item?.maxQuantity}</td>
                                                     
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                              
                                                                    <button
                                                                        type="button"
                                                                        className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                                                                        onClick={() => onHandleDelete(item._id)}>
                                                                        Xóa
                                                                    </button>
                                                              
        
                                                                    <button
                                                                        type="button"
                                                                        className="inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                                                                        <Link to={'/admin/updateproduct/' + item._id}>Cập nhật</Link>
                                                                    </button>
                                                                
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProductAdmin;
