/*const helloFunction = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('!hey')
        }else{
            reject('!opss')
        }
    })
}

helloFunction()
    .then(response => console.log(response))
    .then(() => console.log('!Hola como estas'))
    .catch(error => console.log(error))
*/

const saludar = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hii')
        } else {
            reject('oops')
        }
    })
}

saludar()
    .then(response => console.log(response))
    .then(() => console.log('hola como estas?'))
    .then(() => console.log('mi nombre es yamid'))

const array = [['hii','como'], 'are', 'you']
console.table(array)
