import db from "../../../prisma/db";

const dummyBlogs = [
  {
    id: 1,
    title: "this my first title",
    body: "this my first body",
    banner: "https://picsum.photos/seed/ridhafiz/500/300",
  },
  {
    id: 2,
    title: "this my 2nd title",
    body: "this my 2nd body",
    banner: "https://picsum.photos/seed/utari/500/300",
  },
  {
    id: 3,
    title: "this my 3rd title",
    body: "this my 3rd body",
    banner: "https://picsum.photos/seed/shalua/500/300",
  },
];

export default async function handler(req, res) {
  // console.log(req.query);

  const result = await db.blogs.findMany();

  res.status(200).json({
    success: true,
    data: result,
  });
}
