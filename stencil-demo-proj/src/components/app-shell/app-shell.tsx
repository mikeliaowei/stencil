import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-shell'
})

export class AppComponent {
  render() {
    return [

      <app-menu />,

      <stencil-router id="router">
        <stencil-route
          url="/"
          component="app-home"
          router="#router"
          exact={true}
        />
        <stencil-route
          url="/todos"
          component="todo-list"
          router="#router"
        />
        <stencil-route
          url="/about"
          component=""
          router="#router"
        />
      </stencil-router>
    ];
  }
}