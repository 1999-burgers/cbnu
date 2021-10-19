/*global kakao*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './map.module.css';
const { kakao } = window;

const Map = ({ place_x, place_y }) => {
  place_x = Number(place_x)
  place_y = Number(place_y)
  console.log(typeof (place_x), typeof (place_y))

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // 인포윈도우를 생성하고 지도에 표시합니다
  var infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position: iwPosition,
    content: iwContent,
    removable: iwRemoveable
  });

  return (
    <section className={styles.content}>
      <div className={styles.mapsection}>
        <div className={styles.map} id='map' style={{ width: '460px', height: '280px' }}></div>
      </div>
    </section>
  );
}

export default Map;
