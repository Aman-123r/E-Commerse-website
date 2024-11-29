const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// .env फाइल को लोड करें
dotenv.config();

// JSON डेटा को हैंडल करने के लिए मिडलवेयर
app.use(express.json());

// राउटर इंपोर्ट करें
const frontend = require("./routers/frontendRoutes");

// MongoDB से कनेक्ट करें
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB से सफलतापूर्वक कनेक्ट हो गया");

    // सर्वर स्टार्ट करें
    app.listen(process.env.PORT || 8000, () => {
      console.log(`सर्वर पोर्ट ${process.env.PORT || 8000} पर चल रहा है`);
    });
  })
  .catch((error) => {
    console.log("MongoDB कनेक्शन फेल हो गया:", error);
  });


// स्टेटिक फाइल्स के लिए डायरेक्टरी सेट करें
app.use(express.static("Public"));

// API रूट्स सेट करें
app.use("/api", frontend);
