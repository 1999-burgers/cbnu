/*global kakao*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './map.module.css';
const { kakao } = window;

const Map = ({ searchPlace, handleSubmit, onChange, InputText, childinfo, childRepository }) => {
  const history = useHistory();
  const kindergartenArr = []
  // const [id, setId] = useState(0);
  // const [kindergarten, setKindergarten] = useState(0);
  // const parentFunction = ({ kindergarten }) => {
  //   this.props.parentFunction(this.kindergarten)
  // }


  // const addinfo = (e) => {
  //   let name = window.prompt("아이의 이름을 입력해주세요");
  //   let childclass = window.prompt("아이의 반을 입력해주세요");
  //   childRepository.savename(childinfo.id, name, childclass);
  //   console.log(name, childclass, "name, class");
  // }


  const onSelect = (e) => {
    var kindergarten = kindergartenArr[kindergartenArr.length - 1]
    // setId(childinfo)
    // setKindergarten(kindergarten)
    // 전달된 데이터가 있다면 데이터를 옮겨줘
    // 전달된 데이터가 없다면 무시
    // console.log(kindergartenArr[kindergartenArr.length - 1])
    // console.log("이걸로선택")
    if (kindergartenArr[kindergartenArr.length - 1] != null) {
      // console.log(childinfo, "차일드인포")
      var result = window.confirm(kindergarten.place_name + "으로 선택하시겠습니까?");
      if (result == true) {
        let name = window.prompt("아이의 이름을 입력해주세요");
        let childclass = window.prompt("아이의 반을 입력해주세요");
        childRepository.saveinfo(childinfo.id, kindergarten, name, childclass);
        history.push({
          pathname: '/mychild',
          state: {
            id: childinfo,
            kindergarten: kindergarten
          }
        })
        console.log("데이터 옮겨줘")
        // 옮기고 배열 초기화
        kindergartenArr.length = 0;
        console.log(kindergartenArr)
      }
    }
    else if (kindergartenArr[kindergartenArr.length - 1] == null) {
      console.log("이렇게")
    }
  }
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.56806, 126.97788),
      level: 5
    };
    const map = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    const ps = new kakao.maps.services.Places()
    ps.keywordSearch(searchPlace, placesSearchCB)

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정

        let bounds = new kakao.maps.LatLngBounds()
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
      }
    }

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        // kindergartenArr에 마커 값 추가
        kindergartenArr.push(place)
        console.log("배열", kindergartenArr)
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <section className={styles.content}>
      <div className={styles.mapsection}>
        <div className={styles.map} id='map' style={{ width: '600px', height: '400px' }}></div>
      </div>
      <div className={styles.searchsection}>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            className={styles.inputbox}
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            value={InputText}
          />
          <button className={styles.button} type="submit">검색</button>
          <button className={styles.button} type="submit" onClick={onSelect}>선택</button>
        </form>
      </div>
    </section>
  );
}

export default Map;
