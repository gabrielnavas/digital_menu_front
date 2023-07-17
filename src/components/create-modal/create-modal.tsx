import { useEffect, useState } from "react"

import { toast } from 'react-toastify';

import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../types/FoodData"

import './create-modal.css'
import { FormInput } from "./form-input"


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

  const notifySuccess = () => toast("Wow so easy!");

  useEffect(() => {
    if (!isSuccess) {
      return
    }
    notifySuccess()
    closeModal()
  }, [isSuccess, closeModal])

  const postButtonText = isLoading ? 'Cadastrando...' : 'Cadastrar'

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container" >
          <FormInput label="Título" value={title} updateValue={setTitle} placeholder="Pizza..." />
          <FormInput label="Preço" value={price} updateValue={setPrice} placeholder="29.30" />
          <FormInput label="Imagem" value={image} updateValue={setImage} placeholder="https://..." />
          <button type="button" onClick={submit} className="btn btn-medium btn-primary">{postButtonText}</button>
          <button type="button" onClick={closeModal} className="btn btn-medium btn-secondary">Cancelar</button>
        </form>
      </div>
    </div>
  )
}