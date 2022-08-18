// Task 1
var user = {
    name: 'John',
    surname: 'Mike',
    update_name : function(){
        this.name = 'Peter';
    },
    delete_name : function(){
        delete this.name;
    }
};

console.log(user.name)
user.update_name()
console.log(user.name)
user.delete_name()
console.log(user.name)

// Task 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
console.log(fruit.apple+fruit.pear+fruit.peach)

