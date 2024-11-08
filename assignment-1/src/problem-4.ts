{
  
    // Problem 4: Answer --->

    type Circle = {
        shape: 'circle';
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape:Shape):number   {
        if (shape.shape === 'circle') {
            let circleCal = parseFloat((Math.PI * (shape.radius * shape.radius)).toFixed(2));
            return circleCal;

        }
        else if (shape.shape === 'rectangle') {
            let rectangleCal = shape.width * shape.height;
            return rectangleCal;
        }
    }

    // const rectangle = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    // const circle = calculateShapeArea({ shape: "circle", radius: 5 });
    
    // console.log(rectangle)
    // console.log(circle)
   


}


