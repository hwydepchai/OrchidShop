import PropTypes from "prop-types"; // Import prop-types
import { Modal } from "react-bootstrap";

const OrchidModal = ({ show, onHide, thisOrchid }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{thisOrchid.name}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <p>Origin: {thisOrchid.origin}</p>
          <p>Color: {thisOrchid.color}</p>
          <p>Rating: {thisOrchid.rating} ⭐</p>
          <p>Category: {thisOrchid.category}</p>
          {thisOrchid.isSpecial && (
            <span className="special">🌟 Special Orchid</span>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Define prop types for OrchidModal
OrchidModal.propTypes = {
  show: PropTypes.bool.isRequired, // Boolean to control modal visibility
  onHide: PropTypes.func.isRequired, // Function to close modal
  thisOrchid: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    isSpecial: PropTypes.bool.isRequired,
  }).isRequired, // Ensure orchid object is well-defined
};

export default OrchidModal;
