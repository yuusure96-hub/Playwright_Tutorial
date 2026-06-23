function age_Verification(age: number): string {
	return `Your age is, ${age}!, this is correct?`;
}

console.log(age_Verification(21));

type Circle = { kind: 'circle', radius: number }
type Square = { kind: 'square', sideLength: number }
type Triangle = { kind: 'triangle', base: number, height: number }
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return 0.5 * shape.base * shape.height;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}