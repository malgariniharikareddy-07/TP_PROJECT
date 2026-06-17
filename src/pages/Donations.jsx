import { useState } from "react";
import "./Donations.css";

function Donations() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    paymentMethod: "UPI",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name} for donating ₹${form.amount} via ${form.paymentMethod}!`);
  };

  return (
    <div className="donation-container">
      <h2>Donation</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Donation Amount (₹)</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />

        <label>Payment Method</label>
        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
        >
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Net Banking">Net Banking</option>
        </select>

        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default Donations;

