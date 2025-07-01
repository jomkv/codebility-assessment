import { Todo as TodoType, TodoUpdateInput } from "../@types/todo.types";

/**
 * Dummy Model, meant to replicate common model behavior from common ORMs.
 * Stores todos in memory for demonstration and testing purposes.
 */
export default class Todo {
  private static index: number = 1;
  private static todos: TodoType[] = [];

  /**
   * Fetches all todos.
   *
   * @returns An array of all todos.
   */
  static getAll(): TodoType[] {
    return this.todos;
  }

  /**
   * Fetches a todo by its ID.
   *
   * @param id The ID of the todo to fetch.
   * @returns The todo if found, otherwise undefined.
   */
  static getById(id: string): TodoType | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  /**
   * Creates a new todo and appends it to the todos array.
   *
   * @param title The title of the todo to be created.
   * @returns The newly created todo.
   */
  static create(title: string): TodoType {
    const newTodo: TodoType = {
      id: String(this.index), // Auto-increment ID, starts at 1 instead of 0
      title,
      completed: false,
      createdAt: new Date(),
    };

    this.index++;
    this.todos.push(newTodo);
    return newTodo;
  }

  /**
   * Updates an existing todo with the provided properties.
   *
   * @param id The ID of the todo to update.
   * @param updates An object containing the fields to update (excluding 'id' and 'createdAt').
   * @returns The updated todo if found, otherwise undefined.
   */
  static update(id: string, updates: TodoUpdateInput): TodoType | undefined {
    const todo = this.getById(id);

    if (todo) {
      Object.assign(todo, updates);
    }

    return todo;
  }

  /**
   * Permanently deletes a todo.
   *
   * @param id The ID of the todo to be deleted.
   * @returns The deleted todo if found, otherwise undefined.
   */
  static delete(id: string): TodoType | undefined {
    const index = this.todos.findIndex((todo) => todo.id === id);
    const todo = this.todos[index];

    // If not found
    if (index === -1) {
      return undefined;
    }

    // Delete
    this.todos.splice(index, 1);
    return todo;
  }
}
