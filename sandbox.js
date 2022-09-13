// Console.log() 브라우저 콘솔에 메시지 출력
// 하나의 명령어 표현식에는 세미콜론 필요
// 자바스크립트는 위에서 아래로 소스를 해석
console.log(1);
console.log(2);



// 변수 value 값을 저장 - var 키워드 예약어
// 값이 메모리에 저장되고 나중에 변수명을 이용 액세스 함
    // 변수명은 정할 때 제약 - 공백 불가, camelcase 가능, 첫글자 숫자로 시작 불가
    // 콤마로 구분 여러값 출력
// 이전 자바스크립트 변수 재할당 가능
var score = 20;
var score = 12; // 변수 재선언
score = 64; // 변수 할당
var year = 2019;
console.log(score, year);



// let, const 키워드 모던자바스크립트 es2015(ES6버전) 개정 추가사항
// Ecma International 정보와 통신 시스템을 위한 국제적 표준화 기구 - JS 표준화
// let, const는 var 보다 더 명확하고 엄격한 규칙 JS 프로그래밍 시 혼란을 줄여줌
// let, const는 둘 다 재선언 불가능
// let은 재할당 가능 - 변수 값 업데이트
// const 재할당 불가능
let age = 25;
console.log(age);

age = 30; // 재할당 업데이트
console.log(age);

// const 변수 상수
// const는 재선언, 재할당 불가능
const points = 100;
// points = 50;
console.log(points);



    // 변수 number 숫자 - 연산 가능
// typeof - 데이타 타입 반환 연산자
// strings
// string은 일련의 문자 숫자 캐릭터등의 따옴표로 묶인 문자열
console.log('hello, world'); 

let email = 'kim@naver.com';
console.log(email);



// plus string 연결
const title = 'vlog';
const author = 'kim';
const reply = 30;

// 연속된 연결
let result1 = 'The blog name is ' + title + ' by ' + author + ' has ' + reply + ' reply';
console.log(result1);

// template string 연결 - 백틱 사용 $ 중괄호로 value 출력
// es2015(ES6버전) 추가사항
let result2 = `The blog name is ${title} by ${author} has ${reply} reply`;
console.log(result2);

// creating html templates 템플릿 문자열 사용하여 동적 html 템플릿 생성
let result3 = `
  <h2>${title}</h2>
  <p>by ${author}<p>
  <span>${reply} reply</span>
`;
console.log(result3);



// Arrays 배열 - 문자열 컬렉션, 넘버 컬렉션 - 대괄호 사용
// 3 value element 를 하나의 변수에 저장, 관련 있는 데이터 모음
let members = ['kim', 'park', 'lee'];
console.log(members);
console.log(members.length); // 배열의 갯수를 얻어옴
console.log(members[1]); // 배열 중 2번째 값을 얻어옴, 자바스크립트는 제로베이스



// Boolean - true, false, 1과 0만을 이용 - 영국 수학자 조지 불이 고안
console.log(true, false, 'true', 'false');

// 코드의 조건을 확인하고 특정사항이 참인지 거짓인지 확인
// methods can return booleans (includes)
// methods는 function과 동일하게 기능을 수행하지만 특정 개체 또는 데이터 유형과 연관
// email 변수중에 @가 포함되면 true, 아니면 false
let email2 = 'park@naver.com';
let result4 = email2.includes('@');
console.log(result4);

// 배열중에 kim이  포함되면 true, 아니면 false
let names = ['kim', 'park', 'lee'];
let result5 = names.includes('moon');
console.log(result5);



/////////////////////////////////////////////////////////////////////////////



// if statements if문 - 조건이 true일때만 한번 실행
// 코드블럭은 참이거나 조건이 충족될 때 실행되는 코드
// if문의 중괄호는 조건을 위한 코드블록, 세미콜론 불필요 (function 또한)
if(true){
  console.log('실행');
}

