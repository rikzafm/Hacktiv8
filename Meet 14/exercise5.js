const threeStepsAB = (str) => {
    const str2 = str.replace(/\s/g, '').split('');
    console.log(str2);
    let a;
    let b;
    for (let i = 0; i < str2.length; i++){
        if (str2[i] === 'a'){
            a = i;
        } else if (str2[i] === 'b') {
            b = i;
        }
    }
    if (b-a === 3){
        return console.log(true);;
    }else{
        return console.log(false);;
    }
}

const str = 'lane borrowed';

threeStepsAB(str);