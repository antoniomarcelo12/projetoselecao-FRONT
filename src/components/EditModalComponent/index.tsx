import Modal from 'react-modal'
import { ModalContainer } from './styles';
import { User } from '../../@types/User';
import { useApi } from '../../http/api';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };

interface ModalProps {
    isModalOpen: boolean,
    handleCloseEditModal: () => void,
    updatingUser: User,
    handleEditUpdatingUser(e: React.ChangeEvent<HTMLInputElement>): void
}

export function EditModalComponent({ handleEditUpdatingUser, updatingUser, isModalOpen, handleCloseEditModal }: ModalProps) {

    const api = useApi()

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleEditUpdatingUser(e)
    }

    function handleEditUser() {
        console.log("updatingUser: ", updatingUser)
        api.updateUser(updatingUser)
        handleCloseEditModal()
    }
    
   
    return(
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseEditModal} style={customStyles}>
            <ModalContainer>
                    <label htmlFor="">Nome completo</label>
                    <input    type="text" 
                                    name="user_fullname" 
                                    value={updatingUser?.user_fullname} 
                                    onChange={(e) => handleInputChange(e)} />
                    
                    <label htmlFor="">Nome de usuário</label>
                    <input    type="text" 
                                    name="user_name" 
                                    value={updatingUser.user_name} 
                                    onChange={(e) => handleInputChange(e)}/>
                    
                    <label htmlFor="">Idade</label>
                    <input    type="text" 
                                    name="user_age" 
                                    value={updatingUser.user_age} 
                                    onChange={(e) => handleInputChange(e)}/>
                    
                    <label htmlFor="">Email</label>
                    <input    type="text" 
                                    name="user_email" 
                                    value={updatingUser.user_email} 
                                    onChange={(e) => handleInputChange(e)}/>
                    
                    <label htmlFor="">Profissão</label>
                    <input    type="text" 
                                    name="user_ocupation" 
                                    value={updatingUser.user_ocupation} 
                                    onChange={(e) => handleInputChange(e)}/>
                    
                    <label htmlFor="">Celular</label>
                    <input    type="text" 
                                    name="user_phone" 
                                    value={updatingUser.user_phone} 
                                    onChange={(e) => handleInputChange(e)}/>
                    
                    
                    <button onClick={handleEditUser}>Edit</button> 
           </ModalContainer>
        </Modal>
        );
}