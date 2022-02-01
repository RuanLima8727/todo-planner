import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Header (props) {
    return (
        <S.Container>
            <S.LeftSide>
                <Link to='/'>
                    <img src={logo} alt="Logo do site (ToDo)" id='logo'/>
                </Link>
            </S.LeftSide>
            <S.RightSide>
                <Link to='/'>Início</Link>
                <a href="https://www.google.com.br/">Sincronizar</a>
                <Link to='/task'>Nova Tarefa</Link>
                <button onClick={()=>{props.lateRender()}} id="notification">
                    <img src={bell} alt="Sino de notificações"/>
                    <span>{props.lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
} 
Header.propTypes = {
    lateCount: PropTypes.string.isRequired,
    lateRender: PropTypes.func
  }
export default Header;