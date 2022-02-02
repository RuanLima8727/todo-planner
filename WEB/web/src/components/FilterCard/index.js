import React from 'react';
import * as S from './styles';
import filter from '../../assets/filter.svg'
import PropTypes from 'prop-types';


function FilterCard(props) {
    return (
        <S.Container actived = {props.actived}>
            <S.FilterCard>
                <img src={filter} alt="Icone de filtro" />
                <p>{props.filterText}</p>
            </S.FilterCard>
        </S.Container>
    )
}

FilterCard.propTypes = {
    filterText: PropTypes.string.isRequired,
    actived: PropTypes.bool

  }
export default FilterCard;