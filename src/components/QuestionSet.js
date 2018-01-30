import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledQuestionSet = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 20px;
    margin: 0 -20px;

    &:nth-child(2n) {
        background: #F7F7F7;
    }
`;

const Question = styled.div`
    margin-right: auto;
    flex: 1 1 0px;
    padding-right: 20px;
`;

const Answer = styled.div`
    max-width: 225px;
    flex: 0 0 225px;
    justify-content: flex-end;
`;

export class QuestionSet extends PureComponent {
    render() {
        const { question, AnswerComponent = null } = this.props;
        return (
            <StyledQuestionSet>
                <Question>{question}</Question>
                <Answer>{AnswerComponent}</Answer>
            </StyledQuestionSet>
        );
    }
}