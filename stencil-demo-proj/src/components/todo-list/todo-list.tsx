import { Component, h, Prop, State, Watch, Listen} from '@stencil/core';
import TodoApiService from '../../services/TodoApiService';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: false,
})
export class TodoList {

  @Prop({mutable: true}) newTitle: string;
  @State() todosRemaining: number;
  @State() currentFilter: string = 'all';
  @State() todos:any = [];
  @State() filteredTodos:any = [];

  private todoApiService = new TodoApiService();

  onUserInput(event: Event) {
    this.newTitle =(event.target as HTMLInputElement).value;
  }

  async addTodo(event:KeyboardEvent) {
    if(event.key === 'Enter'){
      // We fetch the API endpoint
      const response = await this.todoApiService.addTodoItem(this.newTitle);
      if(response)
      {
        this.todos = [response, ...this.todos];
        this.filteredTodos = this.todos;
      }

      this.newTitle = '';
    }
  }

   //if component is sibling, need target body
  //if component is child component, then we don't need target option
  @Listen('toggleComplete', {target:'body'})
  toggleCompleteHandler(event: CustomEvent<number>){
    const todoIndex = this.todos.findIndex(todo => todo.id === event.detail);
    const updatedTodo = {...this.todos[todoIndex], completed: !this.todos[todoIndex].completed};

    this.todos = [
        ...this.todos.slice(0, todoIndex),
        updatedTodo,
        ...this.todos.slice(todoIndex+1)
    ]
  }

  @Listen('deleteTodo', {target:'body'})
  async deleteTodoHandler(event: CustomEvent<string>){
    this.todos = this.todos.filter(todo => todo.id !== event.detail);

    this.todoApiService.deleteTodoItem(event.detail).then(response =>{
        console.log(response ? "Delete!" : "Can't delete this item");
    })

    this.filteredTodos = this.todos;
  }  

  componentWillLoad() {
    //this method is only called once, it's a good place to
    //load data asynchronously.
    return fetch('https://localhost:5001/api/todoitems')
      .then(response => response.json())
      .then(data => {
        this.todos = data;
        this.filteredTodos = this.todos;
      });
  }

  //will triger everytime any rendered state updates
  componentWillRender() {
    this.todosRemaining = this.filteredTodos.filter(todo => !todo.completed).length;
  }

  @Watch('currentFilter')
  watchCurrentFilterHandler()
  {    
    this.filteredTodos = this.currentFilter === 'all' ? this.todos : this.currentFilter == 'completed'
      ? this.todos.filter(todo => todo.completed)
      : this.todos.filter(todo => !todo.completed);
  }

  updateFilter(newFilter:string){
    this.currentFilter = newFilter;
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.filteredTodos = this.todos;
  }

  render() {
    return (
      <div>
        <div class="container">

        <h2>Stencil Todo Component</h2>

        <input type="text" class="todo-input" placeholder="Please Insert todo item..." value={this.newTitle} onInput={this.onUserInput.bind(this)} onKeyDown={this.addTodo.bind(this)}></input>
          {this.filteredTodos?.map(r =>(
            <div class="todo-item">
                <todo-item todoId={r.id} todoTitle={r.title} completed={r.completed}/> 
            </div>
          ))} 

          <div class="inner-container">
              <div><label><input class="inner-container-input" type="checkbox"/>Check All</label></div>
              <div>{this.todosRemaining} items left</div>
          </div>

          <div class="inner-container">
              <div>
                  <button class={this.currentFilter === 'all' ? 'active':''} onClick={this.updateFilter.bind(this, 'all')}>All</button>
                  <button class={this.currentFilter === 'active' ? 'active':''} onClick={this.updateFilter.bind(this, 'active')}>Active</button>
                  <button class={this.currentFilter === 'completed' ? 'active':''} onClick={this.updateFilter.bind(this, 'completed')}>Completed</button>
              </div>
              <dir>
                  <button onClick={this.clearCompleted.bind(this)}>Clear Completed</button>
              </dir>
          </div>

        </div>
      </div>     
    );
  }

}
