// 1
//let array = [5, 2, 30, -10, -2, -3];
//function isNumberInRange(num) {
//    if (num > 0 && num < 10) {
//        return true;
//    } else {
//        return false;
//    }
//}

//function filterArray(arr) {
//    let newArray = [];
//    for (let item of arr) {
//        if (isNumberInRange(item)) {
//            newArray.push(item);
//        }
//    }
//    return newArray;
//}
//console.log(filterArray(array));

// 2
//let array = [5, 2, 3, -10, -2, -3];
//function isEven(num) {
//    if (num % 2 === 0) {
//        return true;
//    } else {
//        return false;
//    }
//}

//function filterArray(arr) {
//    let newArray = [];
//    for (let item of arr) {
//        if (isEven(item)) {
//            newArray.push(item);
//        }
//    }
//    return newArray;
//}
//console.log(filterArray(array));

// 3
//function getAge(age) {
//    if (age <= 17) {
//        return "ğåá¸íîê";
//    } else if (age >= 18 && age <= 30) {
//        return "ìîëîäîé";
//    } else if (age >= 30 && age <= 55) {
//        return "çğåëûé";
//    } else {
//        return "ñòàğûé";
//    }
//}
//for (let i = 1; i <= 100; i++) {
//    console.log(`${i} - ${getAge(i)}`);
//}

// 4
//function printMessage(name, age) {
//    console.log(`${name} èìååò âîçğàñò ${age} è îí ${getAge(age)}`);
//}
//printMessage("Èâàí", 36);

// 5
//function generateArray(sourceArray) {
//    let newArr = [];
//    for (let item of sourceArray) {
//        newArr.push(`Èìÿ: ${item.name}, âîçğàñò: ${item.age}`);
//    }
//    return newArr;
//}
//let staffArray = [{ name: `Èâàí`, age: 34 }, { name: `Âàñèëèé`, age: 43 }, { name: `Ìèõàèë`, age: 27 }];
//console.log(generateArray(staffArray));