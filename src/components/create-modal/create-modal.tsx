import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../types/FoodData"

import './create-modal.css'
import { Input } from "./form-input"


type CreateModalProps = {
  closeModal: () => void
}

export const CreateModal = ({ closeModal }: CreateModalProps) => {

  const { mutate, isSuccess, isLoading } = useFoodDataMutate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0.00)
  const [image, setImage] = useState('')

  const submit = () => {
    const foodData: FoodData = {
      title, price, image
    }
    mutate(foodData)
  }

  useEffect(() => {
    if (!isSuccess) {
      return
    }
    closeModal()
  }, [isSuccess, closeModal])

  const postButtonText = isLoading ? 'Cadastrando...' : 'Cadastrar'

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container" >
          <Input label="Título" value={title} updateValue={setTitle} placeholder="Pizza..." />
          <Input label="Preço" value={price} updateValue={setPrice} placeholder="29.30" />
          <Input label="Imagem" value={image} updateValue={setImage} placeholder="https://..." />
          <button type="button" onClick={submit} className="btn btn-primary">{postButtonText}</button>
          <button type="button" onClick={closeModal} className="btn btn-secondary">Cancelar</button>
        </form>
      </div>
    </div>
  )
}