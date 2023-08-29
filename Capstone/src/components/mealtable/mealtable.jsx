import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mealtable.module.css'

import { useEffect, useState } from 'react';
const Mealtable = () => {
  const snack1 = ["미숫가루", "제철과일", "꿀호떡", "떠먹는요거트", "딸기아침후레이크", "오곡아침후레이크", "방울토마토 우유", "누룽지죽", "바나나 우유", "옥수수스프 모닝빵", "당근스틱 떠먹는요거트", "채소죽", "복숭아 유아치즈", "자두", "흑임자죽", "찐감자 우유", "찹쌀닭죽", "딸기", "옥수수스프", "귤", "소고기채소죽", "볶은견과류", "두부채소죽", "빵(카스테라) 우유", "연두부&양념장", "사과", "감", "찐고구마", "찐감자", "유아용치즈", "요플레(딸기)"]
  const lunch = [
    "오곡밥\n 부춧국 야채계란찜\n 도라지나물\n 백김치", "찹쌀밥 미역국 서리태콩자반 다시마튀각 김치",
    "돼지불고기 북엇국 깻잎찜 총각김치",
    "자장밥 맑은유부국 요구르트 단무지",
    "나물비빔밥 두부탕국 달걀프라이 백김치",
    "잡곡밥 달걀콩나물국양배추햄볶음 새송이버섯장조림 깍두기",
    "찹쌀밥 맑은부대찌개 고등어조림 콩나물무침 배추김치",
    "쌀밥 오징어감자국소고기숙주볶음 도토리묵김무침 배추김치",
    "서리태밥 바지락맑은무국 동태전 건파래볶음 깍두기",
    "닭가슴살카레밥 버섯된장국 요구르트 김치",
    "잡곡밥 열무된장국 간삼치구이 우엉당근볶음 배추김치",
    "쇠고기피망볶음 굴미역국 배추당면무침 계란말이 백김치",
    "잡곡밥(혼미) 근대된장국 고등어조림 감자채볶음 깍두기",
    "잡곡밥(수수) 맑은숙주국 닭갈비 가지나물 배추김치",
    "쌀밥 황태무국 소고기버섯볶음 상추무침 배추김치",
    "잡곡밥(현미) 양배추국 돈수육 참나물무침 깍두기",
    "참치마요주먹밥 실파장국 배추김치",
    "달걀볶음밥 소고기대파국 애호박나물 구운김 배추김치",
    "잡곡밥(보리) 미소된장국 돈육불고기 부추파프리카무침 배추김치",
    "잡곡밥(수수) 아욱국 떡갈비 새송이볶음 배추김치",
    "잡곡밥(현미) 달걀콩나물국 오징어볶음 건파래무침 깍두기",
    "닭살데리야끼덮밥 유부장국 배추김치",
    "잡곡밥(보리) 시금치된장국 두부구이 잔멸치볶음 깍두기",
    "카레라이스 닭살채소볶음 청경채나물 배추김치",
    "소고기채소볶음밥 콩가루배추국 깍두기",
    "쌀밥 맑은감자국 훈제오리 그린샐러드 깍두기",
    "잡곡밥(보리) 순두부찌개 소불고기 사과치커리무침 배추김치",
    "쌀밥 안매운김치국 소고기떡조림 깻잎나물 깍두기",
    "잡곡밥(흑미) 다시마채소국 돈육채소볶음 무파래무침 배추김치",
    "잡곡밥(기장) 시래기된장국 달걀찜 감자엿장조림 배추김치",
    "쌀밥 우리쌀어묵국 단호박 닭볶음 진미채 볶음 깍두기"]
  const snack2 = ["단호박찜 우유", "멸치국수", "자른꿀떡 우유", "주먹밥 보리차", "샌드위치 우유", "시리얼 우유", "찐감자 우유", "볶음우동 보리차", "찐만두 우유", "자른절편 보리차", "간장비빔국수 매실차", "수박화채", "빵(소보로) 우유", "김가루주먹밥 주스", "핫케이크 우유", "떡(시루떡) 우유", "닭가슴살샐러드", "빵(밤식빵) 우유", "우동", "떡(호박설기) 유자차", "빵(호빵) 두유", "떡(무지개떡) 매실자", "찐단호박 우유", "유부초밥 유자차", "빵(완두앙금빵) 우유", "떡볶이", "김주먹밥 보리차", "미니약과 우유", "고구마스틱", "핫도그 우유", "찐옥수수 우유"]
  const now = new Date()
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [date, setDate] = useState(now.getDate())
  // const [jum, setJum] = useState()jum

  const onDecrease = () => {
    if (date > 1) {
      setDate(date - 1);
    }
    else if (date == 1) {
      setMonth(month - 1);
      if (month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10' || month == '12')
        setDate(31)
      else
        setDate(30)
    }
  }
  const onIncrease = () => {
    console.log(month, date)
    if (month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10') {
      setDate(date + 1);
      if (date == 31) {
        setMonth(month + 1);
        setDate(1);
      }
    }
    else if (month == "2" || month == "4" || month == "6" || month == "9" || month == "11") {
      setDate(date + 1);
      if (date == 30) {
        setMonth(month + 1);
        setDate(1);
      }
    }
    else if (month == "12") {
      setDate(date + 1);
      if (date == 31) {
        setMonth(1);
        setDate(1);
      }
    }
  }
  // setjum = lunch[date - 1].split(",");
  return (
    <>
      <Header />
      <content className={styles.content}>
        <div className={styles.textarea}>
          <button className={styles.arrow} onClick={onDecrease}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className={styles.text}>{month}월 {date}일 식단</div>
          <button className={styles.arrow} onClick={onIncrease}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <ul className={styles.li}>
          <li className={styles.meal}>오전 간식
            <li className={styles.meals}>{snack1[date - 1]}</li>
          </li>
          <li className={styles.meal}>점심
            <li className={styles.meals}>{lunch[date - 1]}</li>
            {/* <li className={styles.meals}> */}
            {/* <li>{jum[0]}<br />{jum[1]}<br />{jum[2]}<br />{jum[3]}<br />{jum[4]}</li> */}
            {/* </li> */}
          </li>
          <li className={styles.meal}>오후 간식
            <li className={styles.meals}>{snack2[date - 1]}</li>
          </li>
        </ul>
      </content>
      <Footer />
    </>
  )
};
export default Mealtable;