// variables & block scope
// 30으로 let  변수 생성 - console inside, outside 둘다 액세스 가능
// global scope 전역 범위 - 파일 전체에서 액세스 가능
// 40으로 재할당 하면 업데이트 안쪽 바깥쪽 둘다 업데이트
// 50으로 재선언 하면 오류 - 같은 scope에 있음으로 불가
// 60으로 재선언(변수 생성) - local scope로 inside code block에만 액세스
// firstName 변수 생성 - local scope로 inside code block에만 액세스 - 외부에서 액세스 불가
// 중첩 코드블럭 - 상위 코드블럭 변수 할당 - 60으로 액세스
// 70으로 재선언 - local scope로 inside code block에만 액세스
// let -> const로 변경 - 로컬 안에서 재선언 이므로 동일한 결과 가능
// var는 let과 const와 다르게 block scope를 무시
// test var 선언 - inside block scop 임에도 outside에서 액세스 됨
let num = 30;
// let num = 50;

if(true){
  // num = 40;
  let num = 60;
  let firstName = 'kim';
  console.log('inside:', num, firstName);

  if(true){
    let num = 70;
    console.log('inside2:', num);
    var test = 'hello';
  }
}

// console.log('outside:', num, firstName);
console.log('outside:', num, test);



// function - 재사용 할 수 있는 작은 코드 블록
// 코드블록을 정의하고 어느 시점에서 호출 후 실행 및 재사용

// function declaration 함수 선언 
// function 이름으로 선언
// 세미콜론 불필요 - function은 표현식이 아닌 코드블록 
function greet(){
  console.log('hello there');
}

// 함수 이름으로 함수 호출
// 호출 때마다 실행
greet();
// greet();
// greet();

// function expression - 함수 표현식 
// function 익명함수를 변수에 저장하여 선언
// 상수에 저장 - 함수를 덮어 쓰고 싶지 않아 
// 세미콜론 필요 - 변수 할당은 표현식 - 변수에 함수 숫자 문자열 할당 가능
// 코드블록 끝에 세미콜론이 붙는 아마도 유일한 경우
const speak = function(){
  console.log('good day');
};

speak();


// 호이스팅 - 미리 선언되지 않아도 먼저 호출 가능 - 선언문이 끌어 올려짐
// 함수 선언식은 Hoisting 호이스팅 가능
foo();
function foo(){ // 함수선언문
  console.log("hello1");
}

// 함수 표현식은 호이스팅 불가능
const foo2 = function(){ // 함수표현식
  console.log("hello2");
}
foo2();



// arguments 인수 & parameters 매개변수
// function 괄호안에 local variables 지역변수 생성
// 함수 호출 시 value 입력하여 pass
// 그 값을 파라미터로 넘겨 (변수에 할당) 엑세스
// 지역변수는 외부에서 액세스 불가 - 빈값으로 나옴
// 입력된 값 arguments 인자, 받는 변수 parameters 매개변수
// time 값 - 여러개의 value를 전달시 ,콤마로 구분
// arguments와 parameters의 순서는 일치해야 함
// argument가 없을 시 undefined
    // parameters의 기본값 제공 - function(name = 'park', time = 'night')
// 인수값이 talk('kim') 일시 name만 업데이트, time은 기본값 출력
const talk = function(name, time){
  // console.log(name);
  // console.log(`good morning ${name}`);
  console.log(`good ${time} ${name}`);
};
// console.log(name); // 지역변수는 외부에서 액세스 불가 - 빈값으로 나옴

// talk('kim');
talk('kim', 'morning');
// talk(undefined, 'morning');



// returning values
// area는 local variables 지역 변수로 함수안에서만 저장, 액세스
// 외부에서는 엑세스 불가, 함수 내부에서만 액세스 가능
// return 키워드 - 함수 외부로 값을 반환
// const area 새로운 변수(전역 변수)로 저장, const 이름은 새 이름 가능
    // return 3.14 * radius**2; - 전역변수로 저장 않하고 직접 반환 가능 
const calcArea = function(radius){
  let area = 3.14 * radius**2;
  // console.log(area); // 함수 내부에서만 액세스 가능
  return area;

  // return 3.14 * radius**2; //전역변수로 저장 않하고 직접 반환 가능 
};

// calcArea(5); // 함수호출을 밑에 const 전역 변수로 저장
// console.log(area); // 외부에서는 엑세스 불가
const area = calcArea(5);
console.log(area);

// return 받은 area(전역변수)는 다른 함수의 parameters 매개변수 사용가능
const calcVol = function(area){
  console.log(area * 2);
};
calcVol(area);



// arrow function
// function 키워드 사용 안함 대신 => 사용
// 위는 regular function, ES6부터 arrow function
// const calcAreaNum = function(radius){
//   return 3.14 * radius**2;
// };

