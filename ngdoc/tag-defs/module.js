module.exports = function() {
  return {
    name: 'module',
    defaultFn: function(doc) {
      if ( doc.area === 'api' ) {
        // Calculate the module from the second segment of the file path
        // (the first being the area)
        return path.dirname(doc.file).split('/')[1];
      }
    }
  };
};