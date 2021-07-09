const Index = () => {
  const handleTracking1 = () => {
    if (typeof window !== 'undefined') {
      const eventType = 'TRACKING_BTN';
      const eventProperties = {
        status: 'ok',
        button: 2,
        test: 'done'
      };
      window.MinuLogger.track(eventType, eventProperties);
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
      window.MinuLogger.track(eventType, eventProperties);
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
      window.MinuLogger.track(eventType, eventProperties);
    }
  };

  const handleDispatch = () => {
    if (typeof window !== 'undefined') {
      window.MinuLogger.dispatch();
    }
  };

  return (
    <>
      <script src='/js/event-pipe.js' />
      <div>
        <h1>Event Pipe Vanilla JS</h1>
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
