export default function Bai10() {
  const listTasks: string[] = [];
  const addTask = (
    nameTask: string,
    listTask: string[],
    callback: (error: string) => void
  ): void => {
    const exist = listTask.find((element) => element === nameTask);
    if (exist) return callback("exist");
    listTask.push(nameTask);
    return callback("none");
  };

  const deleteTask = (
    nameTask: string,
    listTask: string[],
    callback: (error: string) => void
  ): void => {
    const taskIndex = listTask.findIndex((element) => element === nameTask);
    if (taskIndex === -1) return callback("notFound");
    listTask.splice(taskIndex, 1);
    return callback("none");
  };

  const displayTask = (listTask: string[]): void => {
    listTask.forEach((element, index) => {
      console.log(`${index}, ${element}`);
    });
  };

  const addTaskDisplay = (error: string): void => {
    switch (error) {
      case "none":
        console.log(`Thêm task thành công`);
        break;
      case "exist":
        console.log(`Task đã tồn tại`);
        break;
      default:
        break;
    }
  };

  const deleteTaskDisplay = (error: string): void => {
    switch (error) {
      case "none":
        console.log(`Xoá task thành công`);
        break;
      case "notFound":
        console.log(`Không tìm thấy task`);
        break;
      default:
        break;
    }
  };

  addTask(`Đi học`, listTasks, addTaskDisplay);
  addTask(`Đi chơi`, listTasks, addTaskDisplay);
  addTask(`Đi ngủ`, listTasks, addTaskDisplay);
  addTask(`Đi ngủ`, listTasks, addTaskDisplay);
  addTask(`Đi ăn`, listTasks, addTaskDisplay);
  displayTask(listTasks);
  deleteTask("Đi chơi", listTasks, deleteTaskDisplay);
  deleteTask("Đi làm", listTasks, deleteTaskDisplay);
  displayTask(listTasks);

  return <div>Bai10</div>;
}
