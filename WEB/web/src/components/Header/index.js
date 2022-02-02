import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header () {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo do site (ToDo)"/>
            </S.LeftSide>
            <S.RightSide>
                <a href="https://www.google.com.br/">Início</a>
                <a href="https://www.google.com.br/">Sincronizar</a>
                <a href="https://www.google.com.br/">Nova Tarefa</a>
                <a href="https://www.google.com.br/" id="notification">
                    <img src={bell} alt="Sino de notificações"/>
                    <span>5</span>
                </a>
                
            </S.RightSide>
        </S.Container>
    )
} 
export default Header;