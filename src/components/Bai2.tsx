export default function Bai2() {
  const delayedCallback = (callback: () => void, delayTime: number): void => {
    setTimeout(() => {
      callback();
    }, delayTime);
  };

  delayedCallback(() => {
    console.log(`Đã gọi`);
  }, 1000);
  return <div>Bai2</div>;
}