// const calcAreaNum = (radius) => { 
// const calcAreaNum = radius => { // 하나의 파라미터 - 괄호 제거 가능(선택사항)
// const calcAreaNum = (radius, something) => { // 파라미터 하나 이상 괄호 필요
// const calcAreaNum = () => { // 파라미터가 없을 시 괄호 필요
// const calcAreaNum = radius => {
//   return 3.14 * radius**2;
// };

// 한줄에 단일 반환이 있을 시 - return 키워드, 중괄호 제거, 한줄로 붙일수 있음
const calcAreaNum = radius => 3.14 * radius**2;

const areaNum = calcAreaNum(5);
console.log(areaNum);



// practise arrow functions 1
// const hello = function(){
//   return 'hello, world';
// };

const hello = () => 'hello, world';

const helloResult = hello();
console.log(helloResult);


// practise arrow function 2
// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10,15,30], 0.2));



// methods
// regular function과 동일 기능 수행 호출법이 다름
// regular function - 호출할때 함수이름(); 사용
// methods function - dot notation 점 표기법 사용하여 호출
// 데이터타입(숫자, 문자열..)에 dot 점 표기법 사용 호출
// object(객체) 또는 데이타 타입과 관련된 함수
const familyName = 'kim';

// toUpperCase 메소드 네임 - string method (string 내장 객체 메소드)
// familyName.toUpperCase();
let resultName = familyName.toUpperCase();
console.log(resultName);



// callback function
// arguments로 다른 함수에 전달된 함수
// 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수
// 때가 되면 나중에 호출(called back)한다는 것이 콜백함수의 개념
const myFunc = (callbackFunc) => { // callbackFunc 파라미터, 
  // do something
  let value = 50;
  callbackFunc(value); // value arguments
};

// myFunc(); 괄호 안이 arguments
myFunc(function(value){ // value parameters
  //do something
  console.log(value);
});

// arrow 함수로 변환 - 하나의 파라미터는 괄호 삭제 가능
// myFunc(value => {
//   //do something
//   console.log(value);
// });



// 콜백함수를 func 함수 선언으로 저장 가능
// const myFunc2 = (callbackFunc) => {
//   callbackFunc(5, 10);
// };

// myFunc2(function(num1, num2){
//   console.log(num1, num2);
// });

// add 함수 호출 - myFunc2(add);
function add(num1, num2){ // value parameters
  return num1 + num2;
}

const myFunc2 = (callbackFunc) => { // callbackFunc 파라미터, 
  const result = callbackFunc(5, 10); // value arguments
  console.log(result);
};

// myFunc(); 괄호 안이 arguments
myFunc2(add);



// callback & foreach
// foreach 빌트인 arry 메소드 - for loop 처럼 각각 호출
// foreach 메소드에 콜백함수를 arguments로 사용
// foreach 주어진 함수를 배열 내부의 각 요소만큼 반복실행 
let people = ['kim', 'park', 'lee'];

// people.forEach(function(){
//   console.log('something');
// });

// 첫번째 파라미터로 각각의 요소를 가져옴
// people.forEach(function(person){ // parameters person
//   console.log(person);
// });

// arrow 함수로 변환  - 하나의 파라미터는 괄호 삭제 가능
// people.forEach(person => {
//   console.log(`i love you ${person}`);
// });


// 다른 곳에 콜백함수를 정의 후 파라미터로 전달
const logPerson = person => {
  console.log(`i love you ${person}`);
};
people.forEach(logPerson);



// Objects literals
// 각각의 property 속성은 key와 value로 하나의 쌍으로 구성 콤마로 분리
// 마지막 property는 콤마 불필요
let user = {
  name: 'kim',
  age: 30,
  email: 'kim@naver.com',
  location: 'seoul',
  blogs: ['kim blog', 'good kim']
};

console.log(user);
console.log(typeof user);

// 하나의 property 속성에 액세스 - dot notation 점 표기법
console.log(user.name);

// value 업데이트 
user.age = 35;
console.log(user.age);

// 하나의 property 속성에 액세스 - 대괄호 표기법
console.log(user['email']);
user['name'] = 'choi';
console.log(user['name']);

// key를 변수로 전달할 경우 - 대괄호 표기법 가능
const keyPlace = 'location';
console.log(user[keyPlace]);



