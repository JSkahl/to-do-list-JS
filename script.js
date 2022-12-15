let text = document.querySelector('#new-task').value.trim();
const tasks = document.querySelector('.tasks');
const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', () => {

    let text = document.querySelector('.new-task');

    if (text.value === "") {
        
    } else {
        if (text === "") {
            alert(`Insert a task.`)
        } else {
            const divTask = document.createElement('li');
            divTask.classList.add('task-container')
        
            const checkboxTask = document.createElement('input');
            checkboxTask.type = 'checkbox';
            checkboxTask.classList.add('checkbox-task');
        
            const labelTask = document.createElement('label');
            labelTask.htmlFor = 'class'
            labelTask.classList.add('label-task');
            labelTask.innerHTML = text.value.trim();
        
            const btnEdit = document.createElement('button')
            btnEdit.classList.add('btn-edit-task')
            btnEdit.innerHTML = `Edit`
        
            const btnDlt = document.createElement('button')
            btnDlt.classList.add('btn-dlt-task');
            btnDlt.innerHTML = `Delet`
        
            divTask.appendChild(checkboxTask);
            divTask.appendChild(labelTask);
            divTask.appendChild(btnEdit)
            divTask.appendChild(btnDlt);
        
            tasks.appendChild(divTask);
            text.value = "";
        
           // Delet task
        
            btnDlt.addEventListener('click', () => removeList(btnDlt, divTask));
        
            const removeList = (btnDlt, divTask) => {
                let lists = document.querySelectorAll('.btn-dlt-task');
        
                for (let list of lists) {
                    if (list.isSameNode(btnDlt)) {
                        divTask.remove()
                    }
                }
            }
        
            // Edit task
        
            btnEdit.addEventListener('click', () => {
                
            })
        }
    }
})