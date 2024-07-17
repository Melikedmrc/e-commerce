import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/HomeComponent';
import Navigation from './routes/navigation/NavigationComponent';
import Authentication  from './routes/authentication/authenticationComponent';
import Shop from "./routes/shop/shopComponent";
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
           <Route index element={<Home />} />   {/*Varsayılan rota, 'path="/"' */}
          <Route path='shop' element={<Shop />} /> {/* '/shop' rotası */} 
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App