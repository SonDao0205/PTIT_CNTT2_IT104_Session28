export default function Bai10() {
  const listTasks: string[] = [];

  const addTask = (nameTask: string, listTask: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      const exist = listTask.find((element) => element === nameTask);
      if (exist) return resolve("exist");
      listTask.push(nameTask);
      return resolve("none");
    });
  };

  const deleteTask = (
    nameTask: string,
    listTask: string[]
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const taskIndex = listTask.findIndex((element) => element === nameTask);
      if (taskIndex === -1) return resolve("notFound");
      listTask.splice(taskIndex, 1);
      return resolve("none");
    });
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
    }
  };

  const runTasks = async () => {
    addTaskDisplay(await addTask("Đi học", listTasks));
    addTaskDisplay(await addTask("Đi chơi", listTasks));
    addTaskDisplay(await addTask("Đi ngủ", listTasks));
    addTaskDisplay(await addTask("Đi ngủ", listTasks));
    addTaskDisplay(await addTask("Đi ăn", listTasks));

    displayTask(listTasks);

    deleteTaskDisplay(await deleteTask("Đi chơi", listTasks));
    deleteTaskDisplay(await deleteTask("Đi làm", listTasks));

    displayTask(listTasks);
  };

  runTasks();

  return <div>Bai10</div>;
}
