//index.js
//Q. 어벤져스 DB 1개 li에 삽입하기
//기존 태그 선택 querySelector()
//기존 태그 복제 cloneNode()
//새로운 태그 생성 createElement()
//생성한 대상을 붙여넣기 appendChild()

const movieWrap1 = document.querySelector('.movie_wrap1');

//Q. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li'); //li 생성
// movieLi.textContent = '어벤져스';
// movieLi.textContent = moviesDB[0].title;
// movieLi.textContent = moviesDB[0].date; //=대입(기존값을 제거하고 대입(기본뜻))
// movieLi.textContent += moviesDB[0].date; //++대입(기존값을 제거하고 대입(기본뜻))
// movieWrap1.appendChild(movieLi); //생성한 li 붙여넣기

//Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${moviesDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${moviesDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${moviesDB[i].poster}" alt=""></a>`;
    movieWrap1.appendChild(movieLi);
}

//--------------------------------------------------26/9/4
//무비차트 + swiper
// swiper-slide 반복 생성해서 swiper-wrapper 붙여넣기
// swiper 플러그인 함수 연결은 swiper 최종 연결
const chart_swiper =document.querySelector('.chart_swiper');

const chart_swiper_func = new Swiper(chart_swiper,{
    slidesPerView:2,
    spaceBetween:10,
}); //플러그인 연결

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div'); //생성
    chart_slide.classList.add('swiper-slide');//클래스연결

    chart_slide.innerHTML = `<p class="num">${moviesDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${moviesDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">${moviesDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${moviesDB[i].plot}</p>`;
    chart_slide.style.backgroundImage = `url(${moviesDB[i].poster})`;

    chart_swiper.children[0].appendChild(chart_slide); //붙여넣기
}
//애니 슬라이드 연습
const chart_swiper2 =document.querySelector('.chart_swiper2');

const chart_swiper_func2 = new Swiper(chart_swiper2,{
    slidesPerView:2,
    spaceBetween:10,
});

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div');
    chart_slide.classList.add('swiper-slide');

    chart_slide.innerHTML = `<p class="num">${anisDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${anisDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">${anisDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${anisDB[i].plot}</p>`;
    chart_slide.style.backgroundImage = `url(${anisDB[i].poster})`;

    chart_swiper2.children[0].appendChild(chart_slide); //붙여넣기
}