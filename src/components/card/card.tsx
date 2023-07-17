import "./card.css"

type CardProps = {
  price: number
  title: string
  image: string
}

export const Card = ({ price, image, title }: CardProps) => {
  
  return (
    <div className="card">
      <img src={image} alt="Imagem da comida" />
      <h2>{title}</h2>
      <p>
        <b>Valor: {price}</b>
      </p>
    </div>
  )
}