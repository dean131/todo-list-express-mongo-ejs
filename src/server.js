import "dotenv/config";
import app from "./app.js";

// Set port
const PORT = process.env.PORT || 3000;

// Listen to port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
