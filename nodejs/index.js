import express from 'express';
import bp from 'body-parser';
const app = express()
const port = 8000
app.use(bp.json());

const users = [
  {
    id: 1,
    name: "orgil",
  },
  {
    id: 2,
    name: "aruinbold",
  },
  {
    id: 3,
    name: "batmunkh",
  },
  {
    id: 4,
    name: "batmunkh",
  },
  {
    id: 5,
    name: "batmunkh",
  },
  {
    id: 6,
    name: "batmunkh",
  },
]

app.get('/', (req, res) => {
  res.send({success: true, users: users}).end();
})

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const filteredUser = users.find((user) => user.id === parseInt(id));

  if (filteredUser) {
    res.send({ success: true, user: filteredUser });
  } else {
    res.send({ success: false, message: 'User not found' });
  }
});

app.post ('/', (req, res) => {
  const data = req.body;
  users.push(data);

  res.send({success: true, users: users}).end();
})

app.put('/:id', (req, res) => {
  const id = req.params.id;

  users.map((user) => {
    console.log(user.id, id);
    if (user.id === parseInt(id)){
      console.log(id);
      user.name = req.body.name;
    }
  })
  res.send({success: true, users: users}).end();
})

app.delete('/:id', (req, res) => {
  const id = req.params.id;

  const deleteUserId = users.findIndex((user) => user.id === parseInt(id));

  if (deleteUserId !== -1) {
    users.splice(deleteUserId, 1);
    res.send({ success: true, users: users });
  }

  res.send({success: true, users: users}).end();
})

app.listen(port, () => {
  console.log(`Example app listening on port`)
})