"use client";
import Table from '@/app/shared/components/Table';
import { CategoryType } from '@/lib/models/category-type';
import { getAll } from '@/app/actions/category-type';
import { useEffect, useState } from 'react';

const CategoryTypeTable = () => {
    const [data, setData] = useState<CategoryType[]>([]);

    useEffect(() => {
        const initialData = async () => {
            const result = await getAll();
            setData(result.result);
        };
        initialData();
    }, []);

    return (
        <div>
            <Table columns={[{ key: "id", label: "ID" },{ key: "name", label: "Nombre" },]}
            data={data}/>
        </div>
    );
};
export default CategoryTypeTable;
