// 1. Copy and paste your prototype in here and refactor into class syntax.
 class CubiodMaker{
     constructor (value){
         this.length = value.length;
         this.width = value.width;
         this.height = value.height;
     }
     volume(){
         return (this.length * this.width * this.height);

     }
     surfaceArea(){
        return (2 * (this.length * (this.width + this.height) + (this.width * this.height)))
     }

 }
 const cubiod = new CubiodMaker({
     length:4,
     width:5,
     height:5
    })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubiod.volume()); // 100
console.log(cubiod.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CubiodMaker {
    volume(){
        return Math.pow(this.length , 3);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}
const cube = new CubeMaker({
    length:5
});

console.log(cube.volume())
console.log(cube.surfaceArea())
