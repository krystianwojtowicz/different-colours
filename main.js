document.body.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    if (e.clientX % 2 == 0 && e.clientY % 2 == 0)
        document.body.style.backgroundColor = 'red';
    else if (e.clientX % 2 == 1 && e.clientY % 2 == 1)
        document.body.style.backgroundColor = 'blue';
    else
        document.body.style.backgroundColor = 'green';
})