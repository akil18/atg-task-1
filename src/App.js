import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllPosts from './components/AllPosts';
import Article from './sections/Article';
import Event from './sections/Event';
import Education from './sections/Education';
import Job from './sections/Job';
import Main from './layouts/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <AllPosts></AllPosts>
      },
      {
        path: 'article',
        element: <Article></Article>
      },
      {
        path: 'event',
        element: <Event></Event>
      },
      {
        path: 'education',
        element: <Education></Education>
      },
      {
        path: 'job',
        element: <Job></Job>
      }
    ]
  }
    
])
    
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
