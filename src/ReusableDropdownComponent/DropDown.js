// import {useState,useEffect,useRef} from "react";

// const DropDown = ({options,value,onChange,placeholder,setPlaceHolder,handleChange,selected}) => {
//      const [open,setOpen] = useState(false);
//      const modalRef = useRef();

//      const handleEvent = (value) => {
//       onChange(value);
//       // setPlaceHolder(value);
//       setOpen(false);
//      }

     

//      useEffect(() => {
//         const handleModalClose = (e) => {
//         if(modalRef.current && !modalRef.current.contains(e.target)){
//           setOpen(false);
//         }
//         }

//         document.addEventListener("mousedown",handleModalClose);

//         return () => {
//           document.removeEventListener("mousedown",handleModalClose);
//         }
//      },[])

//       return(
//         <div>
//         <div ref={modalRef} style={{position:'absolute'}}>
//           <input onFocus={(e) => setOpen(true)} 
//           // onBlur={(e) => setOpen(false)} 
//           value={value} onChange={(e) => onChange(e.target.value)} style={{width:"100%"}} />
//           {/* <button onClick={() => setOpen(!open)} style={{width:"100%"}}>{value || placeholder}</button> */}
//           {
//             open &&
//              (
//               <div style={{display:"flex",flexDirection:"column",position:"absolute",border:"1px solid grey" ,zIndex:"99",width:"100%"}}>
//               {
//                 options && options.map((item,i) => {
//                     return(
//                      <label key={item.id}><input type="checkbox" value={item} onChange={(e) => handleChange(item,e.target.checked)} />{item.label}</label>
//                     )
//                 })
//               }
//               <div>
                
//               </div>
                
//             </div>
//              )
//           }
        
//         </div>
//         <div style={{marginTop:"100px"}}>
//          {
//           selected && selected.map((item,i) => {
//             return(
//               <div>{item.label}</div>
//             )
//           })
//          }
//          </div>
//          </div>
       
//       )
// }
// export default DropDown;


import { useState, useEffect, useRef } from "react";

const DropDown = ({
  options,
  value,
  onChange,
  placeholder,
  setPlaceHolder,
  handleChange,
  selected
}) => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const handleEvent = (value) => {
    onChange(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleModalClose = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleModalClose);

    return () => {
      document.removeEventListener("mousedown", handleModalClose);
    };
  }, []);

  return (
    <div>
 <div style={{ position: "relative" }}>

{/* INPUT + DROPDOWN */}
<div ref={modalRef}>
  <input
    onFocus={() => setOpen(true)}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ width: "100%" }}
  />

  {open && (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "100%",
        left: 0,
        border: "1px solid grey",
        zIndex: 99,
        width: "100%"
      }}
    >
      {options &&
        options.map((item) => {
          return (
            <label key={item.id}>
              <input
                type="checkbox"
                value={item}
                onChange={(e) =>
                  handleChange(item, e.target.checked)
                }
              />
              {item.label}
            </label>
          );
        })}
    </div>
  )}
</div>

{/* SELECTED CHIPS */}


</div>
<div style={{ marginTop: "100px" }}>
{selected &&
  selected.map((item) => {
    return (
      <div key={item.id}>
        {item.label}
      </div>
    );
  })}
</div>
    </div>
   
  );
};

export default DropDown;