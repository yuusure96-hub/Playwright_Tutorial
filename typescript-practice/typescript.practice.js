"use strict";
function age_Verification(age) {
    return `Your age is, ${age}!, this is correct?`;
}
console.log(age_Verification(21));
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'triangle':
            return 0.5 * shape.base * shape.height;
        default:
            // TypeScript knows this should never happen
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
