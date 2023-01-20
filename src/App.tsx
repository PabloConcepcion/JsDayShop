import { useState } from 'react';
import './App.css'
import DynamicForm from './components/DynamicForm'
import { GetEmptyProduct } from './models/IProduct';


function App() {
  const emptyProduct = GetEmptyProduct();
  const [fields] = useState<string[]>(Object.keys(emptyProduct));

  const handleSubmit = (result: any) => {
    console.log("super resultado", result)
  }

  return (
    <div>
      <DynamicForm title='Formulario dinamico' fields={fields} obj={emptyProduct} submitEvent={handleSubmit} />
    </div>
  )
}

export default App
