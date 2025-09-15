export default function Bai3() {
  const array: number[] = [1, 2, 3, 4, 5];
  const processArray = (callback: (array: number[]) => void) => {
    setTimeout(() => {
      callback(array);
    }, 1000);
  };

  processArray((array) => {
    array.forEach((element, index) => {
      console.log(`Phần tử thứ ${index + 1} : ${element}`);
    });
  });
  return <div>Bai3</div>;
}
