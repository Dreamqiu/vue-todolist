//localStorage 本地存储封装的过程,

/*  
存储在localStorage中的数据可以长期保留

*/

export function setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
export function getItem (key) {
    return JSON.parse(localStorage.getItem(key))
}
export function removeItem (key) {
    localStorage.removeItem(key)
}