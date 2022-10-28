import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Prenium = () => {
    const notify = () => {
        toast.success('well done !! now you can access this course', {
            position: toast.POSITION.TOP_RIGHT
        });
      };
    return (
       <div className='mt-10 d-flex ml-3'>
         <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Monthly</h2>
          <p>1-month free trial <br/> then $29.99/month* </p>
          <div className="card-actions justify-end">
            <button onClick={notify} className="btn btn-primary">Try for free</button>
            <ToastContainer/>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl ml-5">
        <div className="card-body">
            <p className=' bg-orange-600 text-center'>Save 33%</p>
          <h2 className="card-title">Annually</h2>
          <p>1-month free trial <br/> then $19.99/month* </p>
          <div className="card-actions justify-end">
            <button onClick={notify}  className="btn btn-primary">Try for free</button>
            <ToastContainer/>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Prenium;