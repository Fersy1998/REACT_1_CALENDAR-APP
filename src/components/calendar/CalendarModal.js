import React, {useEffect, useState} from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './modal.css';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { clearActiveEvent, eventeAddNew, eventUpdated } from '../../actions/events';
//Diseño calendario
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
  Modal.setAppElement('#root');
  //Variables fechas del formulario
  const startDate=moment();
  const starClone=moment().add(1, 'hours');
  const init={
    title:'',
    notes:'',
    start:startDate.toDate(),
    end:starClone.toDate()
  
  }
export const CalendarModal = () => {
    const dispatch=useDispatch();
    const {modalOpen}=useSelector(state=>state.ui)
    
    const {activeEvent}=useSelector(state=>state.calendar)
  //Funciones para el manejo del formulario
    const [dateStart, setDateStart] = useState(startDate.toDate());
    const [dateEnd, setDateEnd] = useState(starClone.toDate());
    const [titleValid, settitleValid] = useState(true);
    
    const [formValues, setFormValues] = useState(init)
    const {title, notes, start, end}=formValues;
    
    useEffect(() => {
      if (activeEvent){
        setFormValues(activeEvent);
      }else{
        setFormValues(init);
      
      }
    }, [activeEvent, setFormValues])
    
    
    const handleInputChange=({target})=>{
    
      setFormValues({
        ...formValues,
        [target.name]:target.value
      
      })
    }
    const handleStartDateChange=(e)=>{
      setDateStart(e);
      setFormValues({
        ...formValues,
        start:e
      
      })
      console.log(e);
  }
    const HandleEndDateChange=(e)=>{
        setDateEnd(e);
        setFormValues({
          ...formValues,
          end:e
        
        })
        console.log(e);
    }
  
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        //console.log(formValues);
        const momentStart=moment(start);
        const momentEnd=moment(end); 
        //console.log(momentEnd)
        if(momentStart.isSameOrAfter(momentEnd)){
          Swal.fire('Error','la fecha final debe ser mayor', 'error');
        }
        if(title.trim().length<2){
          return settitleValid(false);
        }
        if(activeEvent){
          dispatch(eventUpdated(formValues));
        }else{
          dispatch(eventeAddNew({
            ...formValues,
            id:new Date().getTime(),
            user:{
              name:'Fersy',
              _id:1323443
            }
          
        }));
        }
        
        
        settitleValid(true);
        closeModal()
    }
    
    
    //Fin funciones del formulario
    
    
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
      
     const closeModal=()=>{
        dispatch(uiCloseModal());
        
        setFormValues(init);
        dispatch(clearActiveEvent());
     }
    
  return (
    <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className='modal'
        overlayClassName='modal-fondo'
      >
        <h1>{(activeEvent) ? 'Editar Evento' : 'Crear evento'}</h1>
<hr />
        <form className="container" onSubmit={handleSubmitForm}>
        
            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DateTimePicker onChange={handleStartDateChange}  className="form-control" name='start' value={dateStart}/>
            </div>
        
            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DateTimePicker onChange={HandleEndDateChange} className="form-control" name='end' value={dateEnd} minDate={dateStart}/>
            </div>
        
            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={`form-control ${!titleValid && 'is-invalid'}`}
                    placeholder="Título del evento"
                    name="title"
                    value={title}
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>
        
            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={notes}
                    onChange={handleInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>
        
            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>
        
        </form>
    </Modal>
  )
}
