import {useState} from 'react'
import './App.css';

//------COMPONENTES-----//
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Main from './components/Main'

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false)

  const openSideBar = () =>{
    setSideBarOpen(true)
  }
  const closeSideBar = () =>{
    setSideBarOpen(false)
  }

  return (
    <div className="container">
      <NavBar openSideBar = {openSideBar}/>
      <Main/>
      <SideBar sidebarOpen = {sidebarOpen} closeSideBar = {closeSideBar}/>
    </div>
  );
}

export default App;
