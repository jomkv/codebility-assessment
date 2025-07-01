import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import Todo from "../models/Todo";
import { validateTitleInput, validateUpdateInput } from "../utils/validate";
import { TodoUpdateInput } from "../@types/todo.types";

// @desc    List all todos
// @route   GET /api/todos
// @access  Public
export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    data: await Todo.getAll(),
    message: "All todos fetched.",
  });
});

// @desc    Get a todo by its ID
// @route   GET /api/todos/:id
// @access  Public
export const getTodo = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await Todo.getById(id);

  if (!todo) {
    res.status(404);
    throw new Error("Todo not found.");
  }

  res.status(200).json({
    data: todo,
    message: "Todo fetched.",
  });
});

// @desc    Create a new todo
// @route   POST /api/todos
// @access  Public
export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;

  validateTitleInput(title, res);

  const newTodo = await Todo.create(title.trim());

  res.status(201).json({
    data: newTodo,
    message: "Todo created.",
  });
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const { id } = req.params;

  validateUpdateInput({ title, completed }, res);

  // Only include properties that are not undefined
  const updates: TodoUpdateInput = {};
  if (title !== undefined) updates.title = title;
  if (completed !== undefined) updates.completed = completed;

  const updatedTodo = await Todo.update(id, updates);

  if (!updatedTodo) {
    res.status(404);
    throw new Error("Todo not found.");
  }

  res.status(200).json({
    data: updatedTodo,
    message: "Todo updated.",
  });
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedTodo = await Todo.delete(id);

  if (!deletedTodo) {
    res.status(404);
    throw new Error("Todo not found.");
  }

  res.status(200).json({
    data: deletedTodo,
    message: "Todo deleted.",
  });
});
