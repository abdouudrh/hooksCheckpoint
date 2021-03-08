import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  InputGroup,
  Label,
  Input,
} from 'reactstrap'
const ModalComp = ({isOpen, toggle, handelAdd}) => {
    const [newMovie, setNewMovie] = useState ({
        title:'',
        posterUrl:'',
        description:'',
        rate:0
    })
    const onchangeHandler =(e) => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value}) 
    }
    const handleClick = (e) => {
        e.preventDefault()
        handelAdd(newMovie)
    }
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Add New Film
          </ModalHeader>
          <ModalBody>
            <InputGroup row>
                <label>
                    Title:
                </label>
                <input 
                type = 'text'
                name = 'title'
                placeholder = 'movie title'
                onChange ={onchangeHandler}/>
            </InputGroup>
            <InputGroup row>
                <label>
                    Poster:
                </label>
                <input 
                type = 'url'
                name = 'posterUrl'
                placeholder = 'Posterlink'
                onChange ={onchangeHandler}/>
            </InputGroup>
            <InputGroup row>
                <label>
                    Description:
                </label>
                <input 
                type = 'textarea'
                name = 'description'
                placeholder = 'movie description'
                onChange ={onchangeHandler}/>
            </InputGroup>
            <InputGroup row>
                <label>
                    Rate:
                </label>
                <input 
                type = 'text'
                name = 'rate'
                placeholder = 'rate the movie'
                onChange ={onchangeHandler}/>
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <button 
                color='primary'
                onClick = {(e)=>{
                handleClick(e)
                toggle()
            }}>
                Add
            </button>
            <button 
                color='secondary'
                onClick={toggle} >
            Cancel
            </button>
          </ModalFooter>
      </Modal>
    </div>
  );
}
ModalComp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    handelAdd: PropTypes.func.isRequired
}
export default ModalComp;