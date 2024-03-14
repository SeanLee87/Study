
// ES6 템플릿 리터럴 - (https://eblee-repo.tistory.com/38) 
// Tagged templates 1 
let person = 'Sean lee';
let age = '138';

let ageTag = function(strings, personExp, ageExp) {
    let str0 = strings[0];
    let str1 = strings[1];
    console.log(`str0 : ${str0}`);
    console.log(`str1 : ${str1}`);

    let ageStr;
    if(ageExp > 99) ageStr = 'Super Old Man';
    else ageStr = 'Young Man';

    return `${str0}${personExp}${str1}${ageStr}`;
};

let output = ageTag`that ${person} is a ${age}`;
console.log(output);

// Tagged templates 2
let testTag = function(strings, a, b, c) {
    console.log(`문자열 배열 길이 : ${strings.length}`);
    for (let index = 0; index < strings.length; index++) {
        console.log(`문자열 요소 [${index}] : ${strings[index]}`);
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

let html = 5;
let css = 3;
let js = 'es10';
let string = testTag`HTML${html}, CSS${css}, JavaScript${js}`;

// 함수에서 객체를 파라미터로 받기
const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

function print(hero){
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmerica);

// Tagged templates 응용
let heroTag = function(strings, hero){
    return `${hero.alias}(${hero.name}) ${strings[0]}${hero.actor}${strings[1]}`;
}

let outputHero = heroTag`역할을 맡은 배우는 ${ironMan} 입니다.`;
console.log(outputHero);


