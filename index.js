// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(names) {
  return name.map(function (name) {
    return Object.assign({}, { firstName: name.split(" ")[0], lastName: name.split(" ")[1] },);
  });
}
