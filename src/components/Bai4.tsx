import { useEffect } from "react";

export default function Bai4() {
  const displayNumbers = (
    callback: (value: number) => void,
    time: number
  ): void => {
    let count: number = 1;
    setInterval(() => {
      callback(count);
      count++;
    }, time);
  };

  useEffect(() => {
    displayNumbers((value: number) => {
      console.log(`Số thứ tự: ${value}`);
    }, 1000);
  }, []);

  return <div>Bai4</div>;
}
