function twoSum(numbers, target) {
    let sul = [];
    numbers.forEach((element, index) => {
        for(let i = 0; i <= numbers.length; i++) {
            if(element + numbers[i] === target && index !== i) {
                sul = [i, index];
            }
        }
    })
    return sul;
}