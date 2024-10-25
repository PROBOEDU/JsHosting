// 클릭된 버튼을 저장하는 변수
let clickedButton = "";

// 첫 번째 버튼에 대한 이벤트 리스너 추가
document.getElementById('btn1').addEventListener('click', function() {
    clickedButton = "1번";
    alert(clickedButton);
    console.log(clickedButton); // 콘솔에 현재 저장된 값을 출력 (디버깅용)
});

// 두 번째 버튼에 대한 이벤트 리스너 추가
document.getElementById('btn2').addEventListener('click', function() {
    clickedButton = "2번";
    alert(clickedButton);
    console.log(clickedButton); // 콘솔에 현재 저장된 값을 출력 (디버깅용)
});