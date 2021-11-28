const addMessage = (user, message) => {
    
    //console.log(user)
    //console.log(message)
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.log('[messsgeControler] No hay usuario o mensaje.')
            reject('Los datos son incorrectos')
            return false
        }
        const fullmessage = {
            user,
            message,
            date:new Date()
        }

        console.log(fullmessage)
        resolve(fullmessage)
    })
}

module.exports = {
    addMessage,
}
