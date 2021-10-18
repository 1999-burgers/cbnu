import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './map2.module.css';
const { kakao } = window;

const Map = ({ }) => {

  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(127, 36),
    level: 5
  };
  const map = new kakao.maps.Map(container, options);

  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });


    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new kakao.maps.LatLng(127.397738940238, 36.31354838135727); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  });

  //   const zoomControl = new kakao.maps.ZoomControl();
  //   map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


  //   const ps = new kakao.maps.services.Places()
  //   ps.keywordSearch(searchPlace, placesSearchCB)

  //   // 키워드 검색 완료 시 호출되는 콜백함수
  //   function placesSearchCB(data, status, pagination) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정

  //       let bounds = new kakao.maps.LatLngBounds()
  //       for (let i = 0; i < data.length; i++) {
  //         displayMarker(data[i])
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
  //       }

  //       map.setBounds(bounds)
  //     }
  //   }

  //   function displayMarker(place) {
  //     // 마커를 생성하고 지도에 표시
  //     let marker = new kakao.maps.Marker({
  //       map: map,
  //       position: new kakao.maps.LatLng(place.y, place.x),
  //     })

  //     // 마커에 클릭이벤트를 등록합니다
  //     kakao.maps.event.addListener(marker, 'click', function () {
  //       // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
  //       infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
  //       // kindergartenArr에 마커 값 추가
  //       kindergartenArr.push(place)
  //       console.log("배열", kindergartenArr)
  //       infowindow.open(map, marker)
  //     })
  //   }
  // }, [searchPlace])

  return (
    <section className={styles.content}>
      <div className={styles.map} id='map' style={{ width: '450px', height: '300px' }}></div>
    </section >
  );
}

export default Map;
