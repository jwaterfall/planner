import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/connection";
import Tag from "../../../models/tag";

export default async function handlePosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        await connectToDatabase();
        const tags = await Tag.find();
        res.json(tags);
      } catch (err) {
        console.log(err);
        res.status(500).send("error");
      }
      break;
    case "PUT":
      try {
        await connectToDatabase();
        const tag = new Tag(req.body);
        await tag.save();
        res.json(tag);
      } catch (err) {
        console.log(err);
        res.status(500).send("error");
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
