import { useState } from "react";
import IProduct, { GetEmptyProduct } from "../models/IProduct";


interface FormProps {
  fields: string[],
  obj: any,
  submitEvent: any,
  title: string;
}
export default function DynamicForm(props: FormProps) {
  const [fields] = useState<string[]>(props.fields);
  const [obj, setObj] = useState<any>(props.obj);

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setObj({
      ...obj,
      [name]: value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.submitEvent(obj);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((key: string) => (
          key.toLocaleLowerCase() !== "id" &&
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input type="text" name={key} value={obj[key]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}