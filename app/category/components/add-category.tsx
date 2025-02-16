'use client';

import { add } from "@/lib/actions/category";
import { useState } from "react";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = async () => {
        await add({ name: "nueva categoria", description: "nueva descripcion", category_type: "1" });
        console.log("result");
    }

    return (
        <div>
            <h1>Agregar Categoría</h1>
            <div>
                <label>Nombre</label>
                <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nombre" 
                className="border border-gray-300 p-1 rounded mb-2" />
            </div>
            
            <div>
                <label>Descripción</label>
                <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Descripción" 
                className="border border-gray-300 p-1 rounded mb-2" />
            </div>
            <div>
                <label>Tipo de Categoría</label>
                <select className="border border-gray-300 p-1 rounded mb-2" onChange={(e) => console.log(e.target.value)}>
                    <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                </select>
            </div>
            <button 
                  onClick={() => handleAdd()} 
                  className="bg-blue-500 text-white px-2 py-1 rounded">
                    Agregar
            </button>
        </div>
    );
};  

export default AddCategory;