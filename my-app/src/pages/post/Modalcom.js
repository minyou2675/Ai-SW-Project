import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const Modalcom = ({show, handleClose}) => {
  const navigate = useNavigate();
  const goUpload = () =>{
    navigate('/post/upload')
  }
    return(
        <>
        {
            show ?(<>
             <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{color:'black'}}>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'black'}}>사진 scr 주소</Form.Label>
                            <Form.Control
                              type="url"
                              placeholder=""
                              autoFocus
                            />
                          </Form.Group>
                          
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={
                          // handleClose
                          goUpload
                        }>

                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
            </>):(<></>)
        }
        
        </>
    )
}

export default Modalcom;