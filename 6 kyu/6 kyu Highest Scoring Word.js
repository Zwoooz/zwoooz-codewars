function high(x){
    const arr = x.toLowerCase().split(' ');
    let score = 0;
    let prevScore = 0;
    let sulution = '';
    arr.forEach(element => {
        element.split('').forEach(e => {
            score += e.charCodeAt(0)-96;
        })
        if(score > prevScore) {
            sulution = element;
            prevScore = score;
        } else if(score === prevScore) {
            prevScore = score;
        }
        score = 0;
    });
    return sulution;
}