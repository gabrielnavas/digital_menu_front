import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { CreateModal } from './components/create-modal/create-modal'
import { useFoodData } from './hooks/useFoodData'

function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <button onClick={handleOpenModal}>Novo</button>
      <div className='card-grid-body'>
        {
          data.map(foodData => (
            <Card 
              key={foodData.id}
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
            />
          ))
        }
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
    </div>
  )
}

export default App
