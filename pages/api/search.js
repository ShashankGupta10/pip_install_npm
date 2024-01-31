import connectToDatabase from "@/lib/connect"
import NGO from "@/db/ngo.schema"

export default async function handler(req, res) {
    connectToDatabase();
    let user;
    console.log(req.body)
    let search = req.body.search
    search = search.toLowerCase()
    if (search === "all") {
        user = NGO.find({}, {causes: 1, _id: 0})
    }
    res.json(user)
}