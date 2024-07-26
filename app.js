document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    
    const coloredText = Array.from(taskText).map((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        return span;
    });
    coloredText.forEach(span => taskItem.appendChild(span));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'action-btn delete-btn';
    deleteBtn.textContent = 'حذف';
    deleteBtn.addEventListener('click', () => taskList.removeChild(taskItem));
    
    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit-btn';
    editBtn.textContent = 'ویرایش';
    editBtn.addEventListener('click', () => editTask(taskItem));

    const completeBtn = document.createElement('button');
    completeBtn.className = 'action-btn complete-btn';
    completeBtn.textContent = 'تکمیل';
    completeBtn.addEventListener('click', () => taskItem.classList.toggle('completed'));

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function editTask(taskItem) {
    const newTaskText = prompt('وظیفه جدید را وارد کنید:', taskItem.textContent.replace(/[\u200c-]/g, '').trim());
    if (newTaskText !== null) {
        taskItem.innerHTML = '';
        const coloredText = Array.from(newTaskText).map((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            return span;
        });
        coloredText.forEach(span => taskItem.appendChild(span));
        appendActionButtons(taskItem);
    }
}