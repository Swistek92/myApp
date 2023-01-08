import Tour from "../../../models/TourSchema";
import connectDB from "../../../utils/connectDB";

const handler = async (req, res, next) => {
  const { slug } = req.query;
  const db = await connectDB();
  // get one by ID
  if (req.method === "GET") {
    try {
      const tour = await Tour.findById(slug);
      res.status(200).json({
        status: "success",
        data: {
          tour,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: "smth went wrong",
        error: error,
      });
    }
  }
  // UPDATE ONE BY ID
  if (req.method === "PATCH") {
    try {
      const data = req.body;
      const tour = await Tour.findByIdAndUpdate(slug, data, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        status: "success",
        data: {
          tour,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: "smth went wrong",
        error: error,
      });
    }
  }
  // DELETE ONE BY ID

  if (req.method === "DELETE") {
    console.log("deleting");
    try {
      const data = req.body;
      const tour = await Tour.findByIdAndDelete(slug);

      res.status(204).end();
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: "smth went wrong",
        error: error,
      });
    }
  }
};

export default handler;
