type carBodytype = {material: string, state: string};
type tiresType = {airPressure: number, condition: string};
type engineType = {horsepower: number, oilDensity: number};
type diagnostics = {partName: string, runDiagnostics: ()=> string};

function createCar(
    carBody: carBodytype & diagnostics,
    tires: tiresType & diagnostics,
    engine: engineType & diagnostics

){

}

createCar(
    {material: 'aluminium', state: 'scratched', partName: 'carBody', runDiagnostics() {return this.partName}},
    {airPressure: 30, condition: 'needs change', partName: 'tires', runDiagnostics() {return this.partName}},
    {horsepower: 300, oilDensity: 780, partName: 'tires', runDiagnostics() {return this.partName}}

)