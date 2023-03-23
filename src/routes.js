const { addNoteHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
      method: 'GET',
      path: '/notes',
      handler: () => {},
    
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },

   
  module.exports = routes;
  module.exports = { addNoteHandler, getAllNotesHandler };