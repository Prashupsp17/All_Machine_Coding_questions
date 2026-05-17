import React from "react";
import {useState,useEffect,useCallback,useMemo} from "react";
import TableComponent from './TableComponent';

const Table = () => {
  const columns = [
    {
      id: 1,
      header: "ID",
      accessor: "id"
    },
    {
      id: 2,
      header: "Name",
      accessor: "name"
    },
    {
      id: 3,
      header: "City",
      accessor: "city"
    },
    {
      id: 4,
      header: "State",
      accessor: "State"
    }
  ];
    
  const data = [
    {
      id: 1,
      name: "Prashant",
      city: "Pune",
      State:"Maharashtra"
    },
    {
      id: 2,
      name: "Rahul",
      city: "Mumbai",
      State:"Maharashtra"
    }
  ];
  const [tableData,setTableData] = useState(data);
  const [search,setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
    
  

     return(
        <div>
          <h1>Table</h1>
          <input placeholder="search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <TableComponent 
          data={filteredData}
          columns={columns}
          />
        </div>
     )
}
export default Table;