import mongoose from "mongoose";

// Creating the schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt and updatedAt
  }
);

// Create the model based off of the schema
const Note = mongoose.model("Note", noteSchema)

export default Note
