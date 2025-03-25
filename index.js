// Code your solution here
const drivers = ["Bobby", "Sammy", "Susan", "bobby"];
 
function findMatching(drivers, nameToMatch) {
    return drivers.filter(driver => 
      driver.toLowerCase() === nameToMatch.toLowerCase()
    );
  }
  function fuzzyMatch(drivers, letters){
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
    )
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  