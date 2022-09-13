const labels = document.querySelectorAll('.form-control label');

labels.forEach(label  => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, inx) => `<span style='transition-delay:${inx * 50}ms'>${letter}</span>`)
    .join('')
} )
// kasya

