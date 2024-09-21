const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/user-info", (req, res) => {
  const {
    status,
    userID,
    collegeEmailID,
    collegeRollNumber,
    arrayfornumbers,
    arrayforalphabets,
  } = req.body;
  if (
    !status ||
    !userID ||
    !collegeEmailID ||
    !collegeRollNumber ||
    !arrayfornumbers ||
    !arrayforalphabets
  ) {
    res.status(400).json({ error: "Please give all the details" });
  }
  const highestAlphabet = arrayforalphabets.reduce(
    (max, curr) => (curr > max ? curr : max),
    arrayforalphabets[0]
  );

  res.json({
    status: status,
    userID: userID,
    collegeEmailID: collegeEmailID,
    collegeRollNumber: collegeRollNumber,
    arrayfornumbers: arrayfornumbers,
    arrayforalphabets: arrayforalphabets,
    highestAlphabet: highestAlphabet,
  });
});

app.get("/operation-code", (req, res) => {
  res.json({ operation_code: 12345 });
});
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
