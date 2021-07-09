import { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

const minuLogger = () => {
  const [pipe, setPipe] = useState([]);

  const track = (eventType, eventProperties = {}) => {
    if (!eventType) {
      return;
    }
    const newPipe = pipe;
    newPipe.push({
      eventType,
      eventProperties: {
        ...eventProperties,
        ISODate: new Date().toISOString()
      }
    });
    setPipe(newPipe);
  };

  const dispatch = () => {
    console.log('pipe', pipe);
    // somente para debug vusual, não aproveitar isso
    if (pipe.length) {
      const log = document.querySelector('#log');
      pipe.forEach((element) => {
        const node = document.createElement('code');
        const text = document.createTextNode(JSON.stringify(element));
        node.appendChild(text);
        log.appendChild(node);
      });
      // limpa pipe apenas se enviar algo
      setPipe([]);
    }
    // limpa pipe
    // setPipe([]);
  };

  useInterval(() => {
    console.log(`Sending ${pipe.length} events`);
    dispatch();
  }, 5000);

  return [track, dispatch];
};

export default minuLogger;
