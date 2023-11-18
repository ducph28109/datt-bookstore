import React, { useState, useEffect, useRef } from 'react';
import {
   PieChartOutlined,
   UserOutlined,
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, message, theme } from 'antd';
import { Outlet } from 'react-router';
import ProductIcon from '../components/Icons/ProductIcon';
import { Link } from 'react-router-dom';
import OrderIcon from '../components/Icons/OrderIcon';
import HeaderAdmin from '../components/layout/Header/HeaderAdmin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveTokenAndUser } from '../slices/authSlice';
import { useGetTokenQuery } from '../services/auth.service';


const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
   return {
      key,
      icon,
      children,
      label
   } as MenuItem;
}

const items: MenuItem[] = [
   getItem(<Link to='/admin/dashboard'>Trang chủ</Link>, '1', <PieChartOutlined />),
   getItem('Sản phẩm cửa hàng', '2', <ProductIcon />, [
      getItem(<Link to='/admin/productadmin'>Sản phẩm</Link>, '3'),
      getItem(<Link to='/admin/categoryadmin'>Danh mục</Link>, '4'),
   ]),
   getItem(<Link to='/manage/orders'>Đơn hàng</Link>, 'sub1', <OrderIcon />),
   getItem(<Link to='/manage/accounts'>Tài khoản</Link>, 'sub3', <UserOutlined />),
];

const AdminLayout = () => {
   const [collapsed, setCollapsed] = useState(false);
   const [open, setOpen] = useState(false);
   const { data, isLoading } = useGetTokenQuery();
console.log(data);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const audioPlayer = useRef(null);

  
   const ButtonTrigger = (
      <button className='bg-greenPrimary text-white w-full font-semibold'>{collapsed ? 'Hiện' : 'Ẩn'}</button>
   );
   const {
      token: { colorBgContainer }
   } = theme.useToken();
   useEffect(() => {
      if (data?.body.data && data?.body.data.accessToken?.length >= 0) {
         dispatch(saveTokenAndUser({ accessToken: data?.body.data.accessToken, user: data?.body.data.data }));
         if (Object.keys(data?.body.data.data)?.length == 0 || data?.body.data?.data.role != 'admin') {
            console.log(data?.body.data?.data.role, 222);
            if (window.location.pathname.match('admin')) {
               message.warning('Bạn không có quyền để thực hiện hành động này');
               navigate('/');
            }
         }
      } else {
      }
   }, [data]);
  

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider
            width={250}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{ background: colorBgContainer, position: 'fixed' }}
            className={
               ' z-[999] transition-all ' +
               (open ? '-translate-x-0' : '-translate-x-full') +
               ' md:-translate-x-0 h-screen'
            }
            trigger={ButtonTrigger}
         >
            <div className='max-h-[150px] flex justify-center items-center'>
               <Link to={'/'}>
               <img src='http://wp.acmeedesign.com/bookstore/wp-content/uploads/2016/01/logo_green.png' alt='logo' className='object-cover' />
               </Link>
            </div>
            <Menu theme='light' defaultSelectedKeys={['1']} mode='inline' items={items} />
            <Button
               className='bg-[rgb(0,0,0,0.5)] absolute right-[-30px] top-[70px] z-[999] md:hidden md:opacity-0 md:invisible'
               onClick={() => setOpen((prev) => !prev)}
               icon={open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
               style={{ color: 'white' }}
            ></Button>
         </Sider>
         {open ? (
            <div
               onClick={() => setOpen(false)}
               className='fixed top-0 right-0 z-[101] w-screen h-full bg-[rgba(0,0,0,0.1)] md:hidden md:opacity-0 md:invisible'
            ></div>
         ) : (
            ''
         )}
         <Layout className={'transition-all ' + (!collapsed ? 'md:pl-[250px]' : 'md:pl-[80px] ')}>
            <HeaderAdmin />
            <Content className=' w-full px-6  pt-[50px] pb-[50px] flex justify-center '>
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};

export default AdminLayout;
