export default function Calculate() {
  const calculate = (
    a: number,
    b: number,
    callback: (result: number) => void
  ): void => {
    const sum: number = a + b;
    callback(sum);
  };

  calculate(5, 7, (result: number) => {
    console.log("Kết quả là:", result);
  });
  return <div>Calculate</div>;
}
