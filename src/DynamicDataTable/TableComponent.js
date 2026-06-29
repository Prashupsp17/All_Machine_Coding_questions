import React, { memo } from "react";

const TableComponent = ({ data, columns, sortingAsc, sortingDesc }) => {
  return (
    <div>
      <button onClick={sortingAsc}>Asc</button>
      <button onClick={sortingDesc}>Desc</button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.id}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(TableComponent);