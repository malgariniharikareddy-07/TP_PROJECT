function TempleCard({ temple }) {

  return (

    <div className="card">

      <img
        src={temple.image}
        alt={temple.name}
      />

      <h3>{temple.name}</h3>

      <p>{temple.location}</p>

    </div>

  );
}

export default TempleCard;