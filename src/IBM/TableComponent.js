import { useState } from "react";
import Table from './Table.js';

const Practise = () => {
  const [page,setPage] = useState(1);
  const perPage = 3;
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
    },
    {
      id: 3,
      name: "Amit",
      city: "Bengaluru",
      State: "Karnataka"
    },
    {
      id: 4,
      name: "Sneha",
      city: "Hyderabad",
      State: "Telangana"
    },
    {
      id: 5,
      name: "Priya",
      city: "Delhi",
      State: "Delhi"
    },
    {
      id: 6,
      name: "Rohan",
      city: "Chennai",
      State: "Tamil Nadu"
    },
    {
      id: 7,
      name: "Neha",
      city: "Ahmedabad",
      State: "Gujarat"
    },
    {
      id: 8,
      name: "Vikas",
      city: "Jaipur",
      State: "Rajasthan"
    },
    {
      id: 9,
      name: "Anjali",
      city: "Kolkata",
      State: "West Bengal"
    }
  ];
  const [tableData,setTableData] = useState(data);
  const columns = [
    {
      id: 1,
      header: "Id",
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

  const lastPage  = page * perPage;
  const firstPage = lastPage - perPage;

  const handleClick = (id) => {
    setPage(id);
  }

  const handleAsc = () => {
    const asc = tableData.slice(firstPage,lastPage).sort((a,b) => a.id - b.id);
    const newData = [...tableData];

     newData.splice(firstPage,perPage,...asc);
     setTableData(newData);
  }
  const handeDesc = () => {
    const desc = tableData.slice(firstPage,lastPage).sort((a,b) => b.id - a.id);
    const newData = [...tableData];
    newData.splice(firstPage,perPage,...desc);
    setTableData(newData);
  
  }
 return(
  <div>
    <h6>Create a **dynamic table with sorting and pagination** — **no
external libraries</h6>
    <button onClick={handleAsc}>Asc</button>
    <button onClick={handeDesc}>Desc</button>
    <Table columns={columns} data={tableData} lastPage = {lastPage} firstPage={firstPage} />
    {
      Array.from({length:Math.ceil(data.length/perPage)}).map((btn,i) => {
        return(
          <button style={{backgroundColor:page === i+1 ? "yellow" : "grey"}} onClick={() => handleClick(i+1)}>{i+1}</button>
        )
      })
    }
  </div>
 )
};

export default Practise;