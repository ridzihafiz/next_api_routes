import db from "../../../prisma/db";

export default async function handler(req, res) {
  // jika req method bukan POST maka return error
  if (req.method !== "POST") {
    return res.status(404).json({
      success: false,
      message: "error not found",
    });
  }

  const createdBlog = await db.blogs.create({
    data: req.body,
  });

  res.status(201).json({
    success: true,
    message: "Data saved successfully",
    body: createdBlog,
  });
}
