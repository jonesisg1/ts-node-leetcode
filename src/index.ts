import express from 'express';
import { postContainsDuplicate } from './containsDuplicates';
import { postAnagram } from './anagram';
import { postTwoSum } from './twoSum';

const app = express();
app.use(express.json());

app.get("/node", (req, res) => {
  const resText:string = 'Hello from app'
  res.send(resText);
})

postContainsDuplicate(app);
postAnagram(app);
postTwoSum(app);

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});