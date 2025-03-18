import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Applications from './pages/Applications';
import RecuruterLogin from './components/RecuruterLogin';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';


const App = () => {


  const {showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
        { showRecruiterLogin && <RecuruterLogin />}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apply-job/:id' element={<ApplyJob />} />
            <Route path='/application' element={<Applications />} />
        </Routes>
    </div>
  )
}

export default App