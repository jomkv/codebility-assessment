export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

// Exclude id and createdAt, then make everything else optional
export type TodoUpdateInput = Partial<Omit<Todo, "id" | "createdAt">>;
