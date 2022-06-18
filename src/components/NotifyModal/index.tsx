
import { XSquare } from 'phosphor-react'
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
          <XSquare size={30} weight="light" className="btn-close" onClick={closeModal} />
          <span className={`msg-${message[0]}`}>{message[1]}</span>
        </Container>
      </Modal>
    </>
  )
}