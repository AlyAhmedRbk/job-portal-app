import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Applications from './pages/Applications';
import RecuruterLogin from './components/RecuruterLogin';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import ManageJobs from './pages/ManageJobs';
import ViewApplication from './pages/ViewApplication';
import  'quill/dist/quill.snow.css'

const App = () => {


  const {showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
        { showRecruiterLogin && <RecuruterLogin />}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apply-job/:id' element={<ApplyJob />} />
            <Route path='/application' element={<Applications />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-job' element={<AddJob />} />
              <Route path='manage-job' element={<ManageJobs />} />
              <Route path='view-application' element={<ViewApplication />} />
            </Route> 
        </Routes>
    </div>
  )
}

export default App