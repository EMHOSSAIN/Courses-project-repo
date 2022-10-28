import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Shares/Home';
import Blog from './Components/Shares/Blog';
import Login from './Components/Shares/Login';
import SignUp from './Components/Shares/SignUp';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Category from './Components/Category/Category';
import Prenium from './Components/Prenium/Prenium';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main> </Main>,
      children:[
        {
          path:'/home',
          element: <PrivateRouter><Home> </Home></PrivateRouter>,
          loader:()=> fetch('https://learning-server-vert.vercel.app/news')
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/login',
          element:<Login> </Login>
        },
        {
          path:'/signup',
          element:<SignUp> </SignUp>
        },
        {
          path:'/category/:id',
          element: <Category> </Category>,
          loader:({params}) => fetch(`https://learning-server-vert.vercel.app/category/0${params.id}`),
        
        },{
          path:'/prenium',
          element: <PrivateRouter><Prenium> </Prenium></PrivateRouter>
        }
      ] 
    }
  ])
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
   
    
    </div>
  );
}

export default App;
