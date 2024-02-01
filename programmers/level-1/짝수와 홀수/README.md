### 문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

### 제한 사항
- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

### 입출력 예
| `num`  | `return` |
| ------------- | ------------- |
| 3  | "Odd"  |
| 4  | "Even"  |

---

### 문제 풀이
```
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
} 

function solution(num) {
    let ret = '';
    
    if (num % 2 === 0) {
        ret = "Even"
    } else {
        ret = "Odd"
    }
    
    return ret;
}

```

### TMI...
좋은 코드는 항상 문제의 본질을 명확하게 전달하고, 유지보수가 용이해야 한다.

간결하면서 명확하게 코드를 작성하는 것이 중요하지만, 여러 조건이 추가되거나 복잡성이 높아질 경우에는 간결함이 아닌 가독성을 우선시하는 것이 현명한 선택이라 생각한다.

짧은 코드가 모든 상황에서 좋은 것은 아니다 보니.. 생각이 많아져서 이번에는 2개의 풀이와 개인적인 생각을 남겼다.

3년차 개발자가 되어가면서 짧고 간단한 코드여도 한 줄이 신중해진다..

### URL
https://school.programmers.co.kr/learn/courses/30/lessons/12937?language=javascript