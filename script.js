const car = {
   brend: "Opel",
   model: "Astra",
   year: 2008,
   avgSpeed: 110,
   fuelTank: 52,
   fuelConsumption: 6,
   drivers: [],
   getInfo: function() {
     console.log(`Бренд: ${this.brend}\nМодель: ${this.model}\nРік випуску: ${this.year}\nСередня швидкість: ${this.avgSpeed} km/h\nБак: ${this.fuelTank} liters\nВитрата палива на 100 km: ${this.fuelConsumption} liters\nВодії: ${this.drivers.join(", ")}`);
   },
   addDriver: function(driverName) {
     this.drivers.push(driverName);
     console.log(`Водія ${driverName} було додано до списку.`);
   },
   hasDriver: function(driverName) {
     if (this.drivers.includes(driverName)) {
       console.log(`Водій ${driverName} є у списку.`);
     } else {
       console.log(`Водія ${driverName} немає у списку.`);
     }
   },
   calculateTrip: function(distance) {
     const tripTime = distance / this.avgSpeed;
     const fuelNeeded = (distance / 100) * this.fuelConsumption;
     const refuelsNeeded = Math.ceil(fuelNeeded / this.fuelTank);
     const totalTripTime = tripTime + (refuelsNeeded * 1) + (Math.floor(tripTime / 4) * 1);
     console.log(`Подорож відстанню ${distance} км:\n- Займе часу ${totalTripTime.toFixed(1)} год.\n- ${fuelNeeded.toFixed(1)} л палива потрібно.\n- ${refuelsNeeded} кількість заправок.`);
   }
 };
 
 car.getInfo();
 car.addDriver("Тарас");
 car.hasDriver("Олег");
 car.hasDriver("Тарас");
 car.calculateTrip(5000);
