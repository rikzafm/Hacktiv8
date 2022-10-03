const reverseString = (str) => {
    let dump = str.split('');
    let temp = [];
    dump.map((element, index) => {
        let current = dump.length - index - 1;
        temp.push(dump[current])
    });
    console.log(temp.join(''));
}

reverseString('Hey Taiyo Hey Taiyo');