// login 메소드 추가 function value로 설정
// 객체에 연결된 정의된 메소드, 메소드 이름: regular function
// login 메소드 - login 호출
// logout 메소드 - logout 호출
// logBlogs 메소드 - logout 호출
// this 키워드 - context 실행 문맥 관련, 현재 코드가 실행되는 위치와 방법
// this가 root document 문서 루트에 사용되면 global context 전역 참조 - window object
    // 메소드가 레귤러가 아닌 arrow 함수면 객체 this가 아닌 window 객체로 인식
    // this 키워드 사용하려면 레귤러 funtion 사용해야함
// shorthand version - login(){ / logout(){ / logBlogs(){ 사용가능
// blogs 배열안에 string 대신 object 저장 가능 
// blog.title, blog.likes로 object 내부 액세스 - blog는 배열 내부 각각의 object
let user2 = {
  name: 'kim',
  age: 30,
  email: 'kim@naver.com',
  location: 'seoul',
  // blogs: ['kim blog', 'good kim'], // 배열안에 strings
  blogs: [ // 배열안데 object
    { title: 'kim blog', likes: 30 },
    { title: 'good kim', likes: 50 }
  ],
  // login 메소드
  login: function(){
    console.log('user login');
  },
  // logout 메소드
  logout: function(){
    console.log('user logout');
  },
  // logBlogs 메소드
  // logBlogs: function(){
  // logBlogs: () => { //arrow 함수면 객체 this가 아닌 window 객체로 인식
  logBlogs(){ // shorthand version
    // 아래와 같으면 액세스 불가
    // console.log(blogs);
    // this 키워드 - 이 객체를 참조
    // console.log(this);
    // this 키워드 - blogs에 액세스
    // console.log(this.blogs);
    // 콜백함수 - blog 파라미터 - blogs arry 내부 값들을 각각 호출
    this.blogs.forEach(blog => {
      // console.log(blog); // 배열안에 strings
      console.log(blog.title, blog.likes); // 배열안에 object
    });
  }
};

// login 메소드 호출
user2.login();

    // string method
    // 둘이 비슷 object 또는 value dot method 다음 괄호
    // 대문자로 자바스크립트에 빌트인 문자열 객체 정의
    const name = 'lee';
    console.log(name.toUpperCase());

// logout 메소드 호출
user2.logout();

// logBlugs 메소드 호출
user2.logBlogs();

// this가 root document 문서 루트에 사용되면 global context 전역 참조 - window object
// console.log(this);

// 배열안에 string 대신 object 저장 가능 
// 배열안에 2개의 object 설정
// 배열안의 객체를 위 blogs로 카피
const blogs = [
  { title: 'kim blog', likes: 30 }, // fist element
  { title: 'good kim', likes: 50 } // second element
]

console.log(blogs);



// Primitive Type, Reference Types 차이 - 메모리에 자장하고 사용하는 방법과 관련
// Primitive Type - 값이 stack에 저장 - 빠르게 액세스, 공간은 제한적
// Reference Types - 객체 heap에 저장 - 느리지만 더 많은 공간
// Primitive Type - 변수 이름으로 값이 잠김 - 변수 이름으로 액세스
// Primitive Type - 2변수에 1변수를 할당하면(복사본) 2개의 변수로 동일값이 잠김
// Primitive Type - 개별 변수로 1변수를 업데이트 해도 2변수는 업데이트 안됨
// Reference Type - 변수에 저장된 객체는 heap에 저장 
// Reference Type - heap 객체에 연결된 pointer가 변수 이름으로 잠김
// Reference Type - 변수에 액세스하면 pointer에 연결된 객체를 반환
// Reference Type - 2변수에 1변수를 할당하면 새 pointer가 복사되고 잠김
// Reference Type - 2개의 pointer는 둘 다 동일한 객체를 바라봄
// Reference Type - 1변수를 업데이트하면(복사본) 동일하게 바라보는 객체가 업데이트
// const는 재할당 불가능 - object가 아닌 pointer를 재할당 - object는 업데이트 가능

// Primitive Type 기본유형
// strings, numbers, Booleans, null, undefined, symbols
// 50, 50 / 100, 50
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Types 참조유형
// all types of objects - object, arrays, function, dates, all other objects
// 50, 50 / 100, 100
const userOne = { name: 'lee', age: 50 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 100;
console.log(userOne, userTwo);

