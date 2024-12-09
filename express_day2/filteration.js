function filterr(cat, result) {
    var filtereddata = result.filter((val, ind) => {
      return val.category == cat;
    });
  
    return filtereddata;
  }
  
  module.exports = { filterr };