import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search } from '../Sections/Search';

export const Header = () => {
  const [light, setLight] = useState(
    JSON.parse(localStorage.getItem('light')) || false
  );
  const [search, setSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem('light', JSON.stringify(light));
    light
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  }, [light]);

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
            <span onClick={() => setLight(!light)}>
              {light ? (
                <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi bi-moon"></span>
              ) : (
                <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi bi-moon-fill"></span>
              )}
            </span>
            <span
              onClick={() => setSearch(!search)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
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
      {search && <Search setSearch={setSearch} search={search} />}
    </header>
  );
};
