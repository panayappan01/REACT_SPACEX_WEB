import React,{useState,useEffect} from 'react'
import "./App.css"
import Card from './components/Card'
import Filter from './components/Filter'
import Modal from './components/Modal'

const App = () => {

  const [rockets, setRockets] = useState([])
  const [selectedHeight, setSelectedHeight] = useState(0)
  const filteredRockets = rockets.filter(rocket => {
    return rocket.height.feet > selectedHeight
  })

  useEffect(() => {
     fetch('https://api.spacexdata.com/v4/rockets')
     .then(response => response.json())
     .then(responseJson => setRockets(responseJson))
  },[])


  const handleChange = (e) => {


      setSelectedHeight(e.target.value)


  }



  return (

    

    <div className="container">
    <h1 className="app-title">SpaceX Rockets Encyclopedia</h1>
    <Filter handleChange={handleChange} />
    <div className="row">
      {filteredRockets.map(rocket => (
       

<React.Fragment>
    <Card rocket={rocket} />

    <Modal rocket={rocket} />
</React.Fragment>

      ))}
      </div>
      
    </div>
  )
}

export default App
