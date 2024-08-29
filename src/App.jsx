import { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600 text-sm mb-4">{product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
