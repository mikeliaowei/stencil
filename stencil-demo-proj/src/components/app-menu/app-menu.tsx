import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  shadow: true,
})
export class AppMenu {

  render() {
    return (
      <ul>
        <li>
          <stencil-route-link
            router="#router"
            url="/"
            activeClass="active"
            exact={true}
          >
            Home
          </stencil-route-link>
        </li>
        <li>
          <stencil-route
            router="#router"
            url="/todos"
            activeClass="active"
            component="todo-list"
          >
            Todos
          </stencil-route>
        </li>
        <li>
          <stencil-route-link
            router="#router"
            url="/about"
            activeClass="active"
          >
            About
          </stencil-route-link>
        </li>
        <li>
          <stencil-route-link
            router="#router"
            url="/contact"
            activeClass="active"
          >
            Contact
          </stencil-route-link>
        </li>
      </ul>
    );
  }

}
