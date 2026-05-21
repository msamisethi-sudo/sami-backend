class api_error extends Error{
constructor(
    codestatus,
    message= 'something went wrong',
    error = [],
    stack ="",


){
 super(message)
 this.codestatus = codestatus
 this.data = null
 this.message = message
 this.sucess = false
 this.error = error
 if(stack){
    this.stack = stack
 }else{
    Error.captureStackTrace(this,this.constructor)
 }
}



}

export {api_error}