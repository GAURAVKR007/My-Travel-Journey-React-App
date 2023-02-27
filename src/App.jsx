import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Nav from './components/Navbar'
import places from './data'

function App() {
  const [count, setCount] = useState(0)

  const cards = places.map(place => {
    return (
      <Card 
      key={place.id}
      img={place.image}
      location={place.location}
      maps={place.maps}
      placeTitle={place.placeTitle}
      date={place.date}
      about={place.about}
    />
    )
    
  })

  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  )
}

export default App
