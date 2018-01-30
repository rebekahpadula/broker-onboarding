import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question9 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q9}
                AnswerComponent={
                    <Select options={UiState.A9Options} selectedValue={UiState.answers[8]} onChange={(event) => {UiState.answers[8] = event.target.value}}  />
                }
            />
        );
    }
}