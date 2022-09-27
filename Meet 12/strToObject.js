const convertToObject = (s) => {
    let string = s.replaceAll(";", "\", \"");
    console.log(string);
    let string2= string.replaceAll(":", "\":\"");
    console.log(string2);
    let obj = JSON.parse(`{"${string2}"}`);
    return obj;
}

let string = 'namaDepan:RIKZA;namaBelakang:Fatiyamulya;domisili:blora;usia:21';
let obj = convertToObject(string);

console.log(obj);

