import React, { useState } from 'react';
import './LoanForm.css'; // Separate CSS for styling

const LoanForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    tenure: '',
    reason: '',
    employmentStatus: '',
    employmentAddress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="loan-form" onSubmit={handleSubmit}>
        <h2>APPLY FOR A LOAN</h2>
        <div className="form-grid">
          <input 
            type="text" 
            name="fullName" 
            placeholder="Full name as it appears on bank account"
            value={formData.fullName} 
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="loanAmount" 
            placeholder="How much do you need?" 
            value={formData.loanAmount} 
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="tenure" 
            placeholder="Loan tenure (in months)" 
            value={formData.tenure} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="employmentStatus" 
            placeholder="Employment status" 
            value={formData.employmentStatus} 
            onChange={handleChange} 
          />
          <textarea 
            name="reason" 
            placeholder="Reason for loan"
            value={formData.reason} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="employmentAddress" 
            placeholder="Employment address" 
            value={formData.employmentAddress} 
            onChange={handleChange} 
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> I have read the important information and accept terms.
          </label>
          <label>
            <input type="checkbox" /> Any personal and credit information may be disclosed.
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoanForm;
