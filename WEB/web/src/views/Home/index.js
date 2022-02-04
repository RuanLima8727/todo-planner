import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard';
import * as S from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';


function Home() {
    
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState('0');

    async function loadTasks() {
       await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
       .then((response) => {
           setTasks(response.data)
       })
    }
    async function loadLate() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then((response)=>{
            setLateCount(response.data.length)
        })
    }
    function lateRender() {
        setFilterActived('late')
    }
     useEffect(() => { 
        loadTasks(), loadLate()   
    }, [filterActived])

    return (
        <S.Container>
            <Header lateCount={lateCount} lateRender={lateRender}/>
            <S.FilterCardContainer>
                <button type='button' onClick={()=>{setFilterActived('all')}}>
                    <FilterCard title='Todos' filterText="Todos" actived={filterActived == 'all'}/>
                </button>
                <button type='button' onClick={()=>{setFilterActived('today')}}>
                    <FilterCard title='Hoje' filterText="Hoje" actived={filterActived == 'today'} />
                </button>
                <button type='button' onClick={()=>{setFilterActived('week')}}>
                    <FilterCard title='Semana' filterText="Semana" actived={filterActived == 'week'} />
                </button>
                <button type='button' onClick={()=>{setFilterActived('month')}}>
                    <FilterCard title='Mês' filterText="Mês" actived={filterActived == 'month'} />
                </button>
                <button type='button' onClick={()=>{setFilterActived('year')}}>
                    <FilterCard title='Ano' filterText="Ano" actived={filterActived == 'year'} />
                </button>
            </S.FilterCardContainer>
            <S.Title>
                <h3>{filterActived == 'late'? 'Tarefas Atrasadas': 'Tarefas' }</h3>
            </S.Title>
            <S.TaskCardContainer tasksData={tasks}>
                {tasks.map((task) => {
                    return (
                        <Link to={`/task/${task._id}`} key={task._id}>
                            <TaskCard taskData={task} key={task._id}/>
                        </Link>
                    )
                })
                }
            </S.TaskCardContainer>
            <Footer />
        </S.Container>
    )
}


export default Home;
