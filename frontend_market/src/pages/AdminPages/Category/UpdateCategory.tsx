import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetAllCateByIdQuery, useUpdateCateMutation } from '../../../services/cate.service';
import { message } from 'antd';

const UpdateCategory = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
     } = useForm();
     const [update] = useUpdateCateMutation();
     const navigate = useNavigate();
     const { id } = useParams();
     const { data } = useGetAllCateByIdQuery(id);
     // console.log(data);
  
     useEffect(() => {
        reset({
           cateName: data?.data?.cateName
        });
     }, [data]);
     const onHandleSubmit = (item: any) => {
        update({ id, item });
        message.success('Category updated successfully');
        navigate('/admin/categoryadmin');
     };
    return (
        
        <div>
  <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên danh mục</label>
                    <input 
                        {...register('cateName', { required: true, minLength: 3 })}
                        type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                       {errors.name && <span>This field is required</span>}
                </div>
               
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>
            </form>
        </div>
    )
}

export default UpdateCategory