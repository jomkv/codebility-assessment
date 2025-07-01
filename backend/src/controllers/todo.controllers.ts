import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// @desc    List all todos
// @route   GET /api/todos
// @access  Public
export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
  // TODO
});

// @desc    Get a todo by its ID
// @route   GET /api/todos/:id
// @access  Public
export const getTodo = asyncHandler(async (req: Request, res: Response) => {
  // TODO
});

// @desc    Create a new todo
// @route   POST /api/todos
// @access  Public
export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  // TODO
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  // TODO
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  // TODO
});
