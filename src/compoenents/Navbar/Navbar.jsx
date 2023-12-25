import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
      <img src="https://s3-alpha-sig.figma.com/img/46bd/67c2/69c0ba8bc2b4b12d7f2bce18ac51b9ae?Expires=1704067200&Signature=SFArizwfg-13ck5A~EA3By4e4QJmzZvDCqs3OPLwa-mnGoVP~RDcNHP6q54vEABLgunh-eHCtFUVcy-NlP736oek~2FoCtv1HCCFb9u8fMea-X4PIsNz660Ufw5a6LC1sl8t1xUMXH4oVNSvNMDrg9NqWoqarwy4Ol62AJg5ZNROqn~yIuE8tuvng34RXHsIyc97d1VTgQq7fKP-W~PhHLhwCj9dnb29e22e3HSpo5J40tFyc6hha3p4yl0iiVy4GSu63YpAWkooxQ1V6w4NPLgm0NJjLzILhTQR1ch6VaugpGqSlgJN7ZXDFYdp1GyCrrDIt3K9QIHcr8NDOXaSQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />


      <div className='p4'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="111" height="46" viewBox="0 0 111 46" fill="none">
            <g filter="url(#filter0_d_621_440)">
              <path d="M26.3592 0H106.346L92.401 25.1297L85.3729 37.1857H18.104C4.18165 35.5574 3.15532 27.948 4.38245 24.3469L13.8648 7.20229C16.0959 2.6304 22.6778 0 26.3592 0Z" fill="#38B000" />
            </g>
            <defs>
              <filter id="filter0_d_621_440" x="0" y="0" width="110.344" height="45.1855" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_621_440" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_621_440" result="shape" />
              </filter>
            </defs>
          </svg>
          <span className='p6'>24</span>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="61" viewBox="0 0 69 61" fill="none">
          <g filter="url(#filter0_d_621_443)">
            <mask id="path-1-inside-1_621_443" fill="white">
              <ellipse cx="34.4947" cy="26.7102" rx="11.7135" ry="8.22" />
            </mask>
            <ellipse cx="34.4947" cy="26.7102" rx="11.7135" ry="8.22" fill="#38B000" />
            <path d="M35.2082 26.7102C35.2082 25.6577 35.527 24.7951 35.8667 24.2315C36.0271 23.9653 36.1794 23.785 36.2832 23.6771C36.3869 23.5694 36.453 23.5226 36.4588 23.5185C36.4608 23.5171 36.2958 23.6287 35.9242 23.739C35.562 23.8465 35.0767 23.9302 34.4947 23.9302V45.9302C39.7154 45.9302 44.9122 44.4629 49.0961 41.5268C53.2472 38.6138 57.2082 33.5423 57.2082 26.7102H35.2082ZM34.4947 23.9302C33.9128 23.9302 33.4275 23.8465 33.0653 23.739C32.6937 23.6287 32.5287 23.5171 32.5307 23.5185C32.5365 23.5226 32.6026 23.5694 32.7063 23.6771C32.8101 23.785 32.9624 23.9653 33.1228 24.2315C33.4625 24.7951 33.7812 25.6577 33.7812 26.7102H11.7812C11.7812 33.5423 15.7423 38.6138 19.8934 41.5268C24.0773 44.4629 29.2741 45.9302 34.4947 45.9302V23.9302ZM33.7812 26.7102C33.7812 27.7627 33.4625 28.6254 33.1228 29.189C32.9624 29.4552 32.8101 29.6355 32.7063 29.7434C32.6026 29.851 32.5365 29.8979 32.5307 29.9019C32.5287 29.9034 32.6937 29.7918 33.0653 29.6815C33.4275 29.574 33.9128 29.4902 34.4947 29.4902V7.49023C29.2741 7.49023 24.0773 8.95758 19.8934 11.8937C15.7423 14.8067 11.7812 19.8782 11.7812 26.7102H33.7812ZM34.4947 29.4902C35.0767 29.4902 35.562 29.574 35.9242 29.6815C36.2958 29.7918 36.4608 29.9034 36.4588 29.9019C36.453 29.8979 36.3869 29.851 36.2832 29.7434C36.1794 29.6355 36.0271 29.4552 35.8667 29.189C35.527 28.6254 35.2082 27.7627 35.2082 26.7102H57.2082C57.2082 19.8782 53.2472 14.8067 49.0961 11.8937C44.9122 8.95758 39.7154 7.49023 34.4947 7.49023V29.4902Z" fill="#38B000" mask="url(#path-1-inside-1_621_443)" />
          </g>
          <defs>
            <filter id="filter0_d_621_443" x="0.78125" y="0.490234" width="67.4297" height="60.4399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="11" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_621_443" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_621_443" result="shape" />
            </filter>
          </defs>
        </svg>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="86" height="46" viewBox="0 0 86 46" fill="none">
            <g filter="url(#filter0_d_621_442)">
              <path d="M68.2126 0H25.4862L4.625 37.3423H58.7302C66.1376 37.3423 70.4437 33.5324 71.6708 31.6274L81.711 13.3086C83.8529 4.03954 73.6045 0.574095 68.2126 0Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_621_442" x="0.625" y="0" width="85.375" height="45.3423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_621_442" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_621_442" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>


        <div className='p5'>
          <span>+91876578984</span>
        </div>

      </div>

      <div className='phones'>
        <div className='p1'>
          <div className='phone1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="36" viewBox="0 0 21 36" fill="none">
              <rect x="0.453125" y="0.401855" width="20.1234" height="35.216" fill="black" />
              <rect x="2.21094" y="1.28223" width="16.7275" height="30.814" fill="white" />
              <ellipse cx="11.0186" cy="33.857" rx="1.76079" ry="1.7608" fill="white" />
              <path d="M9.43352 28.4013C9.82404 28.7918 10.4572 28.7918 10.8477 28.4013L17.2117 22.0373C17.6022 21.6468 17.6022 21.0136 17.2117 20.6231C16.8212 20.2326 16.188 20.2326 15.7975 20.6231L10.1406 26.28L4.48377 20.6231C4.09325 20.2326 3.46008 20.2326 3.06956 20.6231C2.67903 21.0136 2.67903 21.6468 3.06956 22.0373L9.43352 28.4013ZM9.14062 3.04297L9.14063 27.6942H11.1406L11.1406 3.04297H9.14062Z" fill="black" />
            </svg>
          </div>
          Download app
        </div>
        <div className='p2'>
          <div className='phone2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
              <g filter="url(#filter0_d_621_520)">
                <circle cx="42.4225" cy="38.4225" r="20.4225" fill="#38B000" />
              </g>
              <path d="M42.6485 40.0977C42.5523 40.0856 42.4548 40.0856 42.3585 40.0977C41.3338 40.0632 40.3626 39.6317 39.6501 38.8944C38.9376 38.1571 38.5396 37.1718 38.5402 36.1464C38.5402 33.9594 40.3044 32.1831 42.5035 32.1831C43.542 32.1813 44.5396 32.5877 45.2813 33.3146C46.0229 34.0415 46.4492 35.0308 46.4682 36.0691C46.4873 37.1074 46.0975 38.1116 45.383 38.8652C44.6685 39.6188 43.6864 40.0615 42.6485 40.0977ZM50.6477 48.0727C48.4271 50.1137 45.5196 51.2439 42.5035 51.2385C39.3619 51.2385 36.5102 50.0423 34.3594 48.0727C34.4802 46.9369 35.2052 45.8252 36.4981 44.9552C39.809 42.756 45.2223 42.756 48.509 44.9552C49.8019 45.8252 50.5269 46.9369 50.6477 48.0727Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42.4974 51.2389C49.171 51.2389 54.5807 45.8292 54.5807 39.1556C54.5807 32.482 49.171 27.0723 42.4974 27.0723C35.8238 27.0723 30.4141 32.482 30.4141 39.1556C30.4141 45.8292 35.8238 51.2389 42.4974 51.2389Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <filter id="filter0_d_621_520" x="0" y="0" width="84.8438" height="84.8452" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="11" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_621_520" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_621_520" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <span>Hi ravi</span>
        </div>


      </div>
      <div className='p3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
          <path d="M1 7.328H17.8M1 1H17.8M6.6 13.656H17.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Navbar