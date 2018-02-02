export default class Storage {
    static get(key){
       return  window.localStorage.getItem(key)
    }

    static set(key,value){
        return window.localStorage.setItem(key,value)
    }

    static remove(key) {
        window.localStorage.removeItem(key)
    }
}