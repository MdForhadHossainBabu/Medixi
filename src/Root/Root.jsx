import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Root = () => {
 return (
   <div>
     <div className="h-20">
       <Navbar></Navbar>
     </div>
     <div>
       <Outlet></Outlet>
     </div>
     <div>
       <Footer></Footer>
     </div>
   </div>
 );
};

export default Root;