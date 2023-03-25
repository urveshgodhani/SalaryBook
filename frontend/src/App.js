import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Log in/SignIn';
import SignUp from './Log in/SignUp';
import AddStaff from './pages/AddStaff';
import Attendance from './pages/Attendance';
import Dashboard from './pages/Dashboard';
import Staff from './pages/Staff';
import StaffList from './pages/StaffList';
import EditSelary from './pages/EditSelary';
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/add/staff' element={<AddStaff />} />
          <Route path='/stafflist' element={<StaffList />} />
          <Route path='/editsalary' element={<EditSelary />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
