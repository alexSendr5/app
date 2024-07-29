import Modal from "../components/Modal"
import ProjectForm from "../components/ProjectForm"

const CreateProject = () =>{
    return(
        <Modal>
            <h3 className="modal-head-text">Progect</h3>
            <ProjectForm type = "create"/>
        </Modal>
    )
}

export default CreateProject