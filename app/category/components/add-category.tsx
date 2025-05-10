'use client';

import { add } from "@/lib/actions/category";
import {getAll } from "@/lib/actions/category-type";
import { CategoryType } from "@/lib/models/category-type";
import { useEffect, useState } from "react";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categoryTypes, setCategoryTypes] = useState<CategoryType[]>([]);
    const [categoryTypeId, setCategoryTypeId] = useState("");


    useEffect(() => {
        const initialData = async () => {
          const result = await getAll();
          setCategoryTypes(result.result);
        };
        initialData();
      }, []);

    const handleAdd = async () => {
        await add({name: name, description: description, category_type_id: categoryTypeId});
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
                <select className="border border-gray-300 p-1 rounded mb-2 text-black" onChange={(e) => setCategoryTypeId(e.target.value)}>
                    <option value="1" className="text-black">Seleccione una categoría</option>
                    {categoryTypes.map(categoryType => (
                        <option key={categoryType.id} className="text-black" value={categoryType.id}>{categoryType.name}</option>
                    ))}
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