import { useState } from "react";

function Booking() {

const [form,setForm]=useState({

name:"",
age:"",
mobile:"",
amount:"300"

});

const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

});

};

const handleSubmit=(e)=>{

e.preventDefault();

localStorage.setItem(
"booking",
JSON.stringify(form)
);

alert("Booking Successful");

};

return(

<div className="form-box">

<h2>Darshan Booking</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
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

<select
name="amount"
onChange={handleChange}
>

<option>300</option>

<option>500</option>

<option>1000</option>

</select>

<button>
Book Ticket
</button>

</form>

</div>

)

}

export default Booking;