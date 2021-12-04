
class CustomAPIError extends Error{     //  a Custom API to handle errors
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports = { createCustomError, CustomAPIError }