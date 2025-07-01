import { Response } from "express";
import { TodoUpdateInput } from "../@types/todo.types";

/**
 * Validates title input for creating a todo.
 *
 * @param title The title of the todo from the request body.
 * @param res Express response object, used to set status code on error.
 * @throws Error containing details if title is invalid.
 */
export const validateTitleInput = (title: any, res: Response) => {
  if (typeof title !== "string" || title.trim().length === 0) {
    res.status(400);
    throw new Error(
      "Invalid input, 'title' is required and must be a non-empty string."
    );
  }
};

/**
 * Validates inputs for updating todo.
 *
 * @param updates An object containing the fields to update (excluding 'id' and 'createdAt').
 * @param res - Express response object, used to set status code on error.
 * @throws Error containing details if any input is invalid.
 */
export const validateUpdateInput = (
  updates: TodoUpdateInput,
  res: Response
) => {
  const { title, completed } = updates;

  // If title is provided AND type is not string OR empty
  if (
    title !== undefined && //
    (typeof title !== "string" || title.trim().length === 0)
  ) {
    res.status(400);
    throw new Error("Invalid input, 'title' must be a non-empty string.");
  }

  // If completed is provided AND type is not boolean
  if (completed !== undefined && typeof completed !== "boolean") {
    res.status(400);
    throw new Error("Invalid input, 'completed' must be a boolean.");
  }
};
