import todo from "./todo";
import project from "./project";
import { format } from "date-fns";
import css from "./styles.css";

localStorage.clear();
localStorage.setItem("projects", JSON.stringify([]));
let projectList = JSON.parse(localStorage.getItem("projects"));

const content = document.querySelector("#content");

const menuNav = document.createElement("nav");
const menuUL = document.createElement("ul");

const tab = document.createElement("div");
tab.classList.add("tab");

const createProjectList = function () {
  const projectListElem = document.createElement("div");
  projectListElem.classList.add("project-list");

  projectList = JSON.parse(localStorage.getItem("projects"));

  projectList.forEach((elem) => {
    const project = document.createElement("div");

    project.innerText = elem.title;
    projectListElem.appendChild(project);

    const projectSelectButton = document.createElement("button");
    projectSelectButton.classList.add("select-button");
    projectSelectButton.addEventListener("click", (e) => {
      const todos = createProjectTodo(elem);
      tab.innerHTML = "";
      tab.appendChild(todos);
    });
    projectSelectButton.innerText = "Select";
    projectListElem.appendChild(projectSelectButton);

    const removeProjectButton = document.createElement("button");
    removeProjectButton.classList.add("select-button");
    removeProjectButton.innerText = "Remove";
    removeProjectButton.addEventListener("click", (e) => {
      const index = projectList.indexOf(project);

      projectList.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projectList));

      tab.innerHTML = "";
      tab.appendChild(createProjectList());
    });
    projectListElem.appendChild(removeProjectButton);
  });

  return projectListElem;
};

