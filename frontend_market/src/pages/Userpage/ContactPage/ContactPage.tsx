import React from 'react'
import { Helmet } from 'react-helmet';
import { Button, Checkbox, Form, Input, Space } from 'antd';


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    email?: string;
    remember?: string;
    subject?: string;
    message?: string;
};



const ContactPage = () => {
    return (
        <div>

            <div className="total text-center mb-24">
                <Helmet>
                    <title>Liên hệ</title>
                </Helmet>

                <div>
                    <div className="ggmap relative w-full h-450">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.80507435839!2d105.73617257509336!3d21.040484080611815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550ab1db2433%3A0x9febb50e17509deb!2zMTMgUC4gVHLhu4tuaCBWxINuIELDtCwgWHXDom4gUGjGsMahbmcsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1695110737502!5m2!1sen!2s" width="100%" height="450" loading="lazy">
                        </iframe>
                        <div className="address flex justify-between w-[60%] m-auto shadow-2xl p-7 absolute top-[85%] left-[20%] bg-white">
                            <div className='flex flex-row space-x-4 items-center'>
                                <div className="icon">
                                    <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-map-marker-alt"></i></div>
                                </div>
                                <div className="letter">
                                    <p className='ont-medium font-serif text-sm text-left'>13 P.Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
                                    <p className='ont-medium font-serif text-sm text-left'>700000 Việt Nam</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"><i className="fas fa-globe"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-sm text-left'>www.bookstore.com</p>
                                        <p className='ont-medium font-serif text-sm text-left'>bookstore@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-phone"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium  text-sm text-left font-sans'>Hotlite: (+84) 0342556789</p>
                                        <p className='ont-medium  text-sm text-left font-sans'>Fax: (+84) 0342556789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="form ">
                    <div className="text">
                        <p className='font-medium text-4xl font-serif text-[#F2D338] mt-32'>CONTACT US</p>
                        <p className='font-serif text-xl mt-3'>Leave A Message</p>

                    </div>

                    <div className="mt-16">
                        <Form
                            name="basic"
                            className='max-w-[400px] m-auto'
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <div className='flex w-full justify-between'>


                                <Form.Item<FieldType>
                                    name="name"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                                >
                                    <Input placeholder='Name*' className='w-full font-medium ' />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                                >
                                    <Input placeholder='Email*' className='w-full font-medium' />
                                </Form.Item>

                            </div>

                            <Form.Item<FieldType>
                                name="subject"
                                rules={[{ required: true, message: 'Vui lòng nhập subject!' }]}
                            >
                                <Input placeholder='Subject*' className='w-full font-medium' />
                            </Form.Item>

                            <Form.Item<FieldType>
                                name="message"
                                rules={[{ required: true, message: 'Vui lòng nhập message!' }]}
                            >
                                <Input placeholder='Your message*' className='h-28 w-full font-medium' />
                            </Form.Item>


                            <Form.Item>
                                <Button style={{ background: "#F2D338 ", color: "white", width: "35%" }} type="text" htmlType="submit">
                                    SEND MESSAGE
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactPage


