import React from 'react';
import * as S from './styles';
import filter from '../../assets/filter.svg'

function FilterCard(props) {
    return (
        <S.Container>
            <S.FilterCard>
                <S.FilterIcon>
                    <img src={filter} alt="Icone de filtro" />
                </S.FilterIcon>

                <S.FilterText>
                    <p>{props.filterText}</p>
                </S.FilterText>
            </S.FilterCard>
        </S.Container>
    )
}
export default FilterCard;