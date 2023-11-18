export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const BillIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         fill='currentColor'
         stroke='currentColor'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
         viewBox='0 0 468.032 468.032'
         className={className}
      >
         <g>
            <path d='M430.006 384.005H123.644c-3.767 0-5.381-4.949-2.431-7.223l42.647-32.777h243.676c17.325 0 31.694-14.241 32.03-31.539l2.731-140.536c.312-16.021-11.42-29.932-27.289-32.304-7.634-1.142-14.783 4.107-15.927 11.752s4.131 14.759 11.783 15.903c1.989.297 3.459 2.025 3.42 4.027l-2.731 140.614c-.042 2.162-1.844 4.084-4.016 4.084H170.225L126.017 124.87l22.438 3.271c7.65 1.14 14.783-4.169 15.928-11.814 1.144-7.645-4.131-14.79-11.784-15.934L118.99 95.36l-12.848-49.943c-1.589-6.191-7.173-10.412-13.57-10.412H38.025c-7.737 0-14.01 6.27-14.01 14s6.272 14 14.01 14h43.677l61.707 261.119-39.309 30.283c-23.715 18.273-10.377 57.598 19.543 57.598h36.778c-1.628 4-2.522 9.1-2.522 14.107 0 23.158 18.975 41.92 42.299 41.92s42.299-18.723 42.299-41.881c0-5.007-.894-10.146-2.522-14.146h76.515c-1.628 4-2.522 9.1-2.522 14.107 0 23.158 18.975 41.92 42.299 41.92s42.3-18.723 42.3-41.881c0-5.007-.894-10.146-2.522-14.146h33.963c7.738 0 14.01-6.27 14.01-14s-6.274-14-14.012-14zM200.198 439.96c-7.874 0-14.279-6.282-14.279-14.004s6.406-14.004 14.279-14.004c7.874 0 14.28 6.282 14.28 14.004s-6.406 14.004-14.28 14.004zm156.068 0c-7.874 0-14.279-6.282-14.279-14.004s6.406-14.004 14.279-14.004c7.875 0 14.28 6.282 14.28 14.004s-6.406 14.004-14.28 14.004z'></path>
            <path d='M280.228 202.922c-56.106 0-101.752-45.515-101.752-101.461S224.122 0 280.228 0 381.98 45.515 381.98 101.461s-45.646 101.461-101.752 101.461zm0-174.928c-40.656 0-73.732 32.957-73.732 73.467s33.077 73.467 73.732 73.467 73.732-32.957 73.732-73.467-33.076-73.467-73.732-73.467z'></path>
            <path d='m255.411 137.097-22.503-26.705c-4.983-5.913-4.225-14.743 1.694-19.722 5.918-4.979 14.755-4.222 19.74 1.693l12.364 14.673 38.469-40.874c5.3-5.631 14.167-5.904 19.803-.609 5.638 5.295 5.91 14.154.61 19.785l-49.253 52.333c-4.399 4.631-15.657 5.548-20.924-.574z'></path>
         </g>
      </svg>
   );
};

export default BillIcon;
