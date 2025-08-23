import type { Request, Response } from "express";
import mongoose from "mongoose";
import { projectModel } from "../schemas/index.js";

export const postProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({
        error: "Request body is required and cannot be empty",
      });
    }

    const data = await projectModel.create(body);
    res.status(201).json(data);
  } catch (error: any) {
    console.error("Error creating product:", error);
    res.status(500).json({
      error: "Failed to create product",
      details: error.message,
    });
  }
};
