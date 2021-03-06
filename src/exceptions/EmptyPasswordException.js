function EmptyPasswordException(message) {
  this.message = message;
  this.name = 'EmptyPasswordException';
}

EmptyPasswordException.prototype.toString = function () {
  return `${this.name}: ${this.message}`;
};

export default EmptyPasswordException;
