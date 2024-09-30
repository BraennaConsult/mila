// "use client";

// import { useEffect } from 'react';
// import Intercom from '@intercom/messenger-js-sdk';

// const ChatPage = () => {
//   useEffect(() => {
//     Intercom({
//       app_id: 'buqv5sev'
//     });
//   }, []);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Snakk med FinAI ved å trykke på snakkeboblen</h1>
//     </div>
//   );
// };

// export default ChatPage;

"use client";

import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

const ChatPage = () => {
  useEffect(() => {
    
    Intercom({
      app_id: 'buqv5sev'
    });

    
    window.Intercom('showNewMessage');

    
    return () => {
      window.Intercom('shutdown');
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Snakk med FinAI ved å trykke på snakkeboblen</h1>
    </div>
  );
};

export default ChatPage;
