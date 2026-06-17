import { useState }
from "react";

function DonationForm(){

 const [amount,setAmount]
 = useState("");

 const donate=()=>{

 alert(
 `Donation ₹${amount}
 Successful`
 );
 };

 return(

<div className="card">

<h2>
Temple Donation
</h2>

<input
value={amount}
onChange={(e)=>
setAmount(e.target.value)
}
placeholder="Donation Amount"
/>

<select>

<option>UPI</option>

<option>Debit Card</option>

<option>Credit Card</option>

<option>Net Banking</option>

</select>

<button
onClick={donate}
>

Donate

</button>

</div>

 );

}

export default DonationForm;