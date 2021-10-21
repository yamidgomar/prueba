const miFuncion = function(){
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('hiii')
        }else{
            reject('ooops')
        }
    })
}

miFuncion()
    .then((response) => console.log(response))
