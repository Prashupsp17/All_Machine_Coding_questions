import { useState } from "react";

const StarRating = () => {
  const [stars, setStars] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
    { id: 5, selected: false },
  ]);

  const handleStartOnClick = (index) => {
   const updatedStars = stars.map((item,i) => {
     if(i <= index){
        item.selected = true;
     }else{
        item.selected = false;
     }
     return item;
   })
   setStars(updatedStars);
  };

  return (
    <div>
      <h6>Stars</h6>

      {stars.map((item, index) => (
        <span
          onClick={() => handleStartOnClick(index)}
          key={item.id}
          style={{
            cursor: "pointer",
            fontSize: "30px",
          }}
        >
          {item.selected ? "\u2605" : "\u2606"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;