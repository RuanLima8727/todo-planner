import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import typeIcons from '../../utils/typeIcons';
import calendar from '../../assets/calendar.png';
import clock from '../../assets/clock.png';
import api from '../../services/api';
import PropTypes from 'prop-types';
//import { set } from 'date-fns';


function Task ({match}) {

    const [lateCount, setLateCount] = useState('0');
   
    const [done, setDone] = useState(false);
    const [macaddress] = useState('11:11:11:11:11:11');
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    
    async function loadLate() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then((response)=>{
            setLateCount(`${response.data.length}`)
        })
    }

    async function loadTaskDetails() {
        await api.get(`/task/${match.params.id}`)
        .then(response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(new Date(response.data.date))
            setHour(new Date(response.data.hour))
        })
    }

    async function save() {
        await api.post(
            '/task',
            {
                macaddress,
                type,
                title,
                description,
                when : `${date}T${hour}:00.000`
            }
        ).then(()=>{alert('TAREFA CADASTRADA COM SUCESSO')})
    }
useEffect(()=>{loadLate(), loadTaskDetails()}, []);
return (
    <S.Container>
        <Header lateCount={lateCount}/>
        <S.ContentContainer>        
            <S.Icons>
            {typeIcons.map((icon, index)=>{ 
                if (index > 0 ) {              
                    return(
                    <button type="button" onClick={()=>{setType(index)}}>
                        <img src={icon} key={index} alt="icone de tarefa" 
                        className={type && type != index && 'inative' }
                       />
                    </button>
                    )
                }
                    }
                )
            }
            </S.Icons>
            <S.FormContainer>
                <S.Form action="/action_page.php">
                    <label htmlFor="fname">Título</label>
                    <input type="text" id="fname" name="fname" value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}/>

                    <label htmlFor="lname">Descrição</label>
                    <textarea type="textArea" id="lname" name="lname" value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}/>

                    <S.SomeInputsStyle>
                        <label htmlFor="fname">Data</label>
                        <input type="date" id="fname" name="fname" placeholder="Data da tarefa"
                            onChange={(e)=>{setDate(e.target.value)}} value={date}/>
                        <img src={calendar} alt="Icone de calendário"/>
                    </S.SomeInputsStyle>

                    <S.SomeInputsStyle>
                        <label htmlFor="fname">Hora</label>
                        <input type="time" id="fname" name="fname" placeholder="Hora da tarefa"
                            onChange={(e)=>{setHour(e.target.value)}} value={hour}/>
                        <img src={clock} alt="Icone de relógio"/>
   
                    </S.SomeInputsStyle>

                    <div>
                        <div>
                            <input type="checkbox" name="isDone" value={done} checked={done}
                                onChange={()=>{setDone(!done)}} />
                            <label id="isDoneLabel" htmlFor="isDone" >Concluído</label>
                        </div>
                        <p id="excludeText">Excluir</p>
                    </div>
                    <button type="button" onClick={save}>CRIAR</button>
                </S.Form>
            </S.FormContainer> 
        </S.ContentContainer>
        <Footer/>
    </S.Container>
)
}
Task.propTypes = {
    match: PropTypes.object.isRequired,
  }

export default Task;