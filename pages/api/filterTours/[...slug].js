import Tour from "../../../models/TourSchema";
import connectDB from "../../../utils/connectDB";

const handler = async (req, res, next) => {
  const { slug } = req.query;
  const aa = slug.map((e) => e.split("="));
  const querys = Object.fromEntries(aa);
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete querys[el]);
  console.log(querys);
  const db = await connectDB();
  if (req.method === "GET") {
    try {
      // console.log();
      const query = Tour.find(querys);

      const tours = await query;

      // console.log(tours);
      res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
          tours,
        },
      });
    } catch (error) {
      res.status(402).json({
        status: "fail",
        message: "smth went wrong",
        error: error,
      });
    }
  }
};

export default handler;
