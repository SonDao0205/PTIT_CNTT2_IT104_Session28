export default function Bai6() {
  const tasks = (
    callback: () => void,
    time: number,
    next?: () => void
  ): void => {
    setTimeout(() => {
      callback();
      if (next) next();
    }, time);
  };

  const task1 = (): void => {
    console.log(`Task 1 được thực thi`);
  };
  const task2 = (): void => {
    console.log(`Task 2 được thực thi`);
  };
  const task3 = (): void => {
    console.log(`Task 3 được thực thi! Hoàn thành`);
  };

  tasks(task1, 1000, () => {
    tasks(task2, 1500, () => {
      tasks(task3, 2000);
    });
  });

  return <div>Bai6</div>;
}
