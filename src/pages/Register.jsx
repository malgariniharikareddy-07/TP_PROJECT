import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name:"",
    age:"",
    mobile:"",
    email:""
  });

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(form.name==="" || form.age===""){
      alert("Fill all details");
      return;
    }

    alert("Registration Successful");
  }

  return(
    <div className="register-container">

      <h2>Temple Visitor Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
         type="text"
         name="name"
         placeholder="Enter Name"
         onChange={handleChange}
        />

        <input
         type="number"
         name="age"
         placeholder="Age"
         onChange={handleChange}
        />

        <input
         type="text"
         name="mobile"
         placeholder="Mobile Number"
         onChange={handleChange}
        />

        <input
         type="email"
         name="email"
         placeholder="Email"
         onChange={handleChange}
        />

        <button>Register</button>

      </form>

    </div>
  );
}

export default Register;