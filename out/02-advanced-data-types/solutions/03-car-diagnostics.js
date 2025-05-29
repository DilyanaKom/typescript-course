"use strict";
function createCar(carBody, tires, engine) {
}
createCar({ material: 'aluminium', state: 'scratched', partName: 'carBody', runDiagnostics() { return this.partName; } }, { airPressure: 30, condition: 'needs change', partName: 'tires', runDiagnostics() { return this.partName; } }, { horsepower: 300, oilDensity: 780, partName: 'tires', runDiagnostics() { return this.partName; } });
//# sourceMappingURL=03-car-diagnostics.js.map