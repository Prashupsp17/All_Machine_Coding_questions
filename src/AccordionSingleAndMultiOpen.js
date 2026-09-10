import { useState } from "react";

const AccordionSingleAndMultiOpen = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      description:
        "React is a JavaScript library used for building user interfaces, especially single-page applications."
    },
    {
      id: 2,
      title: "What is a component in React?",
      description:
        "A component is a reusable piece of UI that can contain its own logic, state, and markup."
    },
    {
      id: 3,
      title: "What is useState?",
      description:
        "useState is a React Hook that allows functional components to manage state."
    },
    {
      id: 4,
      title: "What is useEffect?",
      description:
        "useEffect is a React Hook used to perform side effects such as API calls, subscriptions, or updating the DOM."
    },
    {
      id: 5,
      title: "What is Redux?",
      description:
        "Redux is a state management library commonly used to manage and share application state across components."
    }
  ];
const [data,setData] = useState(accordionData);
const [currAcc,setCurrAcc] = useState([]);

//For single close and open accordion logic
// const handleAccordion = (id) => {
//   setCurrAcc((prevId) => prevId != id  ? id : null);
// }

const handleAccordion = (id) => {
  setCurrAcc((prevIds) => {
    if(prevIds.includes(id)){
      return prevIds.filter((item,i) => item !== id);
    }
     return [...prevIds,id];
  });
}



  return (
    <div>
      <h6>Accordion</h6>
       {
        data && data.map((item,i) => {
          return(
            <div key={item.id}>
              <div onClick={() => handleAccordion(item.id)} style={{cursor:"pointer", backgroundColor:"grey",height:"20px",}}>{item.title}<span>+</span></div>
              <div style={{display:currAcc.includes(item.id) ? "block" : "none"}}>{item.description}</div>
            </div>
          )
        })
       }
    </div>
  );
};

export default AccordionSingleAndMultiOpen;