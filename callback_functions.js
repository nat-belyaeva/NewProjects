const names = ['Nat', 'Nastya', 'Sasha', 'Felix', 'Nord'];
//names.forEach((name) => console.log(name));

const forEachNames = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        cb(el);
    }
}

forEachNames(names, (name) =>{
    console.log(name);
});



