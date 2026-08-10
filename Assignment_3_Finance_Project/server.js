const router = require("express").Router();

const cors = require("cors");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transaction.routes");

const app = express();
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Routes
app.use("/api/transactions", transactionRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
