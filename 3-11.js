function User(name) {
    this.name = name;
}

function Article(name,text) {
    this.name = name;
    this.name = text;
};

let user = new User("Alex");
console.log(user);

Object.defineProperty(user, "id", {
    value: 1,
    writable: false,
});

user.getInfo = function () {
    return `User ${this.name} has ${this.articles.lenght} articles`
};

console.log(user);

let firstarticle = new Article("Angular", "Angular is awesome too");
let secondarticle = new Article("React", "React is awesome too");

user.articles = [firstarticle, secondarticle];

console.log(user);
console.log(user.getInfo());