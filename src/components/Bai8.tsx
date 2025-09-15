export default function Bai8() {
  const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

  const myFilter = (
    array: number[],
    searchValue: number,
    callback: (result: number[]) => void
  ): void => {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchValue) {
        result.push(array[i]);
      }
    }
    callback(result);
  };

  myFilter(numbers, 2, (result) => {
    console.log(result);
  });
  return <div>Bai8</div>;
}
