class View {
	constructor () {
		this._bodyTask = null;
		this._entrytext = null;
		this._addTaskButton = null;

		this.init();
	}

	init = () => {	
		this._addTaskButton = document.getElementById('btnAdd');
		this._bodyTask = document.getElementById('wraperTasks');
		this._entrytext = document.getElementById('input_value');
		this._addTaskButton.addEventListener('click', this.createTask);
	};

	getValue = () => this._entrytext.value;

	createTask = () => {
		const inputText = this.getValue();
		const newLi = document.createElement('li');

		newLi.setAttribute('class', 'task');
		const newP = document.createElement('p');
		
		newP.setAttribute('class', 'task__text');
		newP.innerText = inputText;
		newLi.append(newP);
		this._bodyTask.append(newLi);
		this.clearInputValue();

		this.taskDone(newLi);
	};

	clearInputValue = () => {
			this._entrytext.value = '';
	};

	taskDone = (argument) => {
		argument.addEventListener('click', () => {
			argument.classList.toggle('done');
		});
	}
};


const todo = new View();
