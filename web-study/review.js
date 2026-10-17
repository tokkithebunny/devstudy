let a = 100;
a = 200; //값이 변경될 수 있는 변수
console.log(a)
const b = 200; //값이 변경되면 안 되는 변수
console.log(a+b)
console.log(a*b)
let c = "문자";
console.log(a+c)

let arr = [1,2,3,4,5]
console.log(arr)

arr.push(6) // 배열에 값 추가하는 함수 
console.log(arr)

//https://developer.mozilla.org/ko/docs/Web/JavaScript


let dic = {
    "key":"value"
} //객체 또는 사전 자료형

console.log(dic)
dic.key2 = "value2";
dic["key2"] = "value2"; //dic에 새로운 키 값 더해주기(위와 같음)
console.log(dic.key2) //value2

let arr2 = [1,2,3,
    {"key":"value",
    "list":"[1,2,3,4]"}] //배열과 딕셔너리를 섞어 사용

//if()가 참이면 중괄호 내용 실행, 거짓이면 else if 실행

if(10>5){

}else if(10 == 5){

}

for(let i=0; i<10; i++){
    console.log(i)
}

function x(num){
    console.log("내용을")
    return num;
} //num과 같은 숫자를 리턴. ()안에 들어가는 것 = 파라미터(인자) = 변수와 비슷

let y = x(100)
console.log(y)