const createProjectTodo = function (project) {
  const projectTodo = document.createElement("div");
  projectTodo.classList.add("todo-list");

  const projectTodoListElem = document.createElement("ul");
  projectTodoListElem.classList.add("list");

  project.todos.forEach((elem) => {
    const todo = document.createElement("li");
    todo.classList.add("todo");

    const todoTitle = document.createElement("div");
    todoTitle.innerText = "Title: " + elem.title;
    todo.appendChild(todoTitle);

    const todoDescription = document.createElement("div");
    todoDescription.innerText = "Description: " + elem.description;
    todo.appendChild(todoDescription);

    const todoDate = document.createElement("div");
    todoDate.innerText = "Due date: " + elem.dueDate;
    todo.appendChild(todoDate);

    const todoPriority = document.createElement("div");
    todoPriority.innerText = "Priority: " + elem.priority;
    todo.appendChild(todoPriority);

    const editTodoModal = document.createElement("div");
    editTodoModal.classList.add("modal");
    editTodoModal.setAttribute("id", "edit-todo");
    const editTodoModalExit = document.createElement("button");
    editTodoModalExit.classList.add("modal-bg", "modal-exit");
    editTodoModal.appendChild(projectModalExit);
    const editTodoModalContainer = document.createElement("div");
    editTodoModalContainer.classList.add("modal-container");
    const editTodoModalExitButton = document.createElement("button");
    editTodoModalExitButton.classList.add(
      "modal-close",
      "modal-exit",
      "modal-button"
    );
    editTodoModalExitButton.innerText = "editTxit";
    editTodoModalContainer.appendChild(editTodoModalExitButton);
    const editTodoModalName = document.createElement("input");
    editTodoModalName.classList.add("modal-input");
    editTodoModalName.setAttribute("placeholder", "Todo name");
    editTodoModalName.setAttribute("value", elem.title);
    editTodoModal.appendChild(editTodoModalName);
    const editTodoModalDescription = document.createElement("input");
    editTodoModalDescription.classList.add("modal-input");
    editTodoModalDescription.setAttribute("placeholder", "Description");
    editTodoModalDescription.setAttribute("value", elem.description);
    editTodoModal.appendChild(editTodoModalDescription);
    const editTodoModalDateLabel = document.createElement("label");
    editTodoModalDateLabel.setAttribute("for", "due-date");
    editTodoModalDateLabel.innerText = "Due date";
    editTodoModal.appendChild(editTodoModalDateLabel);
    const editTodoModalDate = document.createElement("input");
    editTodoModalDate.setAttribute("type", "date");
    editTodoModalDate.setAttribute("id", "edit-todo-modal");
    editTodoModalDate.setAttribute("value", elem.dueDate);
    const editTodoModalPriority = document.createElement("input");
    editTodoModalPriority.setAttribute("type", "range");
    editTodoModalPriority.setAttribute("min", "0");
    editTodoModalPriority.setAttribute("max", "5");
    editTodoModalPriority.setAttribute("id", "edit-priority");
    editTodoModalPriority.setAttribute("value", elem.priority);
    editTodoModal.appendChild(editTodoModalPriority);
    const editTodoModalOK = document.createElement("button");
    editTodoModalOK.classList.add("modal-button");
    editTodoModalOK.innerText = "OK";
    editTodoModalOK.addEventListener("click", (e) => {
      elem.name = editTodoModalName.value;
      elem.description = editTodoModalDescription.value;
      elem.dueDate = editTodoModalDate.value;
      elem.priority = editTodoModalPriority.value;

      editTodoModal.classList.remove("open");

      // const currProject = projectList.filter(e => project === e)[0];
      // projectList.splice(projectList.indexOf(currProject));
      // currProject.todos.push(newTodo);
      // projectList.push(currProject);
      localStorage.setItem("projects", JSON.stringify(projectList));

      tab.innerHTML = "";
      printProjectTodos(currProject);
    });
    editTodoModal.appendChild(editTodoModalOK);
    content.appendChild(editTodoModal);

    const removeTodoButton = document.createElement("button");
    removeTodoButton.classList.add("select-button");
    removeTodoButton.innerText = "Remove";
    removeTodoButton.addEventListener("click", (e) => {
      let projectInList = projectList.filter((el) => el == project)[0];
      const index = projectInList.todos.indexOf(elem);
      if (index != -1) {
        projectInList.todos.splice(index, 1);
      }
      localStorage.setItem("projects", JSON.stringify(projectList));

      const todos = createProjectTodo(projectInList);
      tab.replaceChild(todos, tab.childNodes[0]);
    });
    todo.appendChild(removeTodoButton);

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", (e) => {
      e.preventDefault();
      editTodoModal.classList.add("open");
      editTodoModalExitButton.addEventListener("click", (e) => {
        e.preventDefault();
        editTodoModal.classList.remove("open");
      });
    });
    todo.appendChild(editButton);

    projectTodoListElem.appendChild(todo);
  });
  projectTodo.appendChild(projectTodoListElem);

  const todoModal = document.createElement("div");
  todoModal.classList.add("modal");
  todoModal.setAttribute("id", "create-todo");
  const todoModalExit = document.createElement("div");
  todoModalExit.classList.add("modal-bg", "modal-exit");
  todoModal.appendChild(projectModalExit);
  const todoModalContainer = document.createElement("div");
  todoModalContainer.classList.add("modal-container");
  const todoModalExitButton = document.createElement("button");
  todoModalExitButton.classList.add(
    "modal-close",
    "modal-exit",
    "modal-button"
  );
  todoModalExitButton.innerText = "Exit";
  todoModalContainer.appendChild(todoModalExitButton);
  const todoModalName = document.createElement("input");
  todoModalName.classList.add("modal-input");
  todoModalName.setAttribute("placeholder", "Todo name");
  todoModal.appendChild(todoModalName);
  const todoModalDescription = document.createElement("input");
  todoModalDescription.classList.add("modal-input");
  todoModalDescription.setAttribute("placeholder", "Description");
  todoModal.appendChild(todoModalDescription);
  const todoModalDateLabel = document.createElement("label");
  todoModalDateLabel.setAttribute("for", "due-date");
  todoModalDateLabel.innerText = "Due date";
  todoModal.appendChild(todoModalDateLabel);
  const todoModalDate = document.createElement("input");
  todoModalDate.setAttribute("type", "date");
  todoModalDate.setAttribute("id", "due-date");
  todoModal.appendChild(todoModalDate);
  const todoModalPriorityLabel = document.createElement("label");
  todoModalPriorityLabel.setAttribute("for", "priority");
  todoModalPriorityLabel.innerText = "Priority";
  todoModal.appendChild(todoModalPriorityLabel);
  const todoModalPriority = document.createElement("input");
  todoModalPriority.setAttribute("type", "range");
  todoModalPriority.setAttribute("min", "0");
  todoModalPriority.setAttribute("max", "5");
  todoModalPriority.setAttribute("id", "priority");
  todoModal.appendChild(todoModalPriority);
  const todoModalOK = document.createElement("button");
  todoModalOK.classList.add("modal-button");
  todoModalOK.innerText = "OK";
  todoModalOK.addEventListener("click", (e) => {
    const name = todoModalName.value;
    const description = todoModalDescription.value;
    const dueDate = todoModalDate.value;
    const priority = todoModalPriority.value;

    todoModal.classList.remove("open");

    const newTodo = todo(name, description, dueDate, priority);
    const currProject = projectList.filter((e) => project === e)[0];
    projectList.splice(projectList.indexOf(currProject));
    currProject.todos.push(newTodo);
    projectList.push(currProject);
    localStorage.setItem("projects", JSON.stringify(projectList));

    tab.innerHTML = "";
    printProjectTodos(currProject);
  });
  todoModal.appendChild(todoModalOK);
  content.appendChild(todoModal);

  const createTodoButton = document.createElement("button");
  createTodoButton.innerText = "New Todo";
  createTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    todoModal.classList.add("open");
    todoModalExitButton.addEventListener("click", (e) => {
      e.preventDefault();
      todotModal.classList.remove("open");
    });
  });
  projectTodo.appendChild(createTodoButton);

  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    tab.innerText = "";

    const projects = createProjectList();
    tab.appendChild(projects);
  });
  projectTodo.appendChild(backButton);

  return projectTodo;
};

