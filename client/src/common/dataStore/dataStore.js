const STORE_KEY = 'ZOLT_STORAGE';

export class DataStore {

  static set(key, value) {

    if (!key) {
      return;
    }

    let zoltstorage = sessionStorage.getItem(STORE_KEY) || '{}';

    zoltstorage = JSON.parse(zoltstorage);
    zoltstorage[key] = value;

    sessionStorage.setItem(STORE_KEY, JSON.stringify(zoltstorage));
  }

  static get(key) {

    if (!key) {
      return;
    }

    let zoltstorage = sessionStorage.getItem(STORE_KEY) || '{}';
    zoltstorage = JSON.parse(zoltstorage);
    
    let val = zoltstorage[key];

    if (val === undefined || val === null) {

      let zoltstorage = localStorage.getItem(STORE_KEY) || '{}';
      zoltstorage = JSON.parse(zoltstorage);

      val = zoltstorage[key];
    }

    return val;
  }

  static clear(key) {

    if (!key) {
      return;
    }

    let zoltstorage = sessionStorage.getItem(STORE_KEY) || '{}';
    zoltstorage = JSON.parse(zoltstorage);

    delete zoltstorage[key];

    sessionStorage.setItem(STORE_KEY, JSON.stringify(zoltstorage));
  }

  static clearAll() {

    sessionStorage.removeItem(STORE_KEY);
    localStorage.removeItem(STORE_KEY);
  }

  static clonePersistingStore() {

    localStorage.setItem(
      STORE_KEY,
      sessionStorage.getItem('AON_STORAGE')
    );
  }
}