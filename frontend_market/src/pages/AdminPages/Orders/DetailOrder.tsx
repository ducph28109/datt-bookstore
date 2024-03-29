import { useState, useEffect } from 'react';
import { IOrderFull } from '../../../interfaces/oder';
import { Col, Row, message } from 'antd';
import { getDetailOrder } from '../../../api/order';
import { ORDER_OF_STATUS } from '../../../constants/orderStatus';
import ButtonCheck from './components/ButtonCheck';
import { useUpdateOrderMutation } from '../../../services/order.service';

type Props = {
   idOrder: string;
};

const DetailOrder = ({ idOrder }: Props) => {
   const [order, setOrder] = useState<IOrderFull>();
   const [statusOrder, setStatusOrder] = useState<string>();
   const [handleUpdateOrder, { isLoading }] = useUpdateOrderMutation();
   useEffect(() => {
      (async () => {
         try {
            const { data } = await getDetailOrder(idOrder);
            setOrder(data.body.data);
            setStatusOrder(data.body.data.status);
         } catch (error) {
            message.error('Lỗi hệ thống!');
         }
      })();
   }, [idOrder]);
   const handleChangeStatus = async (value: string): Promise<void> => {
      if (!order || isLoading) return;
      if (
         ORDER_OF_STATUS.indexOf(ORDER_OF_STATUS.find((status) => status.status.toLowerCase() === statusOrder)!) !==
         ORDER_OF_STATUS.indexOf(ORDER_OF_STATUS.find((status) => status.status.toLowerCase() === value)!) - 1
      ) {
         message.warning('Cần thay đổi trạng thái theo thứ tự');
         return Promise.reject();
      }
      try {
         await handleUpdateOrder({
            idOrder,
            customerName: order.customerName!,
            email: order.email!,
            note: order.note!,
            paymentMethod: order.paymentMethod!,
            userId: order.userId!,
            shippingAddress: order.shippingAddress!,
            products: order.products!,
            phoneNumber: order.phoneNumber!,
            totalPayment: order.totalPayment!,
            status: value.toLowerCase()
         });
      } catch (error) {
         message.error('Lỗi hệ thống !');
         return Promise.reject();
      }
      const newStatus = value;
      setStatusOrder(newStatus);
   };
   return (
      <div className='p-3 max-h-[600px] overflow-auto'>
         <div className='flex justify-start items-end gap-2'>
            <h2 className='text-xl'>{order?.customerName}</h2>
            <span className='text-greenP500'>(#) {order?.invoiceId}</span>
         </div>
         <div className='flex justify-start items-center gap-[100px]'>
            <div className='flex flex-col items-start gap-[5px] mt-5'>
               <span className='text-sm font-semibold text-greenP500'>EMAIL</span>
               <span className='text-sm'>{order?.email}</span>
            </div>
            <div className='flex flex-col items-start gap-[5px] mt-5'>
               <span className='text-sm font-semibold text-greenP500'>SỐ ĐIỆN THOẠI</span>
               <span className='text-sm'>{order?.phoneNumber}</span>
            </div>
            <div className='flex flex-col items-start gap-[5px] mt-5'>
               <span className='text-sm font-semibold text-greenP500'>ĐỊA CHỈ</span>
               <span className='text-sm max-w-[200px] text-wrap'>{order?.shippingAddress}</span>
            </div>
         </div>
         <Row className='py-3 border-t-[1px] border-[rgba(0,0,0,0.1)] mt-10 '>
            <Col span={6}>
               <span className='text-sm font-semibold text-greenP500'>SẢN PHẨM</span>
            </Col>
            <Col span={6}>
               <span className='text-sm font-semibold text-greenP500'>ĐƠN GIÁ</span>
            </Col>
            <Col span={6}>
               <span className='text-sm font-semibold text-greenP500'>SỐ LƯỢNG</span>
            </Col>
            <Col span={6}>
               {' '}
               <span className='text-sm font-semibold text-greenP500'>THÀNH TIỀN</span>
            </Col>
         </Row>
         {order?.products.map((product) => (
            <Row key={product._id}>
               <Col span={6}>
                  <span className='font-semibold'>{product.name}</span>
               </Col>
               <Col span={6}>
                  <span className='font-semibold'>{product.price}(vnd)</span>
               </Col>
               <Col span={6}>
                  {' '}
                  <span className='font-semibold'>{product.quantity}</span>
               </Col>
               <Col span={6}>
                  {' '}
                  <span className='font-semibold'>{Number(product.quantity) * product.price}(vnd)</span>
               </Col>
            </Row>
         ))}
         <div className='flex flex-col items-start gap-[5px] mt-5'>
            <span className='text-sm font-semibold text-greenP500'>GHI CHÚ</span>
            <span className='text-sm max-w-[200px] text-wrap'>{order?.note}</span>
         </div>
         <Row className='py-3 border-t-[1px] border-[rgba(0,0,0,0.1)] mt-10' align={'middle'}>
            <Col span={4}>
               <span className='text-sm  text-greenP800 font-bold'>TỔNG TIỀN:</span>
            </Col>
            <Col span={4}>
               <span className='text-lg  text-greenP800 font-bold'>{order?.totalPayment} (vnd)</span>
            </Col>
         </Row>
         <Row className='py-3 border-t-[1px] border-[rgba(0,0,0,0.1)] mt-5' align={'middle'}>
            {ORDER_OF_STATUS.map((status, index) => (
               <Col span={6} key={index}>
                  <ButtonCheck
                     colorPrimary={status.color}
                     value={status.status}
                     disable={
                        ORDER_OF_STATUS.indexOf(
                           ORDER_OF_STATUS.find((status) => status.status.toLowerCase() === statusOrder)!
                        ) >= index
                     }
                     onClick={(value) => handleChangeStatus(value)}
                  />
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default DetailOrder;
