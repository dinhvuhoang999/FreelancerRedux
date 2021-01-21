import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './style.css';

const Por = ({ name, url }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div
        className="col-md-6 col-lg-4 mb-5"
        id="por"
        onClick={handleShow}
        onKeyDown={handleShow}
        role="button"
        tabIndex={0}
      >
        {name}
        <div id="hoverPor">
          <i className="fas fa-plus" id="plus" />
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            this is infomation pokemon
            {url}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
Por.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Por;
