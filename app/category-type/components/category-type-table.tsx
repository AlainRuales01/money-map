
import { categoryTypeRepository } from '../../shared/services';
export default async function CategoryTypeTable()
{
    const categoryTypes = await categoryTypeRepository.getAll();
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {categoryTypes.map(categoryType => (
                    <tr key={categoryType.id}>
                        <td>{categoryType.name}</td>
                        <td>{categoryType.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}