import connectToDatabase from "@/lib/connect";
import NGO from "@/db/ngo.schema";

export default async function handler(req, res) {
  await connectToDatabase();
  let causes = [];
  req.body.search = req.body.search.toLowerCase();

  if (req.body.search === "all") {
    let ngos = await NGO.find({}, { causes: 1, _id: 0 });
    ngos.map((user) => {
      user.causes.map((cause) => {
        causes.push(cause);
      });
    });
  } else {
    let ngos = await NGO.find({ "causes.location": req.body.search });
    ngos.map((user) => {
      user.causes.map((cause) => {
        causes.push(cause);
      });
    });
  }
  res.json(causes);
}
