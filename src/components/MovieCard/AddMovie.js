import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg } from 'reactstrap'
import ModalComp from './ModalComp'
import img from '../../assets/icon/add.png'
const AddMovie = ({ handelAdd }) => {
    const [showModal, setShowModal] = useState(false)
    const toggleShow = () => setShowModal(!showModal)
    return (
        <div className='row justify-content-center mt-3'>
            <Card onClick={()=> setShowModal(true)}>
                <CardImg 
                    top
                    width='100%'
                    src= {img}
                    alt='Card image'/>
            </Card>
            {showModal && (
                <ModalComp isOpen= {showModal} toggle={toggleShow} handelAdd = {handelAdd} />
            )}
        </div>
    )
}
export default AddMovie