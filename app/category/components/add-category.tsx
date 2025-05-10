'use client';

import { add } from "@/lib/actions/category";
import { useState } from "react";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = async () => {
        console.log("result");
        await add({name: "nueva categoria", description: "nueva descripcion", category_type_id: "ef141853-c2e9-4509-89bc-26c29f78fe13" });
    }

    return (
        <div>
            <h1 className="text-black">Agregar Categoría</h1>
            <div>
                <label className="text-black">Nombre</label>
                <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nombre" 
                className="border border-gray-300 p-1 rounded mb-2 text-black" />
            </div>
            
            <div>
                <label className="text-black">Descripción</label>
                <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Descripción" 
                className="border border-gray-300 p-1 rounded mb-2 text-black" />
            </div>
            <div>
                <label className="text-black">Tipo de Categoría</label>
                <select className="border border-gray-300 p-1 rounded mb-2 text-black" onChange={(e) => console.log(e.target.value)}>
                    <option className="text-black" value="1">Ingreso</option>
                    <option className="text-black" value="2">Egreso</option>
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