export const getObjectArray = data => {
    var array = Object.keys(data).map(key => {
      return data[key];
    })
  
    return array
  }

export const getLatestPrice = prices => {
  const recentDate = new Date(Math.max.apply(null, prices.map( price => {
    return new Date(price.date);
 })))

 const recentPrice = prices.filter( price => { 
  var date = new Date( price.date ); 
  return date.getTime() == recentDate.getTime();
})[0];

  return recentPrice
}