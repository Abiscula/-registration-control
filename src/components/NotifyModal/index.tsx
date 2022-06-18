
import { CheckCircle, Warning, XCircle, XSquare } from 'phosphor-react'
import Modal from 'react-modal'
import { useModalContext } from '../../context/modalContext'
import { Container } from './style'

const myStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '20px',
    border: '1px solid black',
    transform: 'translate(-50%, -50%)',
  },
};


export default function NotifyModal() {

  const { openModal, setOpenModal, message } = useModalContext()

  function closeModal() {
    setOpenModal(false)
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={myStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <Container>
          {message[0] === 'warning'
            ? <Warning className="icon-type" size={70} color="#f0ad4e" weight="light" />
            :
            message[0] === 'error'
              ? <XCircle className="icon-type" size={70} color="#d9534f" weight="light" />
              : <CheckCircle className="icon-type" size={70} color="#5cb85c" weight="light" />
          }
          <XSquare size={30} weight="light" className="btn-close" onClick={closeModal} />
          <span className={`msg-${message[0]}`}>{message[1]}</span>
        </Container>
      </Modal>
    </>
  )
}