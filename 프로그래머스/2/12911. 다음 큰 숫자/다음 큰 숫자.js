function solution(n) {
    const popcount = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    const target = popcount(n);
    let next = n + 1;
    while (popcount(next) !== target) next++;
    return next;
}