import temples from
"../data/temples";

import TempleCard from
"../components/TempleCard";

function TempleContainer(){

return(

<div className="grid">

{
 temples.map((temple)=>(

<TempleCard
 key={temple.id}
 temple={temple}
/>

))
}

</div>

);

}

export default TempleContainer;