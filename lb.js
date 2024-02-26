let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let filter = (objects, property, propertyName) => {
    let newObjects = [];
    for (let i = 0; i < objects.length; i++) {
        if (objects[i][property] == propertyName) {
            newObjects.push(objects[i]);
        }
    }

    return newObjects;
}

let result = filter(objects, 'name', 'Иван');
console.log(result);
