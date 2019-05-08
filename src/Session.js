import React, { useState } from 'react';
import Counter from './Counter';
import axios from 'axios';

function Session(props) {
  const config = props.config;
  const [session, setSession] = useState('');

  function startSession() {
    axios.post(`${config.baseUrl}/api/sessions`).then(function(response) {
      console.log(response);
      setSession(response.data);
    });
  }

  return (
    <div>
      <button onClick={() => startSession()}>Start new session</button>
      {session !== '' ? (
        <>
          <p>Session ID: {session}</p>
          <Counter sessionId={session} config={config} />
        </>
      ) : null}
    </div>
  );
}

export default Session;
