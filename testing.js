const testing = {
  name: "Oluwatobi",
  lastName: "Wilson",
  address: {
    state: "Oyo State",
    city: "Ibadan",
  },
  married: true,
  testingFunc: function () {
    return testing.address.city;
  },
};

console.log(testing.name + " lives in " + testing.testingFunc());

const {
  name,
  married,
  address: { state, city },
} = testing;

console.log(name, married, city);

console.log(Object.values(testing));

const map = new Map([
  ["Titlte", "Tobby Wilson"],
  ["Body", "This is Tobby's details"],
]);

map.set("Details", "He is a dagbana");

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

function test(value) {
  console.log(value.split("").reverse().join(""));
}

function person(name, callback) {
  fullName = `${name} Willson`;
  callback(fullName);
}

person("Tobby", test);
person("Tobby", (testNew) => {
  console.log(testNew);
});

const posts = [
  {
    title: "Post one",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is Post two",
  },
];

function ogpost() {
  posts.forEach((item) => {
    setTimeout(() => {
      console.log(item.title);
    }, 1000);
  });
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is Post three" }, ogpost);

const getPosts = new Promise((resolve, reject) => {
  resolve("Good, you are doing well");
});

console.log(getPosts);

getPosts.then((res) => console.log(res));
