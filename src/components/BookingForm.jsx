import {
 useState,
 useContext
}
from "react";

import {
 TempleContext
}
from "../context/TempleContext";

function BookingForm(){

 const [date,setDate]
 = useState("");

 const [slot,setSlot]
 = useState("");

 const [count,setCount]
 = useState("");

 const {
 bookings,
 setBookings
 }
 =
 useContext(TempleContext);

 const submit=(e)=>{

 e.preventDefault();

 const booking = {

 date,
 slot,
 count

 };

 setBookings([
 ...bookings,
 booking
 ]);

 alert(
 "Booking Successful"
 );
 };

 return(

<form
className="form"
onSubmit={submit}
>

<input
type="date"
value={date}
onChange={(e)=>
setDate(e.target.value)
}
/>

<select
value={slot}
onChange={(e)=>
setSlot(e.target.value)
}
>

<option>
6AM-8AM
</option>

<option>
8AM-10AM
</option>

<option>
10AM-12PM
</option>

</select>

<input
type="number"
placeholder="Devotees"
value={count}
onChange={(e)=>
setCount(e.target.value)
}
/>

<button>

Book Darshan

</button>

</form>

 );

}

export default BookingForm;