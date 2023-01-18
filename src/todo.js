const todo = function (title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        complete: false,
        setComplete: () => {this.complete = true},
        setPriority: (newPriority) => {this.priority = newPriority},
        changeTitle: (newTitle) => {this.title = newTitle},
        changeDescription: (newDescription) => {this.description = newDescription},
    };
};

export default todo;
