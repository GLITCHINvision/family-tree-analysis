import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    profession: '',
    relationship: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/family/add', formData);
      alert('Member added successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="number" placeholder="Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
      <select onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="text" placeholder="Profession" onChange={(e) => setFormData({ ...formData, profession: e.target.value })} />
      <input type="text" placeholder="Relationship" onChange={(e) => setFormData({ ...formData, relationship: e.target.value })} />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;
