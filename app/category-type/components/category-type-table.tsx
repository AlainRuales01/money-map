'use server';
import { categoryTypeRepository } from '../../shared/services';
export default async function CategoryTypeTable()
{
    const categoryTypes = await categoryTypeRepository.getAll();
    let count = 1;
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {categoryTypes.map(categoryType => (
                    <tr key={categoryType.id}>
                        <td>{count}</td>
                        <td>{categoryType.name}</td>
                        {count += 1}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}