const printProjectTodos = function (project) {
  const todos = createProjectTodo(project);

  tab.innerHTML = "";
  tab.appendChild(todos);
};

const createProjectLinkLI = document.createElement("li");
const createProjectLink = document.createElement("a");
createProjectLink.innerText = "Create New Project";
createProjectLink.setAttribute("data-modal", "create-project");

const projectModal = document.createElement("div");
projectModal.classList.add("modal");
projectModal.setAttribute("id", "create-project");
const projectModalExit = document.createElement("div");
projectModalExit.classList.add("modal-bg", "modal-exit");
projectModal.appendChild(projectModalExit);
const projectModalContainer = document.createElement("div");
projectModalContainer.classList.add("modal-container");
const projectModalExitButton = document.createElement("button");
projectModalExitButton.classList.add(
  "modal-close",
  "modal-exit",
  "modal-button"
);
projectModalExitButton.innerText = "Exit";
projectModalContainer.appendChild(projectModalExitButton);
const projectModalName = document.createElement("input");
projectModalName.classList.add("modal-input");
projectModalName.setAttribute("placeholder", "Project name");
projectModal.appendChild(projectModalName);
const projectModalOK = document.createElement("button");
projectModalOK.classList.add("modal-button");
projectModalOK.innerText = "OK";
projectModalOK.addEventListener("click", (e) => {
  e.preventDefault();
  const newProject = project(projectModalName.value);
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  storedProjects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(storedProjects));

  projectModal.classList.remove("open");

  projectList = JSON.parse(localStorage.getItem("projects"));

  projectModalName.value = "";

  tab.innerHTML = "";
  tab.appendChild(createProjectList());
  content.appendChild(tab);
});
projectModal.appendChild(projectModalOK);
projectModal.appendChild(projectModalContainer);

createProjectLink.addEventListener("click", (e) => {
  e.preventDefault();
  tab.innerHTML = "";
  projectModal.classList.add("open");
  projectModalExitButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectModal.classList.remove("open");
  });
});

createProjectLinkLI.appendChild(createProjectLink);
menuUL.appendChild(createProjectLinkLI);
menuNav.appendChild(menuUL);
content.appendChild(menuNav);
content.appendChild(projectModal);
