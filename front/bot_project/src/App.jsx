import React from 'react';
import SpeechToTextContainer from './SpeechToTextContainer';

const App = () => {
  const deepgramApiKey = 'b92a68265e5141e89b6af5ae607316e0fdecfe7a';  
  const flaskApiUrl = 'http://localhost:5000';   


  return (
    <div>
      <SpeechToTextContainer apiKey1={deepgramApiKey} flaskApiUrl={flaskApiUrl} />
    </div>
  );
};

export default App;
