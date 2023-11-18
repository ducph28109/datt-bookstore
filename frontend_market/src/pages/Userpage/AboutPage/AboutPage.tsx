import React from 'react'
import { Helmet } from 'react-helmet';
import Banner from '../Homepage/component/Banner';

const AboutPage = () => {
    return (

        <div className="text-center">

            <Helmet>
                <title>Giới thiệu</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>


            <div className="head">

                <div className=" text-[#F2D338] text-[25px] font-medium bottom-20 mt-10" >
                    <h2>Chào mừng đến với Book Store</h2>
                </div>

                <div className="text-[30px]  font-bold bottom-20 mt-3" >
                    <p>MỘT CÂU CHUYỆN NHỎ VỀ CHÚNG TÔI</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center  text-[#F2D338]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~~~~~</div>
                </div>



                <div className="flex mt-10 italic justify-center">

                    <div className="flex-initial w-[36%] mr-7">
                        <img src="https://americastarbooks.com/wp-content/uploads/2018/10/loi-ich-cua-viec-doc-sach-2.jpg" alt="" />
                    </div>
                    {/* https://chuyentrang.viendinhduong.vn/FileUpload/Images/an_rau_va_trai_cay_hang_ngay.jpg */}
                    <div className="flex-initial w-[36%] text-left">
                        <div className="flex items justify text-[26px] bottom-15 " >
                            <p>Lợi ích của việc đọc sách</p>
                        </div>
                        Nâng cao kiến thức, cải thiện sự tập trung và tăng cường kỹ năng tư duy, phân tích và vốn từ ngữ được mở rộng thông qua việc đọc sách.<br /> <br />
                        Sách chính là nguồn tri thức vô tận về mọi lĩnh vực trong cuộc sống của những người đi trước viết ra kể lại và truyền đạt cho chúng ta. <br />
                        Giúp chúng ta nâng cao vốn từ, phát triển khả năng ngôn ngữ. Trong quá trình đọc sách,sẽ dần hình thành lối hành văn cũng như cách sử dụng từ ngữ riêng biệt cho mình, khi giao tiếp cũng như viết lách, học tập sau này.
                        <div className="flex justify-center ... mt-3 ">
                            <div ><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://cafeandbooks.files.wordpress.com/2015/07/dscn4570.jpg" alt="" /></div>
                            <div ><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://giasuhanoigioi.edu.vn/wp-content/uploads/nhung-dieu-quan-trong-phu-huynh-can-phai-chuan-bi-khi-vao-nam-hoc-moi0.jpg" alt="" /></div>
                            <div><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-21aXs-EF3Ks3FXXPXILl2YAweITDZGJOQZn-eIebPBk-RJM2gOLyZCMzMMpVNYz-24&usqp=CAU" alt="" /></div>
                            <div><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOHGzR8SeiC_SOjWLuA_p0sUrfpl-cOZXnRgP_P8XHLqnwNVBec8tiZaPLPTAp_u13AA&usqp=CAU" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="between   bg-[#f8f7f7] mt-20 pt-16 pb-16">


                <div className="font-serif   text-[30px] font-bold bottom-20" >
                    <p>TẠI SAO CHỌN CHÚNG TÔI ?</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center  text-[#F2D338]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~</div>
                </div>

                <div className="wrap  mt-10 ">

                    <div className=" grid grid-cols-3 items-center w-[1000px] m-auto">


                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1  space-y-5  ">
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Chất lượng</p>
                                        <p className='text-right text-sm italic'>Đảm bảo chất lượng sách về nguyên liệu sản xuất giấy.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Sách chính hãng</p>
                                        <p className='text-right text-sm italic'>Cung cấp đầy đủ giấy tờ pháp lý do bộ giáo dục cấp phép.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Xuất xứ</p>
                                        <p className='text-right text-sm italic'>Nguồn gốc xuất xứ rõ ràng, đáng tin cậy cho người tiêu dùng.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <img className='w-[300px] h-[270px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_Le1MtUgYuxz7pSQ0jrKMmH-d8IDaJCvoe8v09VPPUY0PQVo0jCC2UHq_fCfvXHmEgs&usqp=CAU" alt="" />
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1  space-y-5">
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Kiểm định</p>
                                        <p className='text-left text-sm italic'>Được các cơ quan chức năng có thẩm quyền kiểm định về chất lượng.</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Không hàng nhái</p>
                                        <p className='text-left text-sm italic'>Nói không với sách nhái sách lậu rẻ tiền trên thị trường.</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#F2D338] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Mới nhất</p>
                                        <p className='text-left text-sm italic'>Đảm bảo những nguồn hàng mới nhất trên thị trường.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="last mt-16">

                <div className=" text-[#F2D338] text-[25px] font-medium bottom-20 mt-10" >
                    <h2>Tri thức là sức mạnh</h2>
                </div>

                <div className="text-[30px] font-bold bottom-20 mt-3" >
                    <p>Những tác giả nổi tiếng trên thế giới</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center text-[#F2D338]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~</div>
                </div>


                <div className="people mt-12 mb-20">
                    <div className="grid grid-cols-3 w-[1000px] m-auto">
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://media.doanhnghiephoinhap.vn/uploads/2021/02/23/1-1614070992.jpg" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>Greenfarm</p></div>
                                <div><p className='text-sm pt-4'>Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời của những thế kỷ đã trôi qua.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/5/19/photo1621362335192-1621362335617690205981-1621362354793592390523.jpg" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>Greenfarm</p></div>
                                <div><p className='text-sm pt-4'>Sách là của cải quý báu của thế giới và là di sản xứng đáng của các thế hệ và các quốc gia.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhI5t4IIWEFYvSsar9FE3CdiaWQpQ_z3ocZUq1_7EpYEhrjKIvz4I-k9MF9s4v49qpPE&usqp=CAU" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>Rau sạch Ravi</p></div>
                                <div><p className='text-sm pt-4'>Chính từ sách mà những người khôn ngoan tìm được sự an ủi khỏi những rắc rối của cuộc đời.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default AboutPage