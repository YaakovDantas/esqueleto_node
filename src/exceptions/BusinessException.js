export default class BusinessException extends Error {  
  constructor (message, code) {
    super(message)
    Object.setPrototypeOf(this, BusinessException.prototype);
    this.name = this.constructor.name
    this.status = code
  }

  statusCode() {
    return this.status
  }
}