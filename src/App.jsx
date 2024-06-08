import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/HomeComponent';
import Navigation from './routes/navigation/NavigationComponent';
import SignIn  from './routes/sign-in/SignInComponent';
function App() {


  const Shop = () => {
    return <h1>I am Shop Page</h1>
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
           <Route index element={<Home />} />   {/*Varsayılan rota, 'path="/"' */}
          <Route path='shop' element={<Shop />} /> {/* '/shop' rotası */} 
          <Route path='signIn' element={<SignIn />} /> 
        </Route>
      </Routes>


    </div>
  )
}

export default App