const mapContainer=document.querySelector(".contacts__map"),mapImage=document.querySelector(".contacts__map-image-wrapper"),TILE_LAYER="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",COPYRIGHT='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',ZOOM=17;mapContainer.removeAttribute("hidden"),mapImage.setAttribute("hidden",!0);const iconConfig={url:"../img/map-pin.svg",width:52,height:52,anchorX:26,anchorY:52},cityCenter={lat:59.9386828707253,lng:30.323021182473518},startCoordinate={lat:59.9386828707253,lng:30.323021182473518},map=L.map("map").setView(cityCenter,17);L.tileLayer(TILE_LAYER,{attribution:COPYRIGHT}).addTo(map);const mainPinIcon=L.icon({iconUrl:iconConfig.url,iconSize:[iconConfig.width,iconConfig.height],iconAnchor:[iconConfig.anchorX,iconConfig.anchorY]}),mainPinMarker=L.marker(startCoordinate,{icon:mainPinIcon});mainPinMarker.addTo(map),mainPinMarker.on("moveend",(n=>{console.log(n.target.getLatLng())}));