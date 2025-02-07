'use client'
import { Category } from "@/lib/models/category";
import EditButton from "./components/test-buttton";
import { useEffect, useState } from "react";
import Table from "@shared/components/Table";
import { getAll } from "@/app/actions/category";

export default function Home() {
    const [data, setData] = useState<Category[]>([]);

    useEffect(() => {
        const initialData = async () => {
          const result = await getAll();
          setData(result.result);
        };
        initialData();
      }, []);
    

    return (
        <div>
            <h1>Category</h1>
            <p>Find me in ./app/category/page.tsx</p>
            <Table columns={[{ key: "id", label: "ID" },{ key: "name", label: "Nombre" },]}
            data={data}/>
            <EditButton userId={1} />
        </div>
        )
}