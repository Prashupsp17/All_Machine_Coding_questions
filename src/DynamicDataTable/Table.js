import React, { useState, useMemo } from "react";
import TableComponent from "./TableComponent";

const data = [
  {
    id: 1,
    name: "Prashant",
    city: "Pune",
    State: "Maharashtra"
  },
  {
    id: 2,
    name: "Rahul",
    city: "Mumbai",
    State: "Maharashtra"
  }
];

const Table = () => {
  const columns = [
    { id: 1, header: "ID", accessor: "id" },
    { id: 2, header: "Name", accessor: "name" },
    { id: 3, header: "City", accessor: "city" },
    { id: 4, header: "State", accessor: "State" }
  ];

  const [tableData, setTableData] = useState(data);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // "asc" | "desc"

  // 🔍 SEARCH + SORT (DERIVED STATE)
  const processedData = useMemo(() => {
    let filtered = tableData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.id - b.id);
    }

    if (sortOrder === "desc") {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [tableData, search, sortOrder]);

  const sortingAsc = () => setSortOrder("asc");
  const sortingDesc = () => setSortOrder("desc");

  return (
    <div>
      <h1>Table</h1>

      <input
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableComponent
        data={processedData}
        columns={columns}
        sortingAsc={sortingAsc}
        sortingDesc={sortingDesc}
      />
    </div>
  );
};

export default Table;