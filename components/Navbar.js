import { AiFillFire, AiFillHome } from "react-icons/ai";
import { BiPolygon } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:block">
              <div className="flex space-x-4">
                <div
                  className="bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium flex flex-row items-center"
                  aria-current="page"
                >
                  <Link href="/">
                    <a>
                      <span className="inline-flex pr-2">
                        <AiFillHome />
                      </span>
                      Home
                    </a>
                  </Link>
                </div>
                <div
                  className="bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium flex flex-row items-center"
                  aria-current="page"
                >
                  <Link href="/hotwalls">
                    <a>
                      <span className="inline-flex pr-2">
                        <AiFillFire />
                      </span>
                      Hot
                    </a>
                  </Link>
                </div>

                <div className="bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium flex flex-row items-center">
                  <Link href="/newwalls">
                    <a>
                      <span className="inline-flex pr-2">
                        <BiPolygon />
                      </span>
                      New
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
