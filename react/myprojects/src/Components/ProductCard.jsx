
import "./ProductCard.css"

function ProductCard ({ name, price, description }){
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
    </div>
  )
}
const products = [
    { name: "Laptop", price: 500, description: "A high-performance laptop for all your needs." },
    { name: "Smartphone", price: 300, description: "A sleek and powerful smartphone with great features." },
    { name: "Headphones", price: 100, description: "Noise-canceling headphones for immersive sound." },
]

function Card() {    
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    )
}

export default Card
