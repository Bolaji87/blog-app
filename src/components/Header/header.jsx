import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.51118 27.9827C0.784657 25.2939 -0.494465 21.2046 0.274295 17.4463C1.03478 13.2255 4.31305 9.54626 8.45295 8.38668C10.4797 10.4428 12.5322 12.4714 14.5681 14.5165C14.9874 14.9211 15.3718 15.3616 15.8242 15.7304C14.3814 15.7451 12.9359 15.6917 11.4949 15.7478C9.50402 15.8738 7.81753 17.7516 7.9288 19.748C7.91041 21.7627 9.71736 23.5835 11.7331 23.5715C15.6982 23.5807 19.6625 23.5706 23.6259 23.578C26.231 26.1859 28.8315 28.7993 31.4505 31.3943C31.0459 31.4716 30.6348 31.4504 30.2265 31.4467C24.1123 31.4477 17.9999 31.4467 11.8875 31.4477C8.78768 31.4559 5.69056 30.198 3.51118 27.9827Z"
            fill="#7C4EE4"
          />
          <path
            d="M7.72439 7.69208C5.14683 5.132 2.60882 2.52962 -1.00827e-06 -0.00012207C6.10227 0.0237863 12.2036 0.00355476 18.3059 0.0109111C19.3303 0.024705 20.3648 -0.0470189 21.3772 0.145171C23.9723 0.502883 26.4303 1.77281 28.2262 3.67816C30.2226 5.74811 31.3904 8.57855 31.4815 11.4494C31.5495 13.8155 30.8801 16.1999 29.5991 18.1899C28.0919 20.5045 25.7627 22.3344 23.083 23.0664C21.0821 21.0332 19.0498 19.0285 17.036 17.0064C16.6304 16.6303 16.2902 16.1797 15.8249 15.8689C15.904 15.8036 15.9895 15.7484 16.0833 15.7043C17.3624 15.731 18.6443 15.7273 19.9243 15.7107C21.9106 15.6556 23.6541 13.8403 23.6146 11.8513C23.6725 10.2356 22.5791 8.68338 21.072 8.12888C20.4972 7.88059 19.8627 7.87692 19.2475 7.88243C15.5343 7.88611 11.822 7.88151 8.10969 7.88519C7.95428 7.88611 7.82554 7.82174 7.72439 7.69208Z"
            fill="#7C4EE4"
          />
        </svg>

        <svg
          width="69"
          height="19"
          viewBox="0 0 69 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0172873 15.2331L8.77566 4.51498H0.356009V1.03098H13.542V4.0069L5.19489 14.725H13.6387V18.209H0.0172873V15.2331ZM14.8991 14.4105C14.8991 13.5718 15.133 12.8379 15.6008 12.2088C16.0685 11.5797 16.7137 11.0878 17.5363 10.7329C18.3589 10.362 19.3025 10.1765 20.3671 10.1765C20.8832 10.1765 21.3913 10.2249 21.8913 10.3216C22.3913 10.4023 22.8268 10.5233 23.1978 10.6846V10.1281C23.1978 9.43451 22.9881 8.90223 22.5687 8.53125C22.1494 8.16027 21.5123 7.97478 20.6574 7.97478C19.9477 7.97478 19.2783 8.09575 18.6493 8.33769C18.0363 8.57964 17.3831 8.92643 16.6895 9.37805L15.5282 6.91023C16.3669 6.36182 17.2379 5.95051 18.1412 5.67631C19.0606 5.40211 20.0283 5.265 21.0445 5.265C22.9478 5.265 24.4237 5.7247 25.4721 6.64409C26.5366 7.54734 27.0689 8.86191 27.0689 10.5878V13.9024C27.0689 14.2895 27.1254 14.5637 27.2383 14.725C27.3673 14.8702 27.5851 14.9589 27.8915 14.9912V18.209C27.5689 18.2735 27.2625 18.3219 26.9721 18.3542C26.6979 18.3864 26.456 18.4026 26.2463 18.4026C25.5205 18.4026 24.964 18.2574 24.5769 17.9671C24.2059 17.6767 23.972 17.2816 23.8752 16.7815L23.8027 16.2251C23.2381 16.9509 22.5607 17.5074 21.7703 17.8945C20.9961 18.2655 20.1816 18.451 19.3267 18.451C18.488 18.451 17.7299 18.2735 17.0524 17.9187C16.3911 17.5638 15.8669 17.0799 15.4798 16.467C15.0927 15.8541 14.8991 15.1686 14.8991 14.4105ZM22.5929 14.8944C22.7704 14.7492 22.9155 14.5879 23.0284 14.4105C23.1413 14.2331 23.1978 14.0637 23.1978 13.9024V12.7653C22.8752 12.6362 22.5123 12.5395 22.1091 12.4749C21.7219 12.3943 21.359 12.354 21.0203 12.354C20.3106 12.354 19.7219 12.5153 19.2541 12.8379C18.7864 13.1443 18.5525 13.5556 18.5525 14.0718C18.5525 14.3621 18.6331 14.6282 18.7944 14.8702C18.9557 15.1121 19.1735 15.3057 19.4477 15.4509C19.738 15.596 20.0767 15.6686 20.4638 15.6686C20.8509 15.6686 21.2381 15.596 21.6252 15.4509C22.0123 15.3057 22.3349 15.1202 22.5929 14.8944ZM37.9307 8.82158C36.9952 8.82158 36.1484 8.97481 35.3903 9.28128C34.6322 9.57161 34.0838 10.0071 33.7451 10.5878V18.209H29.8739V5.50695H33.4305V8.07156C33.866 7.21669 34.4306 6.54731 35.1241 6.06342C35.8177 5.57953 36.5435 5.32952 37.3016 5.31339C37.4791 5.31339 37.6081 5.31339 37.6887 5.31339C37.7855 5.31339 37.8662 5.32146 37.9307 5.33759V8.82158ZM47.6179 8.82158C46.6824 8.82158 45.8356 8.97481 45.0775 9.28128C44.3194 9.57161 43.771 10.0071 43.4323 10.5878V18.209H39.5612V5.50695H43.1177V8.07156C43.5532 7.21669 44.1178 6.54731 44.8113 6.06342C45.5049 5.57953 46.2308 5.32952 46.9888 5.31339C47.1663 5.31339 47.2953 5.31339 47.376 5.31339C47.4727 5.31339 47.5534 5.32146 47.6179 5.33759V8.82158ZM49.2484 18.209V5.50695H53.1195V18.209H49.2484ZM49.2484 4.05528V0.547095H53.1195V4.05528H49.2484ZM68.0119 18.209H64.1408V11.0717C64.1408 10.2329 63.9795 9.62806 63.6569 9.25708C63.3504 8.86997 62.9391 8.67642 62.423 8.67642C62.0681 8.67642 61.7052 8.77319 61.3342 8.96675C60.9633 9.16031 60.6245 9.42644 60.3181 9.76517C60.0277 10.1039 59.8019 10.491 59.6406 10.9265V18.209H55.7695V5.50695H59.2535V7.63606C59.5761 7.13604 59.9794 6.7086 60.4632 6.35375C60.9471 5.9989 61.5036 5.73276 62.1327 5.55534C62.7617 5.36178 63.4472 5.265 64.1892 5.265C65.0118 5.265 65.6731 5.41824 66.1731 5.7247C66.6893 6.01503 67.0764 6.40214 67.3345 6.88603C67.6087 7.36992 67.7861 7.89413 67.8667 8.45867C67.9635 9.00707 68.0119 9.54742 68.0119 10.0797V18.209Z"
            fill="#333333"
          />
        </svg>
      </div>
      <nav className="header-nav-links">
        <ul>
          <li className="blog">
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.394 2.39129C15.2142 5.06735 15.3887 9.50315 12.7875 12.3925L16.0223 15.6166C16.1648 15.7642 16.1628 15.9987 16.0177 16.1437C15.8727 16.2887 15.6382 16.2908 15.4907 16.1483L12.2559 12.9242C9.36646 15.5254 4.93066 15.3508 2.2546 12.5306C-0.421465 9.71043 -0.363268 5.27158 2.38581 2.5225C5.13489 -0.22658 9.57375 -0.284776 12.394 2.39129ZM1.09264 7.62212C1.09264 11.1522 3.95433 14.0139 7.48439 14.0139C11.0127 14.0097 13.872 11.1505 13.8761 7.62212C13.8761 4.09205 11.0145 1.23036 7.48439 1.23036C3.95433 1.23036 1.09264 4.09205 1.09264 7.62212Z"
                  fill="#333333"
                />
              </svg>
            </a>
          </li>
          <li className="contact">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
