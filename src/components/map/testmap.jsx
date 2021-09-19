/*global kakao*/
import React, { useEffect, useState } from 'react';
import styles from './map.module.css';
const { kakao } = window;

const Testmap = ({ searchPlace, handleSubmit, onChange, InputText }) => {
  const kindergartenArr = []
  useEffect(() => {
    // 지도를 표시할 div
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.56806, 126.97788),
      level: 5
    };
    // 지도 todtjd
    const map = new kakao.maps.Map(container, options);

    // 줌 컨트롤러 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 검색 객체 생성
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
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <section className={styles.content}>
      <div className={styles.mapsection}>
        <div className={styles.map} id='map' style={{ width: '600px', height: '400px' }}></div>

      </div>
      <ul className={styles.li}>
        <div>
          <form className="inputForm" onSubmit={handleSubmit}>
            <input
              placeholder="검색어를 입력하세요"
              onChange={onChange}
              value={InputText}
            />
            <button type="submit">검색</button>
          </form>
          <li>{ }</li>
          <li>어린이집 2</li>
          <li>어린이집 3</li>
        </div>
      </ul>
    </section>
  );
}

export default Testmap;
