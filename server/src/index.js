const express = require("express");
const app = express();
const dbconnect = require("./config/database");

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
dbconnect();
cloudinaryConnect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    // Store in temp and generate a url accordingly
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//mount all the routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

//default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Express app is connected ${port}`);
});

//profile auth course section  resetpassword category  subSection payment  contactUS rating
