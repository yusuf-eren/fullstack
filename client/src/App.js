import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import MessageQueue from './messaging/components/MessageQueue';
import messageQueue from './messaging/data/messageQueue.js';

function App() {
  const [messages, setMessages] = useState(
    window.localStorage.getItem('messages') || []
  );
  const [message, setMessage] = useState('');

  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const messageHandler = async (event) => {
    if (event.key && event.key !== 'Enter') return;

    const date = new Date().getTime();
    await new Promise(async (resolve, reject) => {
      try {
        const res = await axios
          .post('http://localhost:3001/api/send-message', {
            message: message.target.value,
          })
          .then((res) => res.data)
          .then((res) => {
            let localMessages = JSON.parse(
              window.localStorage.getItem('messages')
            );
            if (!localMessages) {
              window.localStorage.setItem(
                'messages',
                JSON.stringify([
                  { message: res.message, date, sender: 'client' },
                  res,
                ])
              );
            } else if (localMessages) {
              localMessages.push(
                { message: res.message, date, sender: 'client' },
                res
              );
              window.localStorage.setItem(
                'messages',
                JSON.stringify(localMessages)
              );
            }
          });
        setMessages(window.localStorage.getItem('messages'));
        document.querySelector('#message').value = '';
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="title">Echo Bot</div>
      <div className="box">
        {messages.length > 0 &&
          messageQueue(JSON.parse(messages)).map((s, index) => {
            return (
              <MessageQueue
                message={s.message}
                sender={s.sender}
                date={s.date}
                key={index}
              />
            );
          })}
        <div style={{ clear: 'both' }} ref={ref}></div>
      </div>

      <div className="typing-area">
        <div className="input-field">
          <input
            onChange={setMessage}
            onKeyDown={messageHandler}
            id="message"
            type="text"
            placeholder="Type your message"
            required
          />
          <button onClick={messageHandler}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
