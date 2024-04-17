import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom'
import AtomicSpinner from 'atomic-spinner';
// import UserAuth from '../../Hooks/UserAuth';

const PrivateRoute = ({ children }) => {
  
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="font-bold text-xl flex items-center justify-center">
        <AtomicSpinner></AtomicSpinner>
        return <Navigate to="/login"></Navigate>
      </span>

    );
  }
  if (user) {
    return children;
  }



  // <Navigate
  //   to="/login"
  //   state={location.state?.pathname || '/singleData'}
  // ></Navigate>;
  
}

export default PrivateRoute;