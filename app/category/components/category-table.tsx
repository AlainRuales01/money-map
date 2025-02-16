'use client'
import { Category } from "@/lib/models/category";
import { useEffect, useState } from "react";
import Table from "@shared/components/Table";
import { getAll } from "@/app/actions/category";

const CategoryTable = () =>  {
    const [data, setData] = useState<Category[]>([]);

    useEffect(() => {
        const initialData = async () => {
          const result = await getAll();
          setData(result.result);
        };
        initialData();
      }, []);
    
    
    const handleEdit = (category: Category) => {
        alert(`editar: ${category.name}`);
    };

    return (
        <div>
            <Table columns={[{ key: "id", label: "ID" },{ key: "name", label: "Nombre" },]}
            data={data}
            actionComponent={(row) => (
              <div>
                <button 
                  onClick={() => handleEdit(row)} 
                  className="bg-blue-500 text-white px-2 py-1 rounded">
                    Editar
                </button>
              </div>
              
            )} />
        </div>
      )
}
export default CategoryTable;