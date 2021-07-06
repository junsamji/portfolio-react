import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

function NaverMapAPI(){
    const navermaps = window.naver.maps;
    
    return(
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} //default: react-naver-map
        style={{
          width: '100%',
          height: '85vh'
        }}
        defaultCenter={{ lat: 37.40042, lng: 127.11216 }} //초기 위치
        defaultZoom={17} //초기 확대 배율
      >
      <Marker
          key={1}
          position={new navermaps.LatLng(37.40042,127.11241)}
          animation={2}
          onClick={() => {alert('이곳은 한컴 타워입니다.');}}
      />
      </NaverMap>
    );
  }
  
  function Map() {
    return (
      <RenderAfterNavermapsLoaded
        ncpClientId={'518ok635gd'}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    );
  }
  
  export default Map;