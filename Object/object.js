function car (make , model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const mycar = new car ("Abhinav" , "php" , 2022);
  
  for (property in mycar ) {
    console.log(`${property}: ${mycar[property]}`)
  }
  
  Object.defineProperties (mycar , {
    brand  : {
    name : "abhinav",
    logo : "mustang"
  }
  })
  console.log (Object.keys(mycar))
  console.log (Object.getOwnPropertyNames(mycar))