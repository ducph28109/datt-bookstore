import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Divider, Form, Image, message } from 'antd';
import { useGetAllCateQuery } from '../../../services/cate.service';
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../../services/product.service';
import { uploadImages } from '../../../api/upload';
import UploadButton from '../../../components/UploadButton/UploadButton';
import { InputProduct } from '../../../interfaces/product';


const UpdateProduct = () => {
    const { data: cateData } = useGetAllCateQuery();
    const [form] = Form.useForm();
    const [files, setFiles] = useState<File[]>([]);
    const {
       handleSubmit,
       register,
       reset,
       formState: { errors }
    } = useForm();
    const [update] = useUpdateProductMutation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useGetProductByIdQuery(id);
    console.log(data);
 
    useEffect(() => {
       reset({
          name: data?.product?.name,
          image: data?.product?.image[0]?.url,
          price: data?.product?.price,
          categoryId: data?.product?.categoryId._id,
          discount: data?.product?.discount,
          author: data?.product?.author,
          desc: data?.product?.desc,
          maxQuantity: data?.product?.maxQuantity,
          
       });
    }, [data]);
    const onHandleSubmit = async (item: any) => {
       try {
          const {
             data: { data }
          } = await uploadImages(files);
          const imagesUploaded = data?.map((image) => image.url);
          form.setFieldValue('images', imagesUploaded);
          item.image = data;
       } catch (error) {
          console.log(error);
       }
       await update({ id, item });
       message.success('Product updated successfully');
       navigate('/admin/productadmin');
    };
    const handleGetFiles = (files: File[]) => {
       form.setFieldValue('images', files);
       setFiles(files);
    };
    return (

        <div>
            <h1 className='text-5xl font-semibold pb-10'>Cập nhật sản phẩm</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                    <input  {...register('name', { required: true, minLength: 1 })}
                        type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Ảnh cũ</label>
                  <Image width={200} src={data?.product?.image[0]?.url} />
               </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh</label>
                    <Divider />
                    <Form.Item<InputProduct>
                        className='images'
                        hasFeedback
                        rules={[{ required: true, message: 'Please choose images' }]}
                    >
                        <UploadButton
                            maxCount={3}
                            multiple
                            listStyle='picture-card'
                            getListFiles={handleGetFiles}
                            name='images'
                        />
                    </Form.Item>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá sản phẩm</label>
                    <input {...register('price', { required: true, min: 1 })}
                        type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                    {errors.price && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh mục</label>
                    <select
                     {...register('categoryId', { required: true })}
                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                  >
                     <option value=''>Chon danh muc</option>
                     {cateData?.data?.map((danhMuc: any) => (
                        <option key={danhMuc._id} value={danhMuc._id}>
                           {danhMuc.cateName}
                        </option>
                     ))}
                  </select>
                    {errors.nxb ? <span>This field is required</span> : ''}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã giảm giá</label>
                    <input  {...register('discount', { required: true, min: 0 })}
                        type="number" id="giamgia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                    {errors.discount && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tác giả</label>
                    <input  {...register('author', { required: true, minLength: 1 })}
                        type="text" id="tacgia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                    {errors.author && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                    <input
                       {...register('maxQuantity', { required: true, min: 0 })}
                        type="number" id="soluong" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                   {errors.maxQuantity && <span>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                    <input
                        {...register('desc', {
                            required: true,
                            minLength: 10,
                            maxLength: 999
                        })}
                        {...register('desc', { required: true, minLength: 1 })}
                        type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập" required />
                    {errors.desc && <span>This field is required</span>}
                </div>


                <button className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cập nhật</button>
            </form>


        </div>
    )   
}

export default UpdateProduct    


