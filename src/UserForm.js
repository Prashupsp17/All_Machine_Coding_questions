import React from 'react';
import { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    gender: '',
    subjects: [],
  });
  const [list, setList] = useState([]);
  console.log(list);
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedData = checked
          ? [...prev.subjects, value]
          : prev.subjects.filter((item, i) => item !== value);
        return {
          ...prev,
          subjects: updatedData,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('please enter name');
      return;
    } else if (formData.mobile.length != 10) {
      alert('Please enter 10 digit number');
      return;
    } else if (!formData.address.includes('@')) {
      alert('Please enter 10 digit number');
    }
    let obj = {
      id: Date.now(),
      formData,
    };
    setList((prev) => [...prev, obj]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          name="address"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Mobile"
          value={formData.mobile}
          name="mobile"
          onChange={handleChange}
        />
        <label>
          Male
          <input
            type="radio"
            value={formData.gender}
            value="male"
            name="gender"
            onChange={handleChange}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={handleChange}
          />
        </label>

        <label>
          Maths
          <input
            type="checkbox"
            value="maths"
            checked={formData.subjects.includes('maths')}
            onChange={handleChange}
          />
        </label>
        <label>
          Science
          <input
            type="checkbox"
            value="science"
            checked={formData.subjects.includes('science')}
            onChange={handleChange}
          />
        </label>
        <label>
          English
          <input
            type="checkbox"
            value="english"
            checked={formData.subjects.includes('english')}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
