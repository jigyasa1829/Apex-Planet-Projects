class TodoApp {
            constructor() {
                this.todos = this.loadTodos();
                this.currentFilter = 'all';
                this.init();
            }

            init() {
                this.bindEvents();
                this.render();
                this.updateStats();
            }

            bindEvents() {
                const todoInput = document.getElementById('todoInput');
                const addBtn = document.getElementById('addBtn');
                const filterBtns = document.querySelectorAll('.filter-btn');
                const clearAllBtn = document.getElementById('clearAllBtn');

                addBtn.addEventListener('click', () => this.addTodo());
                todoInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addTodo();
                });

                filterBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        filterBtns.forEach(b => b.classList.remove('active'));
                        e.target.classList.add('active');
                        this.currentFilter = e.target.dataset.filter;
                        this.render();
                    });
                });

                clearAllBtn.addEventListener('click', () => this.clearAllTodos());
            }

            addTodo() {
                const input = document.getElementById('todoInput');
                const text = input.value.trim();

                if (!text) {
                    this.showAlert('Please enter a task!');
                    return;
                }

                const todo = {
                    id: Date.now(),
                    text: text,
                    completed: false,
                    createdAt: new Date().toLocaleString()
                };

                this.todos.unshift(todo);
                input.value = '';
                this.saveTodos();
                this.render();
                this.updateStats();
                this.showAlert('Task added successfully!', 'success');
            }

            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                    this.saveTodos();
                    this.render();
                    this.updateStats();
                }
            }

            deleteTodo(id) {
                if (confirm('Are you sure you want to delete this task?')) {
                    this.todos = this.todos.filter(t => t.id !== id);
                    this.saveTodos();
                    this.render();
                    this.updateStats();
                    this.showAlert('Task deleted!', 'error');
                }
            }

            clearAllTodos() {
                if (confirm('Are you sure you want to clear all tasks? This action cannot be undone.')) {
                    this.todos = [];
                    this.saveTodos();
                    this.render();
                    this.updateStats();
                    this.showAlert('All tasks cleared!', 'error');
                }
            }

            getFilteredTodos() {
                switch (this.currentFilter) {
                    case 'pending':
                        return this.todos.filter(t => !t.completed);
                    case 'completed':
                        return this.todos.filter(t => t.completed);
                    default:
                        return this.todos;
                }
            }

            render() {
                const todoList = document.getElementById('todoList');
                const clearAllBtn = document.getElementById('clearAllBtn');
                const filteredTodos = this.getFilteredTodos();

                clearAllBtn.style.display = this.todos.length > 0 ? 'block' : 'none';

                if (filteredTodos.length === 0) {
                    let message = 'No tasks yet. Add your first task above!';
                    if (this.currentFilter === 'pending') message = 'No pending tasks! 🎉';
                    if (this.currentFilter === 'completed') message = 'No completed tasks yet.';

                    todoList.innerHTML = `<div class="empty-state">${message}</div>`;
                    return;
                }

                todoList.innerHTML = filteredTodos.map(todo => `
                    <div class="todo-item ${todo.completed ? 'completed' : ''}">
                        <input type="checkbox" class="todo-checkbox" 
                               ${todo.completed ? 'checked' : ''} 
                               onchange="todoApp.toggleTodo(${todo.id})">
                        <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                        <div class="todo-date">${todo.createdAt}</div>
                        <button class="delete-btn" onclick="todoApp.deleteTodo(${todo.id})">
                            Delete
                        </button>
                    </div>
                `).join('');
            }

            updateStats() {
                const total = this.todos.length;
                const completed = this.todos.filter(t => t.completed).length;
                const pending = total - completed;

                document.getElementById('totalTasks').textContent = total;
                document.getElementById('completedTasks').textContent = completed;
                document.getElementById('pendingTasks').textContent = pending;
            }

            saveTodos() {
                try {
                    const data = JSON.stringify(this.todos);
                    // Note: Using a variable instead of localStorage for compatibility
                    window.todoData = data;
                } catch (error) {
                    console.error('Error saving todos:', error);
                }
            }

            loadTodos() {
                try {
                    // Note: Using a variable instead of localStorage for compatibility
                    const data = window.todoData || '[]';
                    return JSON.parse(data);
                } catch (error) {
                    console.error('Error loading todos:', error);
                    return [];
                }
            }

            escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }

            showAlert(message, type = 'info') {
                // Create temporary notification
                const alert = document.createElement('div');
                alert.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 20px;
                    border-radius: 10px;
                    color: white;
                    font-weight: bold;
                    z-index: 1000;
                    animation: slideInRight 0.3s ease;
                    background: ${type === 'success' ? 'linear-gradient(45deg, #4caf50, #45a049)' : 
                               type === 'error' ? 'linear-gradient(45deg, #f44336, #d32f2f)' : 
                               'linear-gradient(45deg, #2196f3, #1976d2)'};
                `;
                alert.textContent = message;
                document.body.appendChild(alert);

                setTimeout(() => {
                    alert.style.animation = 'slideOutRight 0.3s ease forwards';
                    setTimeout(() => alert.remove(), 300);
                }, 2000);
            }
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Initialize the app
        const todoApp = new TodoApp()