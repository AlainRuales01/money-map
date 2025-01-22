
import { categoryTypeRepository } from '../../shared/services';
export default async function CategoryTypeTable()
{
    const categoryTypes = await categoryTypeRepository.getAll();
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {categoryTypes.map(categoryType => (
                    <tr key={categoryType.id}>
                        <td>{categoryType.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}