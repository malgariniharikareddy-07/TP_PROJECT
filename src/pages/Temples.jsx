import TempleCard from "../components/TempleCard";

import birla from "../assets/images/birla.jpg";
import chilkur from "../assets/images/chilkur.jpg";
import yadadri from "../assets/images/yadadri.jpg";
import jagannath from "../assets/images/jagannath.jpg";
import keesaragutta from "../assets/images/keesaragutta.jpg";
import sanghi from "../assets/images/sanghi.jpg";
import peddamma from "../assets/images/peddamma.jpg";
import iskcon from "../assets/images/iskcon.jpg";
import balkampet from "../assets/images/balkampet.jpg";
import surendrapuri from "../assets/images/surendrapuri.jpg";

function Temples() {
  const temples = [
    {
      id: 1,
      name: "Birla Mandir",
      location: "Hyderabad",
      timing: "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
      image: birla,
      description:
        "Famous white marble temple dedicated to Lord Venkateswara."
    },
    {
      id: 2,
      name: "Chilkur Balaji Temple",
      location: "Hyderabad",
      timing: "5:00 AM - 8:00 PM",
      image: chilkur,
      description:
        "Popular as Visa Balaji Temple attracting devotees from all over India."
    },
    {
      id: 3,
      name: "Yadadri Temple",
      location: "Yadadri",
      timing: "4:00 AM - 9:45 PM",
      image: yadadri,
      description:
        "Magnificent temple dedicated to Lord Lakshmi Narasimha Swamy."
    },
    {
      id: 4,
      name: "Jagannath Temple",
      location: "Banjara Hills",
      timing: "6:00 AM - 12:00 PM, 5:00 PM - 9:00 PM",
      image: jagannath,
      description:
        "Beautiful temple inspired by the famous Jagannath Temple of Puri."
    },
    {
      id: 5,
      name: "Keesaragutta Temple",
      location: "Keesara",
      timing: "6:00 AM - 8:00 PM",
      image: keesaragutta,
      description:
        "Ancient Shiva temple situated on a scenic hilltop."
    },
    {
      id: 6,
      name: "Sanghi Temple",
      location: "Sanghi Nagar",
      timing: "8:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      image: sanghi,
      description:
        "A peaceful temple complex known for its beautiful architecture."
    },
    {
      id: 7,
      name: "Peddamma Temple",
      location: "Jubilee Hills",
      timing: "6:00 AM - 1:00 PM, 3:00 PM - 8:00 PM",
      image: peddamma,
      description:
        "One of Hyderabad's most visited temples dedicated to Goddess Peddamma."
    },
    {
      id: 8,
      name: "ISKCON Temple",
      location: "Nampally",
      timing: "4:30 AM - 9:00 PM",
      image: iskcon,
      description:
        "Spiritual center dedicated to Lord Krishna."
    },
    {
      id: 9,
      name: "Balkampet Yellamma Temple",
      location: "Balkampet",
      timing: "6:00 AM - 8:00 PM",
      image: balkampet,
      description:
        "Renowned temple dedicated to Goddess Yellamma."
    },
    {
      id: 10,
      name: "Surendrapuri Temple",
      location: "Yadadri District",
      timing: "6:00 AM - 6:30 PM",
      image: surendrapuri,
      description:
        "Unique mythological theme temple and spiritual destination."
    }
  ];

  return (
    <div className="temples-page">
      <h1 className="page-title">
        Top 10 Hyderabad Temples
      </h1>

      <div className="temple-grid">
        {temples.map((temple) => (
          <TempleCard
            key={temple.id}
            temple={temple}
          />
        ))}
      </div>
    </div>
  );
}

export default Temples;