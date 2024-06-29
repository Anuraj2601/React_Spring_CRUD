
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <HeaderComponent />
          <Routes>
            {/*//http://localhost:3000 */}
            <Route path='/' element= {<ListEmployeeComponent />}></Route>
            {/*//http://localhost:3000/employees */ }
            <Route path='/employees' element= {<ListEmployeeComponent />}></Route>

            <Route path='/add-employee' element= {<EmployeeComponent />}></Route>

            <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
          </Routes>
          
          <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
