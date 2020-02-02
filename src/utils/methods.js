export const getObjectArray = data => {
    var array = Object.keys(data).map(key => {
      return data[key];
    });
  
    return array;
  };