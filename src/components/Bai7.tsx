export default function Bai7() {
  const array: number[] = [1, 2, 3, 4, 5, 6];
  const myForEach = (
    array: number[],
    callback: (element: number, index: number, array: number[]) => void
  ): void => {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };

  myForEach(array, (element: number, index: number, array: number[]) => {
    console.log(`Vị trí : ${index} | Phần tử : ${element} | Mảng : ${array}`);
  });
  return <div>Bai7</div>;
}
