let customFunction = function() {
    alert("기본 함수입니다!");
};

// 기본 함수 실행
customFunction();

// JavaScript 코드 변경 함수
function changeCode() {
    // 변경할 코드 문자열
    const newCode = `
        customFunction = function() {
            alert("변경된 함수입니다!");
        };
    `;
    
    // eval()을 사용하여 변경된 코드 실행
    eval(newCode);
}

// 버튼 클릭 이벤트 리스너 추가
document.getElementById('changeButton').addEventListener('click', changeCode);

// 변경된 코드 실행 함수
document.getElementById('executeButton').addEventListener('click', function() {
    customFunction(); // 변경된 함수를 호출
});