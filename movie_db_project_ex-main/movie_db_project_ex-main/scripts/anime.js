const anisWrap2 = document.querySelector('.ani_wrap2');

for(let i=0; i<9; i++){
    const anisLi = document.createElement('li');
    anisLi.innerHTML = `<h3>${anisDB[i].title}</h3>`;
    anisLi.innerHTML += `<p>${anisDB[i].date}</p>`;
    anisLi.innerHTML += `<a href="#"><img src="${anisDB[i].poster}" alt=""></a>`;
    anisWrap2.appendChild(anisLi);
}

