import React, { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import { Container, H1, TextWrapper, Wrapper } from './style';

function App() {
  const [autoCompleteInput, setAutoCompleteInput] = useState('');
  const [wordList, setWordList] = useState([{ id: 0, name: '' }]);

  const handleSubmit = (word: string) => {
    console.log(word, 'submit');
  };

  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <H1>국내 모든 임상시험 검색하고</H1>
          <br />
          <H1>온라인으로 참여하기</H1>
        </TextWrapper>

        <AutoComplete
          width="100%"
          autoCompleteInput={autoCompleteInput}
          setAutoCompleteInput={setAutoCompleteInput}
          wordList={wordList}
          setWordList={setWordList}
          handleSubmit={handleSubmit}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
