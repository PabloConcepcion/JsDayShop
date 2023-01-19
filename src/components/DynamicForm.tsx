import { useState } from "react";
import IProduct, { emptyProduct } from "../models/IProduct";

export default function DynamicForm() {

  const [fields, setFields] = useState<IProduct>(emptyProduct)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <div>
      <h1>DynamicForm</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(fields).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input type="text" name={key} value={fields[key]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}