import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const Coditas = () => {
  const suppliersView = [
    {
      supplierId: 1,
      name: 'Supplier A',
      medicines: [
        { id: 1, name: 'MedicineA', price: 100, stock: 50 },
        { id: 2, name: 'MedicineB', price: 150, stock: 30 },
      ],
      orders: [
        {
          orderId: 123,
          customer: 'Customer 1',
          medicine: [{ MedicineA: 3 }, { MedicineB: 8 }],
          totalAmount: 200,
          status: 'Created',
        },
        {
          orderId: 124,
          customer: 'Customer 2',
          medicine: [{ MedicineA: 3 }, { MedicineB: 8 }],
          totalAmount: 150,
          status: 'Created',
        },
      ],
      totalRevenue: 350,
    },

    {
      supplierId: 2,
      name: 'Supplier B',
      medicines: [
        { id: 3, name: 'MedicineC', price: 120, stock: 40 },
        { id: 4, name: 'MedicineD', price: 180, stock: 25 },
      ],
      orders: [
        {
          orderId: 201,
          customer: 'Customer 3',
          medicine: [{ MedicineC: 2 }],
          totalAmount: 240,
          status: 'Delivered',
        },
      ],
      totalRevenue: 240,
    },

    {
      supplierId: 3,
      name: 'Supplier C',
      medicines: [{ id: 5, name: 'MedicineE', price: 90, stock: 60 }],
      orders: [
        {
          orderId: 301,
          customer: 'Customer 4',
          medicine: [{ MedicineE: 5 }],
          totalAmount: 450,
          status: 'Delivered',
        },
      ],
      totalRevenue: 450,
    },

    {
      supplierId: 4,
      name: 'Supplier D',
      medicines: [
        { id: 6, name: 'MedicineF', price: 200, stock: 20 },
        { id: 7, name: 'MedicineG', price: 75, stock: 100 },
      ],
      orders: [],
      totalRevenue: 0,
    },

    {
      supplierId: 5,
      name: 'Supplier E',
      medicines: [{ id: 8, name: 'MedicineH', price: 130, stock: 35 }],
      orders: [
        {
          orderId: 401,
          customer: 'Customer 5',
          medicine: [{ MedicineH: 4 }],
          totalAmount: 520,
          status: 'Cancelled',
        },
      ],
      totalRevenue: 0,
    },

    {
      supplierId: 6,
      name: 'Supplier F',
      medicines: [
        { id: 9, name: 'MedicineI', price: 160, stock: 45 },
        { id: 10, name: 'MedicineJ', price: 210, stock: 15 },
      ],
      orders: [
        {
          orderId: 501,
          customer: 'Customer 6',
          medicine: [{ MedicineI: 1 }, { MedicineJ: 1 }],
          totalAmount: 370,
          status: 'Delivered',
        },
      ],
      totalRevenue: 370,
    },

    {
      supplierId: 7,
      name: 'Supplier G',
      medicines: [{ id: 11, name: 'MedicineK', price: 95, stock: 80 }],
      orders: [],
      totalRevenue: 0,
    },

    {
      supplierId: 8,
      name: 'Supplier H',
      medicines: [
        { id: 12, name: 'MedicineL', price: 140, stock: 55 },
        { id: 13, name: 'MedicineM', price: 165, stock: 33 },
      ],
      orders: [
        {
          orderId: 601,
          customer: 'Customer 7',
          medicine: [{ MedicineL: 2 }],
          totalAmount: 280,
          status: 'Created',
        },
      ],
      totalRevenue: 280,
    },

    {
      supplierId: 9,
      name: 'Supplier I',
      medicines: [{ id: 14, name: 'MedicineN', price: 110, stock: 70 }],
      orders: [
        {
          orderId: 701,
          customer: 'Customer 8',
          medicine: [{ MedicineN: 6 }],
          totalAmount: 660,
          status: 'Delivered',
        },
      ],
      totalRevenue: 660,
    },

    {
      supplierId: 10,
      name: 'Supplier J',
      medicines: [{ id: 15, name: 'MedicineO', price: 190, stock: 22 }],
      orders: [],
      totalRevenue: 0,
    },

    {
      supplierId: 11,
      name: 'Supplier K',
      medicines: [{ id: 16, name: 'MedicineP', price: 85, stock: 90 }],
      orders: [
        {
          orderId: 801,
          customer: 'Customer 9',
          medicine: [{ MedicineP: 10 }],
          totalAmount: 850,
          status: 'Delivered',
        },
      ],
      totalRevenue: 850,
    },
  ];

  const [data, setData] = useState([]);
  console.log(data);
  const [currAcc, setCurrAcc] = useState(null);
  const [pricesArr, setPricesArr] = useState([]);
  console.log(pricesArr);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(totalAmount);

  const getApiData = async () => {
    try {
      const res = await suppliersView;

      // if (!res.ok) {
      //   throw new Error(`Res status ${res.status}`);
      // }

      const resdata = res;
      console.log(resdata);
      setData(resdata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleAccordion = (value) => {
    setCurrAcc((prev) => (prev != value ? value : null));
  };

  const handleCheckboxes = (value, checked) => {
    // console.log(value, checked);
    if (checked) {
      setPricesArr((prev) => {
        const updatedData = [...prev, +value];
        const totalPrice = updatedData.reduce((curr, acc) => {
          return curr + acc;
        }, 0);
        setTotalAmount(totalPrice);
        return updatedData;
      });
    } else {
      const filteredArr = pricesArr.filter((item, i) => item != value);
      setPricesArr(filteredArr);
      setTotalAmount((prev) => prev - value);
    }
  };

  return (
    <div>
      <div>
        {data &&
          data.map((item, i) => {
            return (
              <div key={item.supplierId}>
                <div
                  onClick={() => handleAccordion(item.supplierId)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'grey',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px',
                    alignItems: 'center',
                  }}
                >
                  <div> {item.supplierId}</div>
                  <div> {item.name}</div>
                  <div> + -</div>
                </div>
                <div
                  style={{
                    display: currAcc === item.supplierId ? 'block' : 'none',
                  }}
                >
                  {item.medicines.map((med, i) => {
                    return (
                      <div
                        key={med.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          type="checkbox"
                          value={med.price}
                          onChange={(e) =>
                            handleCheckboxes(e.target.value, e.target.checked)
                          }
                        />
                        <div>{med.stock}</div>
                        <div>{med.price}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Coditas;
