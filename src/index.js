import todo from "./todo";
import project from "./project";
import { format } from 'date-fns';

let projectList = localStorage.getItem('projectList');

const content = document.querySelector("#content");

const menu = document.createElement("ul");

const tab = document.createElement("div");
tab.classList.add("tab");

const projects = document.createElement("li");
projects.addEventListener("click", (e) => {
    tab.innerHTML = "";

    projectList.forEach(elem => {
        const project = document.createElement("div");

        const title = document.createElement("h2");
        title.classList.add("project-title");
        title.innerText = elem.title;
        project.appendChild(title);

        const todoList = document.createElement("ul");
        todoList.classList.add("todo-list");

        elem.todos.forEach(todoElem => {
            const todoLi = document.createElement("li");
            todoLi.classList.add("todo-li");

            const todoLiTitle = document.createElement("div");
            todoLiTitle = todoElem.title;
            todoLi.appendChild(todoLiTitle);

            const todoLiDescription = document.createElement("div");
            todoLiDescription = todoElem.description;
            todoLi.appendChild(todoLiDescription);

            const todoLiDueDate = document.createElement("div");
            todoLiDueDate = format(todoElem.dueDate, "MMM d, yyyy");
            todoLi.appendChild(todoLiDueDate);

            const todoLiPriority = document.createElement("div");
            todoLiPriority = todoElem.priority;
            todoLi.appendChild(todoLiPriority);

            todoList.appendChild(todoLi);
        });

        project.appendChild(todoList);
    });
});

const newProjectDiv = document.createElement("div");
newProjectDiv.classList.add("new-project-div");

const newProjectTitle = document.createElement("input");
newProjectTitle.setAttribute("type", "text");

const newProjectButton = document.createElement('button');
newProjectButton.innerText = "New project";
newProjectButton.addEventListener("click", (e) => {
    const projectToCreate = project(newProjectTitle.value);
    let storedProjects = JSON.parse(localStorage.getItem("projectList"));
    storedProjects.push(projectToCreate);
    localStorage.setItem("projectList", JSON.stringify(storedProjects));
});

newProjectDiv.appendChild(newProjectTitle);
newProjectDiv.appendChild(newProjectButton);