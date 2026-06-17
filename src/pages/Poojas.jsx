const poojas=[

{
name:"Suprabhata Seva",
time:"5:00 AM",
price:"₹500"
},

{
name:"Archana",
time:"7:00 AM",
price:"₹300"
},

{
name:"Lakshmi Pooja",
time:"9:00 AM",
price:"₹1000"
},

{
name:"Abhishekam",
time:"6:00 AM",
price:"₹1500"
}

];

function Poojas(){

return(

<div className="grid">

{poojas.map((pooja,index)=>(

<div
key={index}
className="card"
>

<h3>{pooja.name}</h3>

<p>{pooja.time}</p>

<p>{pooja.price}</p>

</div>

))}

</div>

)

}

export default Poojas;