const project = function (title) {
    return {
        title,
        todos: [],
        addTodo: todo => {
            todos.push(todo);
        },
        changeTitle: title => {
            this.title = title;
        },
        removeTodo: todo => {
            todos.filter(e => e !== todo);
        }
    }
};

export default project;