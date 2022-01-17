import { Component, h, Prop, Event, EventEmitter, Watch} from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {
  @Prop({mutable: true}) todoId: number;
  @Prop({mutable: true}) todoTitle: string;
  @Prop({mutable: true}) completed: boolean;
  @Prop({mutable: true}) labelStyle: string = 'todo-item-label';
  
  @Event({bubbles:true, composed:true}) toggleComplete : EventEmitter<number>;
  onToggleComplete(id:number)
  {
    this.toggleComplete.emit(id);
    this.completed = !this.completed;
  }

  @Event({bubbles:true, composed:true}) deleteTodo : EventEmitter<number>;
  onDeleteTodo(id:number)
  {
    this.deleteTodo.emit(id);
  }

  @Watch('completed')
  watchcompletedHandler()
  {    
    if(this.completed)
    {
      this.labelStyle = "todo-item-label completed";
    }else{
      this.labelStyle = "todo-item-label";
    }
  }

  render() {
    return (
      <div class="todo-item">
        <div class="todo-item-left">
            <input type="checkbox" checked={this.completed} onClick={this.onToggleComplete.bind(this, this.todoId)}></input>
            <div class={this.labelStyle}>{this.todoTitle}</div>
        </div>
        <div class="remove-item" onClick={this.onDeleteTodo.bind(this, this.todoId)}>
            x
        </div>
    </div>
    );
  }

}
