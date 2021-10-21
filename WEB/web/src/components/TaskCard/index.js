import React, { useMemo } from 'react';
import * as S from './styles';
import TaskIcon from '../../assets/food.png';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TaskCard(props) {
    const date = useMemo(()=>format(new Date(props.taskData.when), 'dd/MM/yyyy'))
    const hour = useMemo(()=>format(new Date(props.taskData.when), 'HH:mm'));
    return(
        <S.Container>
            <S.IconContainer>
                <img src={TaskIcon} alt="Icone da Tarefa em questão" />
                <h3>{props.taskData.tittle}</h3>
            </S.IconContainer>
            <S.InfoContainer>
                <p>{date}</p>
                <p style={{ color : "#161313", opacity : "70%"}}>{hour}</p>
            </S.InfoContainer>
        </S.Container>
    )
}

TaskCard.propTypes = {
    taskData: PropTypes.object   

  }

export default TaskCard;