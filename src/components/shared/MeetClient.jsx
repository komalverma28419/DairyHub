import React, { useState } from "react";
import { clients } from "../../data/clientData";
import ClientMap from "../ui/ClientMap";
import ClientInfo from "../ui/ClientInfo";
import Title from "../ui/Title";

const MeetClients = () => {
  const [index, setIndex] = useState(0);
  const [activeBtn, setActiveBtn] = useState("next"); 

  const client = clients[index];

  const next = () => {
  setIndex((p) => {
    if (p >= clients.length - 1) return p;
    return p + 1;
  })
  setActiveBtn("next");
}

const prev = () => {
  setIndex((p) => {
    if (p <= 0) return p; 
    return p - 1;
  })
  setActiveBtn("prev");
}
  return (
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FBFDFF]">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 p-10">
      <ClientMap client={client} />

      <div>
        <Title text="Meet Our Clients "/>
        <ClientInfo
        client={client}
        index={index}
        total={clients.length}
        next={next}
        prev={prev}
        activeBtn={activeBtn}
      />
      </div>
    </div>
    </section>
  );
};

export default MeetClients;
// export default Client
