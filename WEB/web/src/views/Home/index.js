import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard'
import * as S from './styles'

function Home() {
    return (
        <S.Container>
            <Header />
            <S.FilterCardContainer>
                <FilterCard filterText="Todos" />
                <FilterCard filterText="Hoje" />
                <FilterCard filterText="Semana" />
                <FilterCard filterText="Mês" />
                <FilterCard filterText="Ano" />
            </S.FilterCardContainer>
            <Footer />
        </S.Container>
    )
}


export default Home;