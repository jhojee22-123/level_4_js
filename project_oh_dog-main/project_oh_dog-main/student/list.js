// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == big1
//small2 == big2
//1.---------------------------변수
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelectorAll('.big_thum img');
console.log(smallThum, bigThum);

smallThum[0].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src;
})
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[1].src;
})
//======================================================

function thumFunc(target1, target2){
    return target1.src = target2.src;
}
smallThum[0].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[0])
})
smallThum[1].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[1])
})

//2.---------------------------함수
//3.---------------------------이벤트