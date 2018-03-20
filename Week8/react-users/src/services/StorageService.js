const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, value)
}

const getLocalStorage = (key) => {
    
  return  localStorage.getItem(key) //returns value
}

// const getValue = (value) => {

//     if (value === "true") {
//         return true
//     }
//     return false

// }

export {
    setLocalStorage,
    getLocalStorage,
    // getValue 
};