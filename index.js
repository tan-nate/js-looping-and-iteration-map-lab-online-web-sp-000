// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.prototype.map(function (driver) {
    driver.toLowerCase();
  });
}
