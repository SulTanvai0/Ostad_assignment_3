//1) javascript For in loop
const fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet",
    isRipe: true
  };

  /* with out input a obj the function will retun "plase input a obj" .
    array or string etc will not work for input */
function printObjectProperties(input) {
    if(typeof input === "object" && input !== null){
        if (Object.keys(input).length === 0) {
            console.log("Object is empty");
          } else {
            for (let name in input) {
              console.log(`${name}: ${input[name]}`);
            }
          }
    }
    else{
        console.log("plase input a object");
    }
  }

  printObjectProperties (fruit);