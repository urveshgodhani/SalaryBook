import React from 'react'
import './sidebar.scss'
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const Sidebar = () => {
  return (
    <>
    <div className='main-sidebar'>
<div style={{background:'rgb(8, 27, 56)',width:'100%', display:'flex' , alignItems:'center',justifyContent:'center' ,height:'80px' }}>

<h3 className='side-heading'>Darshit pvt Ltd</h3>
</div>
<div className='links'>
<a href='/dashboard' className='link'> <PieChartIcon/> Dashboard</a>
  <a href='/staff'  className='link'><PeopleAltIcon /> Staff</a>
<a href='/attendance'  className='link'><TouchAppIcon /> Attendance</a>
</div>
<h3 className='side-footer'>SalaryBook®</h3> 
</div></>
  )
}

export default Sidebar

