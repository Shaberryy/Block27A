import './App.css'
import PrimaryDashboard from './components/PrimaryDashboard';
import SideBar from './components/SideBar';
import TransactionBar from './components/TransactionBar';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



function App() {

  return (
    <>
    <Grid container spacing={3}>
    <TransactionBar/>
    <PrimaryDashboard/>
    <SideBar/>
   </Grid> 
   </>
  )
}

export default App
