import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    
`;

export class Select extends React.PureComponent {
    render() {
        const {onChange, selectedValue, options} = this.props;

        return (
            <StyledSelect onChange={onChange}>
                <option disabled selected value> -- select an option -- </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </StyledSelect>
        );
    }
}