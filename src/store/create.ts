// Largely copied from https://gomakethings.com/simple-reactive-data-stores-with-vanilla-javascript-and-proxies/

export default (data = {}, name = 'store') => {
  const emit = (type: string, detail: any) => {
    const event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail,
    });
    return document.dispatchEvent(event);
  };

  return new Proxy(data, {
    get: (target: any, prop: any) => target[prop],
    set: (target: any, prop: any, value: any) => {
      if (target[prop] === value) return true;
      target[prop] = value;
      emit(name, data);
      return true;
    },
    deleteProperty: (target: any, prop: any) => {
      delete target[prop];
      emit(name, data);
      return true;
    },
  });
};
