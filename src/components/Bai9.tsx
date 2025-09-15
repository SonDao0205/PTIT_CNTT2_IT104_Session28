export default function Bai9() {
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const myMap = (array: number[], callback: (array: number[]) => void) => {
    const result: number[] = [];
    array.forEach((element) => {
      result.push(element * 2);
    });
    callback(result);
  };

  myMap(numbers, (array) => {
    console.log(array);
  });
  return <div>Bai9</div>;
}
