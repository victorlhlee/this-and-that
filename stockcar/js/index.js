window.onload = function (){

  var stockCar = { 
  model: 'Ford',
  year: 2015,
  automaticTransmission: true,
  driver: { name: 'Squishy Worm', age: 50 },
  passengers:
   [ { name: 'Jon', age: 19 },
     { name: 'Jason', age: 12 },
     { name: 'Tony', age: 21 },
     { name: 'Joe', age: 22 },
     { name: 'Jesse', age: 16 },
     { name: 'Nigel', age: 9 },
     { name: 'Kelli', age: 19 },
     { name: 'Marifel', age: 20 },
     { name: 'Victor', age: 15 } ] 
   };

   var mainElement = document.createElement('div');
   mainElement.id = 'main';
   document.body.appendChild(mainElement);

   var modelProp = document.createElement('div');
   modelProp.id = 'model';
   modelProp.innerHTML = stockCar.model;
   document.getElementById('main').appendChild(modelProp);

   var yearProp = document.createElement('div');
   yearProp.id = 'year';
   yearProp.innerHTML = stockCar.year;
   document.getElementById('main').appendChild(yearProp);

   var autoTran = document.createElement('div');
   autoTran.id = 'trans';
   autoTran.innerHTML = stockCar.automaticTransmission;
   document.getElementById('main').appendChild(autoTran);

   var driverProp = document.createElement('div');
   driverProp.id = 'driver';
   driverProp.innerHTML = [stockCar.driver.name, stockCar.driver.age];
   document.getElementById('main').appendChild(driverProp);

   for(var i = 0; i<stockCar.passengers.length; i++){
    console.log(stockCar.passengers[i]);
    console.log(stockCar.passengers[i].name);
    console.log(stockCar.passengers[i].age);


    var passengerList = stockCar.passengers[i];
    var nameList = stockCar.passengers[i].name;
    var ageList = stockCar.passengers[i].age;

   /* var nameElement = document.createElement('div');
    nameElement.id = 'name';
    nameElement.innerHTML = nameList;
    mainElement.appendChild(nameElement);*/

    var passengerElement = document.createElement('div');
    passengerElement.id = 'passengers';
    passengerElement.innerHTML = [nameList, ageList];
    mainElement.appendChild(passengerElement);


   }


};