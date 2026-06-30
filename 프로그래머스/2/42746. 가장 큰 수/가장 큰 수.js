function solution(numbers) {
    numbers.sort((a, b) => {
        const ab = '' + a + b;
        const ba = '' + b + a;
        return Number(ba) - Number(ab);
    });

    const answer = numbers.join("");

    if (answer[0] === "0") {
        return "0";
    }

    return answer;
}