import { useState } from "react";
import { orchids } from "./ListOfOrchids";
import OrchidModal from "./OrchidModal";

const Orchids = () => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const openModalHandler = (orchid) => {
    setSelectedOrchid(orchid);
    setModalShow(true);
  };

  const closeModalHandler = () => {
    setModalShow(false);
    setSelectedOrchid(null); // Clear selected orchid
  };

  return (
    <div className="container">
      {orchids.map((orchid) => (
        <div
          key={orchid.id}
          className="orchid-card"
          onClick={() => openModalHandler(orchid)}
        >
          <img src={orchid.image} alt={orchid.name} />
          {orchid.isSpecial && (
            <span className="corner-mark">
              <p className="S">🌟</p>
            </span>
          )}
        </div>
      ))}

      {selectedOrchid && (
        <OrchidModal
          thisOrchid={selectedOrchid}
          show={modalShow}
          onHide={closeModalHandler} // Handle close action
        />
      )}
    </div>
  );
};

export default Orchids;
