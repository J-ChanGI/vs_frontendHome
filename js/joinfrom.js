function idcheck(){ // 아이디
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var p = document.getElementById('output')

    if(id.length == 0){
        p.style.color = 'red'
        p.innerHTML = "필수 입력 입니다."
    }else if(id.match(exp)){
        p.style.color = 'green'
        p.innerHTML = '멋진 이름이네요'

    }else{
        p.style.color = 'red'
        p.innerHTML = ' 소문자와 숫자 6~10자로 지어주세요'
    }
}
function pwd(){ // 비밀번호
    var exp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_])[a-zA-Z\d-_]{8,16}$/
    var pw = document.getElementById('pw').value;
    var p =document.getElementById('output2');
    
    if(pw.length == 0 ){
        p.style.color = 'red'
        p.innerHTML = '필수 입력 입니다.'
    }else if(pw.match(exp)){
        p.style.color = 'green'
        p.innerHTML = '유효한 형식 입니다'
    }else{
        p.style.color = 'red'
        p.innerHTML = '대, 소문자 -_ 숫자 포함 8~ 16자리 '
    }
}
function pwcheck(){ // 비밀번호 체크
    var pw = document.getElementById('pw').value;
    var pwcheck = document.getElementById('pwcheck').value;
    var p = document.getElementById('output2');
    if(pw == pwcheck){
        p.style.color = 'green'
        p.innerHTML = '비밀번호가 일치합니다'
    }else{
        p.style.color = 'red'
        p.innerHTML = '비밀번호가 일치하지 않습니다.'
    }
}
function myname(){ // 이름  
    var name = document.getElementById('name').value;
    var p = document.getElementById('nameout');
    if(name.length == 0 ){
        p.style.color = 'red'
        p.innerHTML = '필수 입력 입니다.'
    }else{
        p.innerHTML = ""
    }
}
function emails(){ //이메일
  
    var select = document.getElementById('email2');

    document.getElementById('email1').value = select.value;   
    
    

}

function phonenum(){ //전화번호
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value
    var span = document.getElementById('phoneout')
    if(phone.length == 0 ){
        span.style.color = 'red'
        span.innerHTML = '필수 입력 입니다'
    }else if(phone.match(exp)){
        span.style.color ='green'
        span.innerHTML = '유효한 형식 입니다.'
    }else{
        span.style.color = 'red'
        span.innerHTML = '유효하지 않은 형식입니다'
    }
}
function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample4_postcode').value = data.zonecode;
            document.getElementById("sample4_roadAddress").value = roadAddr;
            document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}