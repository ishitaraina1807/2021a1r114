// components/WelcomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

const WelcomePage = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCompany && selectedCategory) {
      navigate(`/categories/${selectedCategory}/products?company=${selectedCompany}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the E-Commerce Comparison Tool</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select Company:
            <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
              <option value="">Select a company</option>
              {companies.map(company => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Select Category:
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Search Products</button>
      </form>
    </div>
  );
};

export default WelcomePage;
