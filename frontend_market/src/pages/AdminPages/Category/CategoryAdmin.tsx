import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useGetAllCateQuery, useRemoveCateMutation } from '../../../services/cate.service';


const CategoryAdmin = () => {
    const { data } = useGetAllCateQuery();
    const [removeCategory] = useRemoveCateMutation();
    const onHandleDelete = (id: any) => {
        removeCategory(id);
    };

    return (
        <>

            <Layout style={{ minHeight: '100vh', display: 'flex', position: 'relative', width: '100%' }}>
                <div className='flex-1 flex justify-center items-center flex-col mt-10 w-[100%]'>
                    <div className='flex justify-between items-center w-[90%]'>
                        <h1 className='text-3xl font-semibold text-[rgba(0,0,0,0.7)]'>Danh mục</h1>
                        <Link to='/admin/addcategory'>
                            <button className='bg-green-500 duration-100 hover:bg-greenPri600 text-white text-lg p-2 font-semibold rounded-lg flex justify-start items-center gap-2'>
                                <PlusCircleOutlined style={{ color: 'white' }} />
                                Danh mục mới
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
                                    placeholder='Tìm kiếm danh mục'
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
                                                        <th scope="col" className="px-6 py-4">#</th>
                                                        <th scope="col" className="px-6 py-4">Tên danh mục</th>
                                                        <th scope="col" className="px-6 py-4">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data?.data?.map((cate: any, index) => (
                                                        <tr className="border-b dark:border-neutral-500">
                                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{cate?.cateName}</td>

                                                            <td className="whitespace-nowrap px-6 py-4">
                                                              
                                                                    <button
                                                                        type="button"
                                                                        className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                                                                        onClick={() => onHandleDelete(cate._id)}>
                                                                        Xóa
                                                                    </button>
                                                              
        
                                                                    <button
                                                                        type="button"
                                                                        className="inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                                                                        <Link to={'/admin/updatecategory/' + cate._id}>Cập nhật</Link>
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

export default CategoryAdmin;
