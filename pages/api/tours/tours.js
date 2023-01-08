import Tour from "../../../models/TourSchema";
import connectDB from "../../../utils/connectDB";
const handler = async (req, res, next) => {
  const db = await connectDB();
  if (req.method === "GET") {
    try {
      const tours = await Tour.find();
      res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
          tours,
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

  if (req.method === "POST") {
    try {
      const newTour = await Tour.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "invalid data4444444444444",
        error: error,
      });
      console.log(error);
    }
  }
};

export default handler;
