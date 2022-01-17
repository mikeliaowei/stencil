export default class TodoApiService
{
    constructor() {}

    async getTodoItems()
    {
        return new Promise((resolve, reject) => {
            // We fetch the API endpoint
            fetch('https://localhost:44310/api/todoitems', {
                method: 'GET',
                mode: 'no-cors'
            }).then((response) => {
              if (response.status !== 200) {
                // Not success
                resolve(response.text());
              } else {
                // success
                resolve(response.json());
              }
            }).catch(err => {
              // Service Error
              reject(err);
            });
          });
    }

    async addTodoItem(newTodoTitle)
    {
        return new Promise((resolve, reject) => {
            // We fetch the API endpoint
            fetch('https://localhost:44310/api/todoitems', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                body: JSON.stringify({
                    completed: false,
                    title: newTodoTitle
                    })
                })
                .then((response) => {
                    if (response.status !== 201) {
                        // Not success
                        resolve(response.text());
                    } else {
                        // success
                        resolve(response.json());
                    }
                    }).catch(err => {
                        // Service Error
                        reject(err);
                    });
            });
    }

    async deleteTodoItem(id)
    {
        return new Promise((resolve, reject) => {
            // We fetch the API endpoint
            fetch('https://localhost:44310/api/todoitems/' + id, {
                method: 'DELETE',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        }
                })
                .then((response) => {
                    if (response.status !== 204) {
                        // Not success
                        resolve(response.text());
                    } else {
                        // success
                        resolve(response.ok);
                    }
                    }).catch(err => {
                        // Service Error
                        reject(err);
                    });
            });
    }
}