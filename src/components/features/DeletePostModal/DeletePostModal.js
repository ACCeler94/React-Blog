import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';


function DeletePostModal(props) {

  const dispatch = useDispatch();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are You sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This operation will completely remove selected post. This operation is irreversible.
          <br />
          Are You sure that You want to do this?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide} >Cancel</Button>
        <Button variant="danger" onClick={() => {
          dispatch(removePost(props.postId));
          props.onHide();
        }} >Remove</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePostModal;
