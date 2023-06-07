import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../assets/Images/guitar-fill.svg";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  // const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // setIsUserOpen(!isUserOpen);
    logOut()
      .then(() => {
        // Sign-out successful.
        // console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const links = [
    { href: "/account-settings", label: "Account settings" },
    { href: "/support", label: "Support" },
    { href: "/license", label: "License" },
    { href: "/sign-out", label: "Sign out" },
  ];
  let user = true;
  return (
    <nav className="  container mx-auto py-5">
      <div className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" flex border p-3 rounded-lg">
            <img src={Logo} alt="logo" />
            <Link
              to="/"
              className=" ml-3 text-2xl font-semibold text-fuchsia-500"
            >
              Music Shala
            </Link>
          </div>
          <div className="flex items-center md:order-2">
            {/* user menu */}

            <div>
              {user ? (
                <div className="flex">
                  <div className=" mx-3">
                    <label
                      onMouseEnter={() => setIsShow(!isShow)}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </label>
                    {isShow && <p className="absolute ">{user?.displayName}</p>}
                  </div>
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log out
                  </button>
                </div>
              ) : (
                <NavLink className="btn btn-ghost" to="/login">
                  Log in
                </NavLink>
              )}
            </div>
            {/* main menu */}

            <span className="md:hidden">
              <Hamburger size={26} toggled={isOpen} toggle={setOpen} />
            </span>
          </div>
          {/* hidden */}
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={isActive ? "text-fuchsia-500 font-bold" : ""}
                    >
                      Home
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/instructors">
                  {({ isActive }) => (
                    <span
                      className={isActive ? "text-fuchsia-500 font-bold" : ""}
                    >
                      Instructors
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/classes">
                  {({ isActive }) => (
                    <span
                      className={isActive ? "text-fuchsia-500 font-bold" : ""}
                    >
                      Classes
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                {user && (
                  <div className="md:flex gap-7">
                    <div>
                      <NavLink to="/my_toys">
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "text-fuchsia-500 font-bold" : ""
                            }
                          >
                            My Toys
                          </span>
                        )}
                      </NavLink>{" "}
                    </div>

                    <div>
                      <NavLink to="/add_toys">
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "text-fuchsia-500 font-bold block" : ""
                            }
                          >
                            Add Toys
                          </span>
                        )}
                      </NavLink>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
