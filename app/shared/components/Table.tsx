"use client";

interface TableProps<T> {
    columns: {
        key: keyof T | "actions";
        label: string;
    }[];
    data: T[];
}

const Table = <T extends Record<string, any>>({
    columns,
    data
} : TableProps<T>) => {
    return(
        <table>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={String(col.key)} className="px-4 py-2 text-left border">
                            {col.label}
                        </th>
                    )
                    )}
                </tr>
            </thead>
            <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            {columns.map((col) => (
              <td key={String(col.key)} className="px-4 py-2 border">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
        </table>
    )
};

export default Table;