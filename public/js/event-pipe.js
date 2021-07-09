const MinuLogger = {
  getPipe() {
    if (!this.pipe) {
      this.pipe = [];
    }
    return this.pipe;
  },
  track(eventType, eventProperties = {}) {
    if (!eventType) {
      return;
    }
    const pipe = this.getPipe();
    pipe.push({
      eventType,
      eventProperties: {
        ...eventProperties,
        ISODate: new Date().toISOString()
      }
    });
  },
  dispatch() {
    const pipe = this.getPipe();
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
    }
    // limpa pipe
    this.pipe = [];
  },
  autoDispatch() {
    setInterval(() => {
      const pipe = this.getPipe();
      console.log(`Sending ${pipe.length} events`);
      this.dispatch();
    }, 5000);
  }
};

if (typeof window !== 'undefined') {
  window.MinuLogger = MinuLogger;
  window.MinuLogger.autoDispatch();
} else {
  console.error('MinuLogger works only in client side');
}
