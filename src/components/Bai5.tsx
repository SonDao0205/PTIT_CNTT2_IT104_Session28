import { useEffect } from "react";

export default function Bai5() {
  const checkCondition = (
    condition: boolean,
    callback: (result: boolean) => void
  ): void => {
    setInterval(() => {
      callback(condition);
    }, 1000);
  };

  const display = (result: boolean): void => {
    console.log(`Điều kiện trả về: ${result}`);
  };

  useEffect(() => {
    checkCondition(true, display);
  }, []);

  return <div>Bai5</div>;
}
