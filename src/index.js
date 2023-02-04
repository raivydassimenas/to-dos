import todo from "./todo";
import project from "./project";
import { format } from 'date-fns';
import css from './styles.css';

let projectList = JSON.parse(localStorage.getItem('projectList'));

const content = document.querySelector("#content");

const menuNav = document.createElement("nav");
const menuUL = document.createElement("ul");


const tab = document.createElement("div");
tab.classList.add("tab");

const createProjectList = function () {
    const projectListElem = document.createElement('ul');

    projectList.forEach(elem => {
        const project = document.createElement("li");

        project.innerText = elem.title;
        project.appendChild(title);

        projectListElem.appendChild(project);
    });
    
    return projectListElem;
};

const createProjectTodoList = function(project) {
    const projectTodoListElem = document.createElement('ul');

    project.todos.forEach(elem => {
        const todo = document.createElement('li');

        todo.innerText = elem.title;
        projectTodoListElem.appendChild(todo);

        const removeTodoButton = document.createElement('button');
        removeTodoButton.addEventListener("click", e => {
            let projectInList = projectList.filter(elem => elem === project)[0];
            const index = projectInList.todos.indexOf(elem);
            if (index != -1) {
                projectInList.todos.splice(index);
            }
            localStorage.setItem("projectList", JSON.stringify(projecList));

            createProjectTodoList(project);
        })
    });

    return projectTodoListElem;
};

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
}

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
projectModalExitButton.classList.add("modal-close", "modal-exit");
projectModalExitButton.innerText = "X";
projectModalContainer.appendChild(projectModalExitButton);
projectModal.appendChild(projectModalContainer);

createProjectLink.addEventListener("click", e => {
    e.preventDefault();
    projectModal.classList.add("open");
    projectModalExitButton.addEventListener("click", e => {
        e.preventDefault();
        projectModal.classList.remove("open");
    });
});

createProjectLinkLI.appendChild(createProjectLink);
menuUL.appendChild(createProjectLinkLI);
menuNav.appendChild(menuUL);
content.appendChild(menuNav);
content.appendChild(projectModal);