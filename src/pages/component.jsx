import minuLogger from '../utils/minuLogger';

const Index = () => {
  const [track, dispatch] = minuLogger();

  const handleTracking1 = () => {
    if (typeof window !== 'undefined') {
      const eventType = 'TRACKING_BTN';
      const eventProperties = {
        status: 'ok',
        button: 2,
        test: 'done'
      };
      track(eventType, eventProperties);
    }
  };

  const handleTracking2 = () => {
    if (typeof window !== 'undefined') {
      const eventType = 'TRACKING_BTN';
      const eventProperties = {
        status: 'ok',
        button: 2,
        xablau: 'fine'
      };
      track(eventType, eventProperties);
    }
  };

  const handleTracking3 = () => {
    if (typeof window !== 'undefined') {
      const eventType = 'TRACKING_BTN';
      const eventProperties = {
        status: 'ok',
        button: 3,
        someValue: true
      };
      track(eventType, eventProperties);
    }
  };

  const handleDispatch = () => {
    if (typeof window !== 'undefined') {
      dispatch();
    }
  };

  return (
    <>
      <div>
        <h1>Event Pipe Component</h1>
        <div id='log' />
        <fieldset>
          <button type='button' onClick={handleTracking1}>Track 1</button>
          <button type='button' onClick={handleTracking2}>Track 2</button>
          <button type='button' onClick={handleTracking3}>Track 3</button>
        </fieldset>
        <fieldset>
          <button type='button' onClick={handleDispatch}>Enviar logs</button>
        </fieldset>
      </div>
    </>
  );
};

export default Index;
