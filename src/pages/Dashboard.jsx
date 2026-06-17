function Dashboard(){

const booking=
JSON.parse(
localStorage.getItem("booking")
);

return(

<div className="form-box">

<h2>Dashboard</h2>

{booking && (

<div>

<p>Name: {booking.name}</p>

<p>Age: {booking.age}</p>

<p>Mobile: {booking.mobile}</p>

<p>Amount: ₹{booking.amount}</p>

</div>

)}

</div>

)

}

export default Dashboard;