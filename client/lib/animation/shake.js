    /* global gsap */

    export const shake = gsap.to('form',{
      duration:0.1,
      x:-10,
      repeat:5,
      yoyo:true, // 갔다가 다시 돌아오는 것, false 시 한쪽 방향
      clearProp:'x', // x좌표 초기화, 광클했을 때도 작동되도록
      paused:true // 처음에 바로 실행 안되도록, 애니메이션 정지
    })