Sprint II

01 / 22
프론트엔드, 백엔드 연결 1차 완료
사람들 테스트 할 때 필요한 것
테스트모델
DB
해야 할 일

predict해서 나온 값 -> loading창으로 해보기

데이터 개수가 일정량 이상 일때 강화학습 만들기
  - 1. 처음 훈련 때 썼던 데이터 가져오기
  - 2. DB에서 새로운 데이터 읽어오기
  - 3. 1번과 2번 데이터 합치기
  - 4. fit 시키기
  - 5. 새로운 모델을 기본 모델과 이름 같게 저장하기(덮어쓰기)
  - 6. upload 경로에 있는 파일들 지우기
  - 7. DB에 있는 데이터 지우기
  - 8. 다시 메인창으로 보내기
