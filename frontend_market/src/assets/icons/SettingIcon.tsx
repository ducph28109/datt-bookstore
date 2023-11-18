export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const SettingIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         fill='none'
         stroke='currentColor'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
         viewBox='0 0 64 64'
         className={className}
      >
         <g>
            <path
               d='M56.846 24.905h-3.204a22.36 22.36 0 0 0-1.317-3.183l2.252-2.252a4.146 4.146 0 0 0 0-5.893L50.41 9.41c-.779-.779-1.82-1.208-2.933-1.208s-2.154.429-2.937 1.211l-2.254 2.278a21.022 21.022 0 0 0-3.178-1.326V7.168c0-2.263-1.912-4.175-4.175-4.175h-5.896c-2.286 0-4.146 1.873-4.146 4.175v3.196a20.722 20.722 0 0 0-3.181 1.323l-2.263-2.286c-1.582-1.547-4.287-1.555-5.885.008l-4.175 4.175c-1.61 1.647-1.61 4.229.012 5.888l2.276 2.252a22.231 22.231 0 0 0-1.316 3.18H7.154a4.15 4.15 0 0 0-4.146 4.146v5.896a4.15 4.15 0 0 0 4.146 4.146h3.202c.363 1.119.8 2.178 1.322 3.206l-2.283 2.259c-.778.778-1.207 1.819-1.207 2.933s.429 2.154 1.207 2.933l4.175 4.174c1.582 1.547 4.286 1.555 5.884-.008l2.259-2.259c1.039.522 2.103.965 3.177 1.322v3.206a4.15 4.15 0 0 0 4.146 4.146h5.896c2.302 0 4.175-1.86 4.175-4.146v-3.206a24.428 24.428 0 0 0 3.174-1.325l2.262 2.262a4.116 4.116 0 0 0 2.933 1.207 4.123 4.123 0 0 0 2.933-1.207l4.157-4.157c.799-.779 1.238-1.824 1.238-2.941s-.439-2.162-1.229-2.933l-2.255-2.255a22.19 22.19 0 0 0 1.323-3.21h3.201a4.15 4.15 0 0 0 4.146-4.146v-5.896a4.148 4.148 0 0 0-4.144-4.146zm2.146 10.042a2.148 2.148 0 0 1-2.146 2.146h-3.939a1 1 0 0 0-.96.721 20.365 20.365 0 0 1-1.73 4.191.998.998 0 0 0 .169 1.189l2.786 2.786c.409.399.635.936.635 1.51s-.226 1.11-.644 1.519l-4.166 4.166c-.802.802-2.237.8-3.037 0l-2.777-2.777a1.002 1.002 0 0 0-1.175-.177c-1.443.765-2.811 1.334-4.182 1.739a1 1 0 0 0-.716.959v3.939c0 1.163-.996 2.146-2.175 2.146h-5.896a2.148 2.148 0 0 1-2.146-2.146V52.92c0-.443-.292-.833-.716-.959a21.767 21.767 0 0 1-4.173-1.735.998.998 0 0 0-1.184.173l-2.77 2.77c-.831.811-2.258.803-3.073.008L10.81 49.01c-.823-.823-.823-2.214-.003-3.033l2.807-2.777a.999.999 0 0 0 .172-1.193 20.269 20.269 0 0 1-1.729-4.191 1 1 0 0 0-.96-.721h-3.94a2.148 2.148 0 0 1-2.146-2.146v-5.896c0-1.184.963-2.146 2.146-2.146h3.94c.443 0 .833-.292.959-.716.451-1.525 1.032-2.924 1.727-4.159a1 1 0 0 0-.168-1.201l-2.795-2.766a2.189 2.189 0 0 1-.008-3.073l4.159-4.159c.83-.812 2.261-.8 3.069-.011l2.778 2.806a.997.997 0 0 0 1.201.168 18.639 18.639 0 0 1 4.142-1.722 1 1 0 0 0 .733-.963v-3.94c0-1.179.983-2.175 2.146-2.175h5.896c1.179 0 2.175.996 2.175 2.175v3.94a1 1 0 0 0 .732.963c1.378.382 2.735.947 4.15 1.727a1 1 0 0 0 1.193-.172l2.773-2.803c.8-.801 2.233-.803 3.037 0l4.166 4.167c.415.414.644.958.644 1.532s-.229 1.118-.644 1.532l-2.777 2.778a.993.993 0 0 0-.164 1.195c.692 1.231 1.273 2.63 1.727 4.159a1 1 0 0 0 .959.716h3.939c1.184 0 2.146.963 2.146 2.146z'
               fill='#000000'
               data-original='#000000'
            ></path>
            <path
               d='M31.986 23.999c-4.412 0-8.002 3.589-8.002 8.001s3.59 8.002 8.002 8.002 8.001-3.59 8.001-8.002-3.589-8.001-8.001-8.001zm0 14.003A6.008 6.008 0 0 1 25.984 32a6.008 6.008 0 0 1 6.002-6.001A6.008 6.008 0 0 1 37.987 32a6.008 6.008 0 0 1-6.001 6.002z'
               fill='#000000'
               data-original='#000000'
            ></path>
         </g>
      </svg>
   );
};

export default SettingIcon;