let root = new Vue({
    el: '#root',
    data: {
        todos: [
            { text: 'Go shopping', completed: false },
            { text: 'Give', completed: false },
            { text: 'Clean Room', completed: false },
            { text: 'Dishes', completed: false },
            { text: 'Vacuum', completed: true },
            { text: 'Yoga', completed: false }
        ]
    },
    computed: {
        completedTasks() {
            return this.todos.filter(item => item.completed);
        },
        pendingTasks() {
            return this.todos.filter(item => !item.completed);
        }
    },
    methods: {
        addTodo() {
            this.todos.push({ text: this.newTodoText, completed: false });
            this.newTodoText = '';
        }
    }
});