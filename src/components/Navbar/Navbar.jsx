import { NavLink } from 'react-router-dom';
import { RiMenu2Line } from 'react-icons/ri';
import { FaXmark } from 'react-icons/fa6';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user, loggedOut, update } = useContext(AuthContext);
  console.log(update);
  // console.log(user);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-green-500 lg:font-bold border hover:bg-blue-500 hover:text-white rounded-lg px-16 lg:px-12 py-1'
            : 'border rounded-lg lg:px-5 px-16 py-1 lg:text-lg font-light text-blue-800'
        }
      >
        Home
      </NavLink>
      {user && (
        <NavLink
          to="/updateProfile"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 lg:font-bold border hover:bg-blue-500 hover:text-white rounded-lg px-4 py-1'
              : 'border rounded-lg lg:px-5 py-1 lg:text-lg font-light  text-blue-800'
          }
        >
          Update Profile
        </NavLink>
      )}

      {user && (
        <div className="tooltip tooltip-left" data-tip={user.displayName}>
          <img
            className="border  w-[40px] rounded-full"
            src={
              user.photoURL ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUy9s7L2aRDadM1KxmVNkNQ9Edar2APzIeHw&s'
            }
            alt=""
          />
        </div>
      )}

      {user ? (
        <button
          className="border-2 px-4 text-purple-400 py-1 rounded-lg"
          onClick={() => loggedOut()}
        >
          Sign Out
        </button>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'text-green-500 lg:font-medium border hover:bg-blue-500 hover:text-white rounded-lg px-5 py-1'
              : 'border rounded-lg lg:px-5 px-4 py-1 lg:text-lg font-light text-blue-800'
          }
        >
          Sign In
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="fixed w-full px-4 py-2 mt-1 drop-shadow-lg shadow-xl z-10 bg-gray-200">
      <div className="flex items-center justify-between mx-6 my-2">
        <div>
          <h2 className="text-4xl font-extrabold text-blue-800">
            Medi<span className="text-sky-400">x</span>i
          </h2>
        </div>
        <div className="gap-6 text-xl hidden lg:flex items-center">{navLinks}</div>

        <div className="lg:hidden flex relative">
          <div onClick={() => setOpen(!open)} className="text-3xl">
            {open === true ? <FaXmark /> : <RiMenu2Line></RiMenu2Line>}
          </div>
          <div
            className={`lg:hidden duration-500
         ${open ? 'top-[3rem]' : '-top-[44rem]'}
         flex flex-col absolute gap-2 right-2 top-5 bg-slate-200 rounded-xl px-3 py-5 items-center`}
          >
            {navLinks}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;