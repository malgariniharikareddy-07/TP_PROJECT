import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>🛕 Welcome To Hyderabad Temple Tourism</h1>
      <p>Book Darshan, Poojas and Donations Online</p>

      <div className="card-container">

        <div className="card">
          <img src="/src/assets/birla.jpg" alt="Birla Mandir" />
          <h3>Birla Mandir</h3>
          <p>Famous temple with panoramic views of Hyderabad.</p>
        </div>

        <div className="card">
          <img src="/src/assets/chilkur.jpg" alt="Chilkur Balaji Temple" />
          <h3>Chilkur Balaji Temple</h3>
          <p>Known as Visa Balaji Temple.</p>
        </div>

        <div className="card">
          <img src="/src/assets/peddamma.jpg" alt="Peddamma Temple" />
          <h3>Peddamma Temple</h3>
          <p>Popular during Bonalu festival celebrations.</p>
        </div>

        <div className="card">
          <img src="/src/assets/sanghi.jpg" alt="Sanghi Temple" />
          <h3>Sanghi Temple</h3>
          <p>Beautiful hilltop temple with peaceful surroundings.</p>
        </div>

        <div className="card">
          <img src="/src/assets/jagannath.jpg" alt="Jagannath Temple" />
          <h3>Jagannath Temple</h3>
          <p>Famous for its Odisha-style architecture.</p>
        </div>

        <div className="card">
          <img src="/src/assets/keesaragutta.jpg" alt="Keesaragutta Temple" />
          <h3>Keesaragutta Temple</h3>
          <p>Ancient temple dedicated to Lord Shiva.</p>
        </div>

        <div className="card">
          <img src="/src/assets/yadadri.jpg" alt="Yadadri Temple" />
          <h3>Yadadri Temple</h3>
          <p>Renowned temple dedicated to Lord Lakshmi Narasimha.</p>
        </div>

        <div className="card">
          <img src="/src/assets/balkampet.jpg" alt="Balkampet Yellamma Temple" />
          <h3>Balkampet Yellamma Temple</h3>
          <p>One of Hyderabad's most revered temples.</p>
        </div>

        <div className="card">
          <img src="/src/assets/iskcon.jpg" alt="ISKCON Temple" />
          <h3>ISKCON Temple</h3>
          <p>Spiritual center dedicated to Lord Krishna.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;