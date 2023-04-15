import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex item-center">
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide"></span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/products" className="text-gray-700 dark:text-white mr-5">
              <span className="relative cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person"></span>
          </div>
        </div>
      </nav>
      {/* <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <NavLink to="/" className={isNavlinkActive} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={isNavlinkActive}>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={isNavlinkActive}>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={isNavlinkActive}>
                  Features
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
};
