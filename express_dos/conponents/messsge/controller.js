function addMessage(user, message){
    //console.log(user)
    //console.log(message)
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageControler] no hay Mensaje o usuario')
            reject('Los dstos son incorrectos')
            return false
        }
        const fullMessage = {
            user:user,
            message:message,
            date: new Date()
        }

        console.log(fullMessage)
        resolve(fullMessage)
    })
    
}

module.exports = {
    addMessage,
};
