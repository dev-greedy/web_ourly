// 1. mongoose 모듈 가져오기
const mongoose = require('mongoose');
// 2. testDB 세팅
mongoose
  .connect('mongodb://localhost:27017/testDB', {
	useNewUrlParser: true,
	useCreateIndex: true,
})
  .then(() => {
  	console.log("Connected to testDB!");
  })
  .catch((err) => {
  	console.log(err);
  });

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

const me = new User({
  name: "Mike",
  age: 27,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });