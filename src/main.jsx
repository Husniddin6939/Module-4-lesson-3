import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router/index.jsx'
import  './lang/lang.config.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
 
)
