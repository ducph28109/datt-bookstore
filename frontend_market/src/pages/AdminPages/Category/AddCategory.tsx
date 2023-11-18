import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddCateMutation } from '../../../services/cate.service';
import { message } from 'antd';

const AddCategory = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
     } = useForm();
     const [add] = useAddCateMutation();
     const navigate = useNavigate();
     const onHandleSubmit = (item: any) => {
        add(item);
        message.success('Add category successfully');
        navigate('/admin/categoryadmin');
     };
    return (
        
        <div>
  <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên danh mục</label>
                    <input 
                       {...register('cateName', { required: true, minLength: 1 })}
                        type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                        {errors.cateName && <span>This field is required</span>}
                </div>
               
                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Thêm mới</button>
            </form>
        </div>
    )
}

export default AddCategory