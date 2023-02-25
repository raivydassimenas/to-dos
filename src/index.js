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
  const projectListElem = document.createElement("ul");
  projectListElem.classList.add("list");

  projectList = JSON.parse(localStorage.getItem("projects"));

  projectList.forEach((elem) => {
    const project = document.createElement("li");

    project.innerText = elem.title;

    const projectSelectButton = document.createElement("button");
    projectSelectButton.classList.add("select-button");
    projectSelectButton.addEventListener("click", (e) => {
      const todos = createProjectTodo(elem);
      tab.innerHTML = "";
      tab.appendChild(todos);
    });
    projectSelectButton.innerText = "Select";
    project.appendChild(projectSelectButton);

    projectListElem.appendChild(project);
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

    todo.innerText = elem.title;
    
    const removeTodoButton = document.createElement("button");
    removeTodoButton.classList.add("select-button");
    removeTodoButton.innerText("Remove");
    removeTodoButton.addEventListener("click", (e) => {
      projectList = JSON.parse(localStorage.getItem("projects"));
      let projectInList = projectList.filter((elem) => elem === project)[0];
      const index = projectInList.todos.indexOf(elem);
      if (index != -1) {
        projectInList.todos.splice(index, 1);
      }
      localStorage.setItem("projects", JSON.stringify(projecList));

      createProjectTodo(project);
    });
    todo.appendChild(removeTodoButton);

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
  todoModalExitButton.classList.add("modal-close", "modal-exit", "modal-button");
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
  const todoModalOK = document.createElement("button");
  todoModalOK.classList.add("modal-button");
  todoModalOK.innerText = "OK";
  todoModalOK.addEventListener("click", (e) => {
    const name = todoModalName.value;
    const description = todoModalDescription.value;

    todoModal.classList.remove("open");

    const newTodo = todo(name, description, null, null);
    const currProject = projectList.filter(e => project === e)[0];
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
  backButton.addEventListener("click", e => {
    e.preventDefault();
    tab.innerText = "";

    const projects = createProjectList();
    tab.appendChild(projects);
  });
  projectTodo.appendChild(backButton);

  return projectTodo;
};

const printProjectTodos = function(project) {
  const todos = createProjectTodo(project);

  tab.innerHTML = "";
  tab.appendChild(todos);
}

const todoDetails = function (todo) {
  const todoElem = document.createElement("div");
  todoElem.classList.add("todo-elem");

  const todoTitle = document.createElement("div");
  todoTitle = todo.title;
  todoElem.appendChild(todoTitle);

  const todoDescription = document.createElement("div");
  todoDescription = todo.description;
  todo.appendChild(todoDescription);

  const todoDueDate = document.createElement("div");
  todoDueDate = format(todo.dueDate, "MMM d, yyyy");
  todo.appendChild(todoDueDate);

  const todoPriority = document.createElement("div");
  todoPriority = todoElem.priority;
  todo.appendChild(todoPriority);

  return todo;
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
projectModalExitButton.classList.add("modal-close", "modal-exit", "modal-button");
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
