class api_responce {
    constructor(codestatus, data , message = "success"){
this.codestatus =codestatus
this.message = message
this.data = data
this.success = this.success < 400
    }
}
export {api_responce}