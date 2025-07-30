import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import {Route,Switch} from 'wouter'

export default function App(){
  
  return(
  <>

    <Navbar/>
    <Switch>
      <Route path='/' component={Homepage}/>
    </Switch>
  
  </>
  )
}
