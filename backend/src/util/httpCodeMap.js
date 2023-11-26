const httpCodeMap = {
  INVALID_DATA: 422,
  SUCCESS: 200,
  CREATED: 201,
  CONFLICT: 409,
  NOT_FOUND: 404,
};
  
const getStatusCode = (status) => httpCodeMap[status] || 500;
  
module.exports = {
  getStatusCode,
};