// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 1,
        username: "ridhafiz",
      },
      {
        id: 1,
        username: "utariindah",
      },
      {
        id: 1,
        username: "shalua",
      },
    ],
  });
}
