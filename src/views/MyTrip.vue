<template>
  <div class="my-trip">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>
            <span>Most Followed </span>
            <span>Itineraries</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <form @submit.prevent="renderMap" class="form-inline mb-4">
            <select
              class="form-control text-uppercase w-50 mr-5"
              id="transportation"
              v-model="moveType"
            >
              <option value="DRIVING">By Car</option>
              <option value="WALKING">By Foot</option>
              <option value="BICYCLING">By Bicycle</option>
            </select>
            <button class="btn btn-primary" type="submit">
              Change deslocation
            </button>
          </form>
        </div>
        <div class="col-lg-6 col-12 text-right">
          <button
            class="btn btn-primary"
            type="submit"
            data-toggle="modal"
            data-target="#details"
          >
            See Route Details
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 map2">
          <div class="google-map" id="myMap"></div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="details"
      tabindex="-1"
      role="dialog"
      aria-labelledby="userHistory"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="pb-4 pt-1 mx-auto d-inline-block">Router Details</h5>
            <button
              type="button"
              class="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div id="directions-panel"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      itineraries: [],
      identities: [],
      selectedItinerary: {},
      markers: [],
      map: "",
      myPos: "",
      moveType: "DRIVING"
    };
  },
  mounted() {
    this.renderMap();
  },
  created() {
    this.itineraries = this.getItineraries;
    this.identities = this.getIdentities;
    this.selectedItinerary = this.getSelectedItinerary;
  },
  methods: {
    renderMap() {
      let directionsService = new google.maps.DirectionsService();
      let directionsRenderer = new google.maps.DirectionsRenderer();

      let pos;

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
          location.lat = position.coords.latitude;
          location.lng = position.coords.longitude;
        });
      }

      let myMapOptions = {
        center: location,
        zoom: 16,
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffeb3b"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                weight: 1.5
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [
              {
                weight: 2
              }
            ]
          }
        ]
      };

      this.myPos = location;

      let map = new google.maps.Map(
        document.getElementById("myMap"),
        myMapOptions
      );

      let contentString = `
          <div id="content">
            <h5>Current Location</h5>
          </div>
        `;

      let infowindow = new google.maps.InfoWindow({ content: contentString });
      let marker = new google.maps.Marker({
        position: pos,
        map: map
      });
      marker.addListener("click", () => infowindow.open(map, marker));

      let marker2;
      let infoWindow2;

      for (let i = 0; i < this.selectedItinerary.Visitelocations.length; i++) {
        let placeIcon = {
          url: "http://maps.google.com/mapfiles/kml/shapes/target.png",
          scaledSize: new google.maps.Size(30, 30),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(10, 10)
        };
        marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(
            this.selectedItinerary.Visitelocations[i].lat,
            this.selectedItinerary.Visitelocations[i].lng
          ),
          map: map,
          icon: placeIcon,
          optimizeWaypoints: true,
          provideRouteAlternatives: true
        });

        infoWindow2 = new google.maps.InfoWindow();

        let visitedLocations = this.selectedItinerary.Visitelocations;

        google.maps.event.addListener(
          marker2,
          "click",
          (function(marker2, i) {
            return function() {
              infoWindow2.setContent(visitedLocations[i].name);
              infoWindow2.open(map, marker2);
            };
          })(marker2, i)
        );

        this.markers.push(marker2);
      }
      directionsRenderer.setMap(map);

      this.addRoute(directionsService, directionsRenderer);

      let service = "";
      this.map = map;

      if (this.selectedItinerary.food == "yes") {
        const request = {
          location: this.myPos,
          radius: "2000",
          type: ["restaurant"]
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, this.callback);
      }
    },

    addRoute(directionsService, directionsRenderer) {
      let selectedMode = document.getElementById("transportation").value;

      let location;

      let myPos = {
        lat: this.myPos.lat,
        lng: this.myPos.lng
      };
      let waypts = [];
      for (const place of this.selectedItinerary.Visitelocations) {
        location = {
          lat: place.lat,
          lng: place.lng
        };
        waypts.push({ location });
      }

      directionsService.route(
        {
          origin: myPos,
          destination: myPos,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode[selectedMode]
        },
        function(response, status) {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
            let route = response.routes[0];
            let summaryPanel = document.getElementById("directions-panel");
            summaryPanel.innerHTML = "";

            for (let i = 0; i < route.legs.length; i++) {
              let routeSegment = i + 1;
              if (routeSegment == 1) {
                routeSegment = "A";
              } else if (routeSegment == 2) {
                routeSegment = "B";
              } else if (routeSegment == 3) {
                routeSegment = "C";
              } else if (routeSegment == 4) {
                routeSegment = "D";
              } else if (routeSegment == 5) {
                routeSegment = "E";
              } else if (routeSegment == 6) {
                routeSegment = "F";
              } else if (routeSegment == 7) {
                routeSegment = "G";
              } else if (routeSegment == 8) {
                routeSegment = "H";
              } else if (routeSegment == 9) {
                routeSegment = "I";
              } else if (routeSegment == 10) {
                routeSegment = "J";
              } else if (routeSegment == 11) {
                routeSegment = "K";
              }
              summaryPanel.innerHTML +=
                "<div class='text-left'><b>Route Segment: " +
                routeSegment +
                "</b><br></div>";
              summaryPanel.innerHTML +=
                "<div class='text-left'> <span style='font-weight: 500;'>From: </span> " +
                route.legs[i].start_address;
              summaryPanel.innerHTML +=
                "<div class='text-left'> <span style='font-weight: 500;'>To: </span> " +
                route.legs[i].end_address +
                "</div>";
              summaryPanel.innerHTML +=
                "<div class='text-left'> <span style='font-weight: 500;'>Distance: </span> " +
                route.legs[i].distance.text +
                "<br></div>";
              summaryPanel.innerHTML +=
                "<div class='text-left'> <span style='font-weight: 500;'>Duration: </span> " +
                route.legs[i].duration.text +
                "<br><br></div>";
            }
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    },

    callback(results, status) {
      let map = this.map;
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (const result of results) {
          if (result.opening_hours && result.opening_hours.open_now)
            this.createMarker(result, map);
        }
      }
    },

    createMarker(place, map) {
      let restaurantIcon = {
        url: "https://maps.google.com/mapfiles/kml/shapes/dining.png", // url
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      let infowindow = new google.maps.InfoWindow();
      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: restaurantIcon
      });
      google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(
          `<p style="color: #000; font-size: 1.3em;"><span style="font-weight: 400;">Restaurant Name: </span> ${place.name}</p> <br>
          <p style="color: #000; font-size: 1.3em;"><span style="font-weight: 400;">Street: </span> ${place.vicinity}</p> <br>
          <p style="color: #000; font-size: 1.3em;"><span style="font-weight: 400;">Rating: </span> ${place.rating}/ 5</p> <br>
          <p style="color: #000; font-size: 1.3em;"><span style="font-weight: 400;">Price-Level: </span> ${place.price_level}/ 4</p> <br>`
        );
        infowindow.open(map, this);
      });
    }
  },
  computed: {
    ...mapGetters(["getItineraries", "getIdentities", "getSelectedItinerary"])
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 0.6rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 0.5rem;
}
.container {
  h2 {
    margin: 3em 0;
    font-family: "Geared Slab";
    font-size: 1.8em;
    color: #363636;
    position: relative;
    padding: 0px 0px 20px 0px;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      width: 10%;
      height: 3px;
      background: #5085a5;
    }
    span:first-child {
      font-weight: 200;
    }
    span:nth-child(2) {
      font-weight: 400;
      color: #5085a5;
    }
  }
  form {
    .input-group-text {
      background-color: transparent !important;
    }
    .form-control {
      border-radius: 4px;
      border: 1.5px solid #5085a5;
      color: #363636;
      background: #fefefa;
      box-shadow: none !important;
      .form-group {
        padding-top: 0.5rem;
      }

      option {
        background-color: #fefefa !important;
        color: #363636;
        &:hover {
          background-color: #363636 !important;
        }
      }
    }
  }
  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary:active:focus:not(:disabled):not(.disabled),
  .btn:focus,
  .btn:active,
  .btn:hover {
    box-shadow: none !important;
    outline: 0;
  }
  .btn {
    background-color: #fefefa;
    border: none;
    font-family: "Geared Slab";
    color: #363636;
    font-size: 1.3rem;
    border: 1.5px solid #5085a5;
    &:hover {
      background-color: #5085a5;
      border: none;
      color: #fefefa;
      border: 1.5px solid #363636;
    }
    &:focus {
      background-color: #5085a5;
      color: #fefefa;
      border: none;
      box-shadow: none !important;
    }
    &:active {
      background-color: #5085a5 !important;
      border: none !important;
      border-color: transparent;
      color: #fefefa;
      box-shadow: none !important;
    }
  }
  .col-12.map2 {
    height: 70vh;
    margin-bottom: 5em;
    #myMap {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
.modal-content {
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
