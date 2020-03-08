<template>
  <div id="app">
    <div
      v-if="
        this.$route.name == 'sign-up' ||
          this.$route.name == 'sign-in' ||
          this.$route.name == 'loading' ||
          this.$route.name == 'LoadingMap'
      "
    >
      <router-view></router-view>
    </div>
    <div
      v-else-if="
        this.$route.name == 'adminLandingPage' ||
          this.$route.name == 'backOfficeUsers' ||
          this.$route.name == 'backOfficeCatalog' ||
          this.$route.name == 'backOfficeSuggestion' ||
          this.$route.name == 'backOfficeRoutes'
      "
    >
      <AdminNavBar />
      <router-view></router-view>
      <Footer />
    </div>
    <div v-else>
      <Navbar />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AdminNavBar from "@/components/AdminNavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    AdminNavBar,
    Footer
  },
  data: function() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters({
      getLoggedUser: "getLoggedUser"
    })
  },
  created() {
    this.setStorage();

    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$store.commit(
        "SET_LOGGED_USER",
        JSON.parse(localStorage.getItem("loggedUser"))
      );
    }

    this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: false });
    this.user = this.getLoggedUser;
  },
  methods: {
    setStorage() {
      if (JSON.parse(localStorage.getItem("users"))) {
        this.$store.commit("SET_USERS", {
          users: JSON.parse(localStorage.getItem("users"))
        });
      } else {
        this.$store.commit("SET_USERS", {
          users: [
            {
              id: 1,
              name: "Nuno",
              surname: "Sousa",
              username: "NunoPereiraSousa",
              email: "nunosousa@gmail.com",
              age: 19,
              id_nationality: "Portuguese",
              description:
                "Hello! My name is Nuno and currently studying at ESMAD.",
              photo: "../src/assets/OurTeam/Nuno.jpg",
              id_user_type: 2,
              blocked: false,
              password: "123"
            },
            {
              id: 2,
              name: "Tiago",
              surname: "de Pina",
              username: "Titas",
              email: "tiagopina@gmail.com",
              age: 19,
              id_nationality: "Cape Verdean",
              description: "Concordo com o Nuno na descrição",
              photo: "../src/assets/OurTeam/Titas.png",
              id_user_type: 2,
              blocked: false,
              password: "1234"
            },
            {
              id: 3,
              name: "admin",
              surname: "",
              username: "admin1",
              email: "admin@gmail.com",
              age: "",
              id_nationality: "Portuguese",
              description: "",
              photo: "",
              id_user_type: 1,
              blocked: false,
              password: "12345"
            },
            {
              id: 4,
              name: "Kobe",
              surname: "Bryant",
              username: "KobeBryant",
              email: "kobe24@gmail.com",
              age: "41",
              id_nationality: "American",
              description: "5x NBA Champion. 17x NBA All-Star",
              photo:
                "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
              id_user_type: 2,
              blocked: false,
              password: "gigi2"
            },
            {
              id: 5,
              name: "Anna",
              surname: "Morgan",
              username: "Anna2",
              email: "anna@gmail.com",
              age: "18",
              id_nationality: "French",
              description: "French traveller :)",
              photo:
                "https://images.squarespace-cdn.com/content/v1/570283d39f72667cfc9ccc8b/1554519481891-KLF6FNI41KK4H5LUGB3I/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Anna%2BPancaldi-5.jpg?format=2500w",
              id_user_type: 2,
              blocked: true,
              password: "anna123"
            },
            {
              id: 6,
              name: "Julie",
              surname: "Tyler",
              username: "JulieTyler2",
              email: "julieee@gmail.com",
              age: "26",
              id_nationality: "American",
              description: "American travelling around the world",
              photo:
                "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
              id_user_type: 2,
              blocked: false,
              password: "julieee"
            },
            {
              id: 7,
              name: "Stephen",
              surname: "Curry",
              username: "Curry30",
              email: "sc30@gmail.com",
              age: "31",
              id_nationality: "American",
              description: "NBA Champion for Golden State Warriors",
              photo:
                "https://www.theplayoffs.com.br/wp-content/uploads/2019/01/Curry-em-vit%C3%B3ria-do-Golden-State-Warriors.jpg",
              id_user_type: 2,
              blocked: false,
              password: "curry30"
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("suggestions"))) {
        this.$store.commit("SET_SUGGESTION", {
          suggestions: JSON.parse(localStorage.getItem("suggestions"))
        });
      } else {
        this.$store.commit("SET_SUGGESTION", {
          suggestions: [
            {
              id: 1,
              category: "monuments",
              name: "Morro Garden",
              content: "",
              date: "27/01/2020",
              photo: "",
              status: "accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            },
            {
              id: 2,
              category: "sports",
              name: "Rio Ave Stadium",
              content: "",
              date: "25/01/2020",
              photo: "",
              status: "accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            },
            {
              id: 3,
              category: "beach",
              name: "Praia da Memória",
              content: "",
              date: "28/01/2020",
              photo: "",
              status: "accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            },
            {
              id: 4,
              category: "beach",
              name: "Praia de Moreiró",
              content: "",
              date: "22/01/2020",
              photo: "",
              status: "accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            },
            {
              id: 5,
              category: "beach",
              name: "Praia de Lavadores",
              content: "",
              date: "20/01/2020",
              photo: "",
              status: "accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            },
            {
              id: 6,
              category: "beach",
              name: "Praia das Sereias",
              content: "",
              date: "30/01/2020",
              photo: "",
              status: "accepted",
              userId: 1,
              username: "NunoPereiraSousa"
            },
            {
              id: 7,
              category: "beach",
              name: "Praia do Mindelo",
              content: "",
              date: "31/01/2020",
              photo: "",
              status: "accepted",
              userId: 2,
              username: "Titas"
            },
            {
              id: 8,
              category: "beach",
              name: "Praia de Matosinhos",
              content: "",
              date: "29/01/2020",
              photo: "",
              status: "accepted",
              userId: 2,
              username: "NunoPereiraSousa"
            },
            {
              id: 9,
              category: "beach",
              name: "Passeio Alegre Garden",
              content: "",
              date: "30/01/2020",
              photo: "",
              status: "not-accepted",
              userId: 2,
              username: "Titas"
            },
            {
              id: 10,
              category: "beach",
              name: "Morro Garden",
              content: "",
              date: "30/01/2020",
              photo: "",
              status: "not-accepted",
              userId: 4,
              username: "NunoPereiraSousa"
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("comments"))) {
        this.$store.commit("SET_COMMENTS", {
          comments: JSON.parse(localStorage.getItem("comments"))
        });
      } else {
        this.$store.commit("SET_COMMENTS", {
          comments: [
            {
              id: 1,
              content: "The best place to watch the sun7!",
              rating: 5,
              date: "29-1-2020, 20:21:59",
              userName: "NunoPereiraSousa",
              userId: 1,
              userPhoto: "../src/assets/OurTeam/Nuno.jpg",
              identityId: 19
            },
            {
              id: 2,
              content: "The best place to watch the sun7!",
              rating: 4,
              date: "29-1-2020, 20:21:59",
              userName: "Titas",
              userId: 2,
              userPhoto: "../src/assets/OurTeam/Titas.png",
              identityId: 19
            },
            {
              id: 3,
              content: "Uau! Gorgeous!",
              rating: 5,
              date: "29-1-2020, 20:21:59",
              userName: "KobeBryant",
              userId: 2,
              userPhoto:
                "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
              identityId: 19
            },
            {
              id: 4,
              content: "Amazing Stadium! Go FCPorto!",
              rating: 5,
              date: "29-1-2020, 20:21:59",
              userName: "KobeBryant",
              userId: 2,
              userPhoto:
                "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
              identityId: 7
            },
            {
              id: 5,
              content:
                "Probably one of the most enjoyable things to do in the world, dip a glass of history under the vines that form the canopy to the terrace. The view of Porto on a sunny day is something and if it’s winter and you are the only ones braving the cold - bonus. And having Sophia serve you is an added pleasure",
              rating: 5,
              date: "26-1-2020, 18:21:11",
              userName: "JulieTyler2",
              userId: 6,
              userPhoto:
                "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
              identityId: 37
            },
            {
              id: 6,
              content: "Super schöner Ort! Sollte man unbedingt besuchen.",
              rating: 4,
              date: "26-1-2020, 19:29:37",
              userName: "JulieTyler2",
              userId: 6,
              userPhoto:
                "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
              identityId: 37
            },
            {
              id: 7,
              content:
                "Wow what a fantastic place. Port has never been my thing but the history and size of the operation is one you cannot miss. Tasting afterwards was fun but the tour was a wealth of knowledge about port it's history and wine making itself.",
              rating: 5,
              date: "26-1-2020, 23:46:20",
              userName: "Curry30",
              userId: 7,
              userPhoto:
                "https://www.theplayoffs.com.br/wp-content/uploads/2019/01/Curry-em-vit%C3%B3ria-do-Golden-State-Warriors.jpg",
              identityId: 37
            },
            {
              id: 8,
              content:
                "가이아 지역 언덕에 위치하고 있어 오가기가 조금 어려울 수도 있지만, 덕분에 사람도 많지 않아 한적하고 뷰도 훌륭합니다. 설명도 재미있고 볼거리도 많아서 즐거운 시간이었습니다. 그리고 역시 포트 와인 시음은 너무나 알차고 훌륭한 시간이었습니다. 예약 꼭 하고 가세요~~",
              rating: 5,
              date: "26-1-2020, 22:01:00",
              userName: "Anna2",
              userId: 5,
              userPhoto:
                "https://images.squarespace-cdn.com/content/v1/570283d39f72667cfc9ccc8b/1554519481891-KLF6FNI41KK4H5LUGB3I/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Anna%2BPancaldi-5.jpg?format=2500w",
              identityId: 37
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("notifications"))) {
        this.$store.commit("SET_NOTIFICATIONS", {
          notifications: JSON.parse(localStorage.getItem("notifications"))
        });
      } else {
        this.$store.commit("SET_NOTIFICATIONS", {
          notifications: [
            {
              id: 1,
              userId: 4,
              relatedTo: "Morro Garden",
              sugestionDate: "27/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 2,
              userId: 4,
              relatedTo: "Rio Ave Stadium",
              sugestionDate: "25/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 3,
              userId: 4,
              relatedTo: "Praia da Memória",
              sugestionDate: "28/01/2020",
              answear: "Your sugestion was accepted",
              status: "checked"
            },
            {
              id: 4,
              userId: 4,
              relatedTo: "Praia de Moreiró",
              sugestionDate: "22/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 5,
              userId: 1,
              relatedTo: "Praia de Lavadores",
              sugestionDate: "20/01/2020",
              answear: "Your sugestion was accepted",
              status: "checked"
            },
            {
              id: 6,
              userId: 4,
              relatedTo: "Praia das Sereias",
              sugestionDate: "30/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 7,
              userId: 2,
              relatedTo: "Praia do Mindelo",
              sugestionDate: "31/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 8,
              userId: 2,
              relatedTo: "Praia de Matosinhos",
              sugestionDate: "29/01/2020",
              answear: "Your sugestion was accepted",
              status: "checked"
            },
            {
              id: 9,
              userId: 2,
              relatedTo: "Passeio Alegre Garden",
              sugestionDate: "30/01/2020",
              answear: "Your sugestion was accepted",
              status: "not-read"
            },
            {
              id: 10,
              userId: 4,
              relatedTo: "Morro Garden",
              sugestionDate: "30/01/2020",
              answear: "Your sugestion was not accepted",
              status: "not-read"
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("categories"))) {
        this.$store.commit("SET_CATEGORIES", {
          categories: JSON.parse(localStorage.getItem("categories"))
        });
      } else {
        this.$store.commit("SET_CATEGORIES", {
          categories: [
            {
              id: 1,
              name: "Beach"
            },
            {
              id: 2,
              name: "Bridges"
            },
            {
              id: 3,
              name: "Gastronomy"
            },
            {
              id: 4,
              name: "Monuments"
            },
            {
              id: 5,
              name: "Rivers"
            },
            {
              id: 6,
              name: "Sports"
            },
            {
              id: 7,
              name: "Streets"
            },
            {
              id: 8,
              name: "Wine"
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("itineraries"))) {
        this.$store.commit("SET_ITINERARIES", {
          itineraries: JSON.parse(localStorage.getItem("itineraries"))
        });
      } else {
        this.$store.commit("SET_ITINERARIES", {
          itineraries: [
            {
              id: 1,
              title: "Short Monuments Route",
              kids: 0,
              adults: "3",
              food: "",
              Visitelocations: [
                {
                  id: 1,
                  name: "Clerigos Tower",
                  information:
                    "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
                  category: "Monuments",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.14569,
                  lng: -8.614597
                },
                {
                  id: 3,
                  name: "Church of São Francisco",
                  information:
                    "The Franciscan Order was established in Porto around 1223. Initially, the order was antagonised by the secular and clergy of other religious institutions, particularly by the bishop of Porto. It took a papal bull, the Bulla Doelentis accepimus by Pope Innocent V, to restore to the Franciscans the plot of land previously donated to them. They began building the convent and a first, small church dedicated to Saint Francis of Assisi around 1244.",
                  category: "Monuments",
                  image:
                    "https://lonelyplanetimages.imgix.net/a/g/hi/t/efd074643379a5c81f7a6f4a3ba33f62-igreja-de-sao-francisco.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.141183,
                  lng: -8.615308
                },
                {
                  id: 4,
                  name: "Congregados Church",
                  information:
                    "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
                  category: "Monuments",
                  image:
                    "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.146231,
                  lng: -8.610748
                }
              ],
              userId: 1,
              userName: "NunoPereiraSousa",
              fallowedCount: 0
            },
            {
              id: 2,
              title: "Monuments",
              kids: 1,
              adults: "2",
              food: "",
              Visitelocations: [
                {
                  id: 1,
                  name: "Clerigos Tower",
                  information:
                    "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
                  category: "Monuments",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.14569,
                  lng: -8.614597
                },
                {
                  id: 3,
                  name: "Church of São Francisco",
                  information:
                    "The Franciscan Order was established in Porto around 1223. Initially, the order was antagonised by the secular and clergy of other religious institutions, particularly by the bishop of Porto. It took a papal bull, the Bulla Doelentis accepimus by Pope Innocent V, to restore to the Franciscans the plot of land previously donated to them. They began building the convent and a first, small church dedicated to Saint Francis of Assisi around 1244.",
                  category: "Monuments",
                  image:
                    "https://lonelyplanetimages.imgix.net/a/g/hi/t/efd074643379a5c81f7a6f4a3ba33f62-igreja-de-sao-francisco.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.141183,
                  lng: -8.615308
                },
                {
                  id: 4,
                  name: "Congregados Church",
                  information:
                    "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
                  category: "Monuments",
                  image:
                    "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.146231,
                  lng: -8.610748
                },
                {
                  id: 2,
                  name: "Lello Library",
                  information:
                    "The origins of Livraria Lello take us back to 1881, when the brothers José and António Lello opened in Porto an establishment dedicated to the commerce and edition of books. José Lello, a man of culture, reading enthusiast, book and music lover, dreamed of becoming a bookseller, which came true in 1881. Several years later, his brother, António Lello, also came into this bookseller business.",
                  category: "Monuments",
                  image:
                    "https://www.movenoticias.com/wp-content/uploads/2017/01/livraria-lello.jpg",
                  webite_link: "https://www.livrarialello.pt/en-us/",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.146922,
                  lng: -8.614776
                },
                {
                  id: 5,
                  name: "Carmo Church",
                  information:
                    "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
                  category: "Beach",
                  image:
                    "https://lonelyplanetimages.imgix.net/a/g/hi/t/b3e546ad8de973b91df9bcde2e380b1f-lpl-igreja_do_carmo_porto_em-2.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0
                }
              ],
              userId: 2,
              userName: "Titas",
              fallowedCount: 3
            },
            {
              id: 3,
              title: "Contemporary Monuments",
              kids: 0,
              adults: "3",
              food: "",
              Visitelocations: [
                {
                  id: 1,
                  name: "Clerigos Tower",
                  information:
                    "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
                  category: "Monuments",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.14569,
                  lng: -8.614597
                },
                {
                  id: 4,
                  name: "Congregados Church",
                  information:
                    "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
                  category: "Monuments",
                  image:
                    "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.146231,
                  lng: -8.610748
                }
              ],
              userId: 2,
              userName: "Titas",
              fallowedCount: 0
            },
            {
              id: 4,
              title: "Sports",
              kids: 0,
              adults: "3",
              food: "",
              Visitelocations: [
                {
                  id: 1,
                  name: "Clerigos Tower",
                  information:
                    "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
                  category: "Monuments",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.14569,
                  lng: -8.614597
                },
                {
                  id: 4,
                  name: "Congregados Church",
                  information:
                    "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
                  category: "Monuments",
                  image:
                    "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
                  webite_link: "",
                  kids_allowed: "",
                  rating: 0,
                  lat: 41.146231,
                  lng: -8.610748
                }
              ],
              userId: 2,
              userName: "Titas",
              fallowedCount: 0
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("identities"))) {
        this.$store.commit("SET_IDENTITY", {
          identities: JSON.parse(localStorage.getItem("identities"))
        });
      } else {
        this.$store.commit("SET_IDENTITY", {
          identities: [
            {
              id: 1,
              name: "Clerigos Tower",
              information:
                "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
              category: "Monuments",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14569,
              lng: -8.614597
            },
            {
              id: 2,
              name: "Lello Library",
              information:
                "The origins of Livraria Lello take us back to 1881, when the brothers José and António Lello opened in Porto an establishment dedicated to the commerce and edition of books. José Lello, a man of culture, reading enthusiast, book and music lover, dreamed of becoming a bookseller, which came true in 1881. Several years later, his brother, António Lello, also came into this bookseller business.",
              category: "Monuments",
              image:
                "https://www.movenoticias.com/wp-content/uploads/2017/01/livraria-lello.jpg",
              webite_link: "https://www.livrarialello.pt/en-us/",
              kids_allowed: "",
              rating: 0,
              lat: 41.146922,
              lng: -8.614776
            },
            {
              id: 3,
              name: "Church of São Francisco",
              information:
                "The Franciscan Order was established in Porto around 1223. Initially, the order was antagonised by the secular and clergy of other religious institutions, particularly by the bishop of Porto. It took a papal bull, the Bulla Doelentis accepimus by Pope Innocent V, to restore to the Franciscans the plot of land previously donated to them. They began building the convent and a first, small church dedicated to Saint Francis of Assisi around 1244.",
              category: "Monuments",
              image:
                "https://lonelyplanetimages.imgix.net/a/g/hi/t/efd074643379a5c81f7a6f4a3ba33f62-igreja-de-sao-francisco.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.141183,
              lng: -8.615308
            },
            {
              id: 4,
              name: "Congregados Church",
              information:
                "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
              category: "Monuments",
              image:
                "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.146231,
              lng: -8.610748
            },
            {
              id: 5,
              name: "Carmo Church",
              information:
                "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
              category: "Monuments",
              image:
                "https://lonelyplanetimages.imgix.net/a/g/hi/t/b3e546ad8de973b91df9bcde2e380b1f-lpl-igreja_do_carmo_porto_em-2.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.147381,
              lng: -8.616273
            },
            {
              id: 6,
              name: "Monastery Serra do Pilar",
              information:
                "The Monastery of Serra of Pilar was created after the reform of the Order of Augustinian, when the monks of Grijó were transferred to the new location. It begins in 1537 the construction of the new monastery, which features a plant that consists by the church, of circular plant, the main chapel, of rectangular plant, and the cloister also of circular plant, all arranged sequentially.",
              category: "Monuments",
              image:
                "https://2016.openhouseporto.com/uploads/mosteiro-da-serra-do-pilar-1.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.138064,
              lng: -8.608128
            },
            {
              id: 7,
              name: "Estádio do Dragão",
              information:
                "The Estádio do Dragão is an all-seater football stadium located in Porto, Portugal. It is the current home stadium of FC Porto with a capacity of 50,033, making it the third largest football stadium in Portugal. Designed by Portuguese architect Manuel Salgado, the infrastructure was constructed to replace Porto's previous stadium, the Estádio das Antas, along with becoming one of the host venues for the UEFA Euro 2004 tournament finals. The inauguration took place on 16 November 2003 with a friendly match against Barcelona, setting an attendance record of 52,000 spectators. A UEFA category four stadium, it has held several international club competition and national team matches, receiving some of the Euro 2004 matches and the 2019 UEFA Nations League Final. It has also been selected to host the upcoming 2020 UEFA Super Cup.",
              category: "Sports",
              image:
                "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg",
              webite_link: "https://www.fcporto.pt/en",
              kids_allowed: "",
              rating: 0,
              lat: 41.16194,
              lng: -8.583612
            },
            {
              id: 8,
              name: "Museu FCPorto",
              information:
                "Today, 4,800 years later, the Draco constellation is multifunctional, evoking the liberation of historical episodes that inspire FC Porto; encapsulating in one image all of the stars that have donned the blue and white jersey; and serving as a reference and guide for future victories. At the Estadio Dragão Stadium, the FC Porto Museum by BMG gives the Draco Constellation its rightful place, giving it a celestial ceiling that dominates and illuminates a special and unique collection.",
              category: "Sports",
              image:
                "https://files.app.fcporto.pt/sources/5caf54043f168Z6oFIVtMTOoYYxMJ.jpg",
              webite_link: "https://www.fcporto.pt/en",
              kids_allowed: "",
              rating: 0,
              lat: 41.160842,
              lng: -8.582716
            },
            {
              id: 9,
              name: "Dragão Arena",
              information:
                "The Dragão Arena, however, is much more than a simple platform of competition. Its structure allows for the implementation of other activities such as concerts and cultural events. It has equipment and infrastructure support, starting with the transport network and access routes, modern and comfortable stands, VIP rooms and cabins, management and maintenance of intelligent resources, transforming it into an icon capable of environmental certification.",
              category: "Sports",
              image:
                "https://files.app.fcporto.pt/sources/5db85bc95525bC7TdCcANAlGv3eX2.jpg",
              webite_link: "https://www.fcporto.pt/en/club/facilities/",
              kids_allowed: "",
              rating: 0,
              lat: 41.163103,
              lng: -8.582421
            },
            {
              id: 10,
              name: "Estádio dos Arcos",
              information:
                "Estadio dos Arcos is a multi-use stadium in Vila do Conde, Portugal. It is used mostly for football matches of Primeira Liga club Rio Ave. The stadium is able to hold 12,815 people and was built in 1985.",
              category: "Sports",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/b/b8/Estadio_do_Rio_Ave_FC_%28Arcos%29.jpeg",
              webite_link: "https://www.zerozero.pt/estadio.php?id=7",
              kids_allowed: "",
              rating: 0,
              lat: 41.362947,
              lng: -8.740157
            },
            {
              id: 11,
              name: "Golfe Quinta do Fojo",
              information:
                "Peaceful place full of nature and passion. Perfect for a family environment. You can do lots of sports in here: Paddle, Golf, Tennis, etc.",
              category: "Sports",
              image:
                "http://www.golfojo.com/image/image_gallery?uuid=d2caa944-9e58-4976-a788-764f698fa261&groupId=53238&t=1421321774436",
              webite_link: "https://www.restaurantequintadofojo.pt/",
              kids_allowed: "",
              rating: 0,
              lat: 41.124978,
              lng: -8.637972
            },
            {
              id: 12,
              name: "Praia da Memória",
              information:
                "Previously known as Arenosa or Ladrões Beach, this area of sand became known as Memória Beach following the erection of a commemorative obelisk on the spot where liberal troops led by Pedro 4th (1st Emperor of Brazil) disembarked in 1832 in order to expel his absolutist brother, Miguel from the Portuguese throne.The open sands, surrounded by dunes and a few rocks, of Memória Beach see a lot of surfers given the strong waves coming ashore here. To the north, Marreco Beach begins and a favourite among children who love playing in either the sheltered pools that form among the rocks or, alternatively, in the children's park here.",
              category: "Beach",
              image:
                "http://app.regiaocentro.net/UserFiles/5474282586_f78b656850_z.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.230703,
              lng: -8.72156
            },

            {
              id: 13,
              name: "Praia de Moreiró",
              information:
                "It's an Oceanic Beach in the northern hemisphere bathed by the Atlantic Ocean, located on the coast of Portugal - Iberian Peninsula - in the municipality of Vila do Conde.Praia de Moreiró (North) Beach has a medium sized sand, always accompanied by dune vegetation along its whole length. To the north and center exist immersed rock formations by seaside. At east there are several agricultural fields. The beach is isolated, without houses at immediate vicinity, ideal for those who seek to rest in quietness.",
              category: "Beach",
              image:
                "https://www.allaboutportugal.pt/imagethumb/1700x/resize/856420",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.28577,
              lng: -8.731934
            },

            {
              id: 14,
              name: "Praia de Lavadores",
              information:
                "The closest to the city of Gaia, Lavadores Beach is the beginning of an unbroken length of sand that stretches on for many kilometres to the south flanked by.",
              category: "Beach",
              image:
                "https://cdn.olhares.pt/client/files/foto/big/600/6003174.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.12931,
              lng: -8.668327
            },
            {
              id: 15,
              name: "Praia das Sereias",
              information:
                "Praia da Sereia da Costa Verde, also known as Praia do Canidelo (North), belongs to the seafront of Salgueiros. Its beach is extensive and very wide. The North is bounded by a set of large rocks. Wooden walkways that protect the dune cord contiguous to the length of the sand. In addition, fences were added to increase the level of protection of the dunes and their vegetation.",
              category: "Beach",
              image:
                "http://www.allaboutportugal.pt/imagethumb/1700x/resize/855969",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.117292,
              lng: -8.663796
            },
            {
              id: 16,
              name: "Praia do Mindelo",
              information:
                "Praia de Mindelo Beach is situated in a small cove and hence, is sheltered from the traditional north winds. It is characterized for having a reduced dimensions sand and lots of rock formations. The beach is bounded north by a rock formation which marks the south border of the Paisagem Protegida Regional do Litoral de Vila do Conde e Reserva Ornitológica de Mindelo.",
              category: "Beach",
              image:
                "http://www.allaboutportugal.pt/imagethumb/1700x/resize/857312",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.309466,
              lng: -8.740407
            },
            {
              id: 17,
              name: "Praia de Matosinhos",
              information:
                "The Praia de Matosinhos beach is the largest beach with an easy access from central Porto. The beach offers a wide expanse of golden sands and waves that are suitable for surfing, while only being a 15 minute metro journey away from the centre of Porto. This guide will provide an overview of the facilities available at the Praia de Matosinhos and details on how to travel to this beach. Matosinhos beach lies on the northern banks of the Douro estuary and faces westwards out to the Atlantic Ocean. The beach is situated within the town of Matosinhos and is bound by the fishing and container port at the northern edge, and the Castelo do Queijo (cheese castle!) at the southern end. The proximity of the port means that the water quality is not up to the standard of a blue flag, but it is nevertheless acceptable for surfing or swimming.",
              category: "Beach",
              image:
                "https://praiasprio.beachcam.pt/media/5094/ed_praia-de-matosinhos.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.176394,
              lng: -8.692687
            },
            {
              id: 18,
              name: "Passeio Alegre Garden",
              information:
                "It is a gateway to the Foz, the district where the river meets the sea. Locals (a.k.a. “fozeiros”) adore it, and it’s a real amusement park. It has a mini golf course, one of the city’s nicest restrooms (with Art Nouveau-tile covered walls), a fountain, a famous kiosk popularly known as the “Swiss chalet” and a bandstand with live music on Sundays. If you like celebrity spotting, we can tell you Sara Carbonero, wife of Spanish footballer Iker Casillas, is a regular.",
              category: "Monuments",
              image: "https://media.timeout.com/images/103866420/image.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14815,
              lng: -8.670759
            },
            {
              id: 19,
              name: "Morro Garden",
              information:
                "City lifers will tell you that everyone in Porto should watch the sun rise at the Morro garden at least once in their lifetime. Time Out thinks the garden is great at any time of the day. Its view is, anyway. You can get there with the subway (Jardim do Morro stop) but crossing the upper deck of the Luiz I bridge on foot is an experience almost as gratifying as lying on the garden’s slopes.",
              category: "Monuments",
              image:
                "https://www.heyporto.com/wp-content/uploads/2018/03/Jardim_do_Morroweb1.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.137067,
              lng: -8.609087
            },
            {
              id: 20,
              name: "Ponte Luís I",
              information:
                "The double-decker Dom Luis I bridge is an icon of the city of Porto. It spans the River Douro linking the Port wine houses of Vila Nova de Gaia with the bustling downtown Ribeira district of Porto. Construction took place between 1881 and 1886 with the bridge being built adjacent to an existing bridge which it replaced. The granite pillars of the original bridge are still in place, standing on the Ribeira like a pair of gate posts. It is probably no coincidence that the bridge passes more than a fleeting resemblance of its neighbouring bridge, the Dona Maria Pia bridge. Both bridges consist of huge and complex ironwork frameworks with a great arch supporting the transit way. This should come as no surprise as the D. Maria Pia bridge was designed by Gustave Eiffel of Paris tower fame!",
              category: "Bridges",
              image:
                "https://i2.wp.com/ncultura.pt/wp-content/uploads/2015/11/10507111_589090381224654_6051676320260456925_o.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.139813,
              lng: -8.609406
            },

            {
              id: 21,
              name: "Ponte Infante Dom Henrique",
              information:
                "Inaugurated in March 2003, the Infante Bridge was named in honor of the Infante D. Henrique. It's a unique piece of engineering, designed by architect Adão da Fonseca, and was built to accommodate cars that were no longer able to drive on the upper level of the Luis I Bridge, now used by the Porto Metro. It's a high elevation bridge, with a Maillart-type elliptical arch that is so unusually wide and shallow that it holds a world record for the ratio of its height of 25 meters and its span of 280 meters. Within this type of bridge, the Infante Bridge is considered one of the most beautiful by experts worldwide. The bridge connects the area of Fontaínhas - one of the liveliest areas around the time of S. João festivals - in Porto, to the town of Oliveira do Douro in Vila Nova de Gaia.",
              category: "Bridges",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/a/ad/Ponte_do_Infante_-_Porto.JPG",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.141097,
              lng: -8.601643
            },

            {
              id: 22,
              name: "Ponte de D. Maria Pia",
              information:
                "The Maria Pia bridge (Ponte Maria Pia), commonly known as Ponte Dona Maria, is a railway bridge built in 1877 by Gustave Eiffel in Porto, Portugal. Built of wrought iron, its two-hinged crescent arch used to carry the railway to Lisbon for 353 metres (1,158 ft) across the River Douro at a height of 60 m (200 ft) above the river. When constructed it was the longest single-arch span in the world. It is no longer in use as a rail bridge, a modern replacement having been constructed in 1991. In 1875 the Royal Portuguese Railway Company announced a competition for a bridge to carry the Lisbon to Porto railway across the river Douro. This was very technically demanding. The river was fast-flowing, its depth could be as much as 20 m (66 ft) when in flood and the river bed was made up of a deep layer of gravel. These factors ruled out the construction of piers in the river, so that the bridge would have to have a central span of 160 m (520 ft). At the time the longest bridge span was the 156 m (512 ft) of the bridge built by James B. Eads over the Mississippi at St Louis. The Maria Pia Bridge during construction: the two halves of the arch have been connected, but their weight is still supported by cables.",
              category: "Bridges",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/5/58/Porto_-_Ponte_de_D._Maria_Pia_e_Ponte_do_Infante.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.139854,
              lng: -8.597122
            },
            {
              id: 23,
              name: "Rua Escura",
              information:
                "You can find the street off of Porto Cathedral, on the back stairs. The name Rua Escura literally means the Dark Street. In terms of characteristics, Rua Escura is a short narrow street, but with an interesting character and a deep history. The buildings are 2-3 stories long and they don’t get much sun exposure.",
              category: "Streets",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/e/eb/Porto%2C_Rua_Escura_%284%29.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.143335,
              lng: -8.611553
            },
            {
              id: 24,
              name: "Cálem",
              information:
                "Who says Port wine is just for appetizers and desserts? Taste the best of our Wines with an assembly of divine Chocolates and Cheeses. Guided Tour. Most Visited Port Cellar. Wine Tasting.",
              category: "Wine",
              image: "https://tour.calem.pt/public/imgs/caves.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.138097,
              lng: -8.610897
            },
            {
              id: 25,
              name: "Rio Ave",
              information:
                "Ave is a Portuguese river, which rises in the Serra da Cabreira, in the municipality of Vieira do Minho, at about 1200 m altitude. It travels about 85 km until reaching the Atlantic Ocean, in the south of Vila do Conde. Its hydrographic basin has an area of ​​approximately 1390 km², covering 15 municipalities.",
              category: "Rivers",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/3/39/Vila_do_Conde.JPG",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.363226,
              lng: -8.720624
            },
            {
              id: 26,
              name: "Confeitaria do Bolhão",
              information:
                "It is a century old house from 1896, one of the first in Porto. It celebrates 120 years and is located in the Bolhão market. The current owner is José Rodriguez, son of Portuguese, returning from Venezuela in 1998. It was an auction and achieved this classic. Retrieve an old team and select some dishes from Venezuela. It has one of the most complete shop windows in the country, so you can’t even get a sense of the amount of cakes they have.",
              category: "Gastronomy",
              image:
                "https://lh3.googleusercontent.com/proxy/BjgVqHeVGJBVl14xQuhq0tY_-FSg52ZxBdWb9fzn4WVXwBi6h5AZg2eSXgBw0y4zmlmR2IBAQfdKOAKaTFO19ol96ljt7S0jy-t6Lkm-j3BqiKUYr_VoYVaNX8-i6-wSxtnDK2FQIKW_agkaL_S3nhrUi4Z6MQ",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14872,
              lng: -8.607596
            },
            {
              id: 27,
              name: "Rua das Flores",
              information:
                "Rua das Flores extends from São Bento station all the way to Palácio das Artes museum on Largo do São Domingos. The name of the street literally means Flowers’ Street because the land it was built on had plantations of flowers and some vegetables. The street used to connect many religious buildings like the 1521 Igreja da Misericórdia, the 1245 São Domingos Convent (now it’s Palácio das Artes) and the 1518 Avé-Maria de São Bento Convent (it doesn’t exist anymore, São Bento Railway Station was built in its place). The history of this street dates back to 1521 when King Dom Manuel ordered the construction of Rua das Flores on a land owned by the Bishop. The street was sort of affirmation of the monarchy presence in the religious Porto. It was built in a time where Porto was undergoing an image alteration and the religious order thought that building more Christian buildings would force the Jews out.",
              category: "Streets",
              image:
                "https://lh3.googleusercontent.com/proxy/0Em8kHiMiqUWCSLhrg7H-7Rd_6q2eWYeQ--Ew0dV8JuhG70cfa-zG2Kzr6BXeR-_7_W9taDKlO2kX9CvVoBZTDUPu_K7viZNg8kRkTw",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.144251,
              lng: -8.613057
            },
            {
              id: 28,
              name: "Rua de Cedofeita",
              information:
                "Porto was always the big brother of commerce, even today with tourism – and Rua de Cedofeita proves it. The street goes from the famous Praça de Carlos Alberto all the way to Rua da Boavista. At first, the street was called Rua da Estrada (the road’s street) because it used to take people to Póvoa de Varzim and Viana de Castelo. Later on, it inherited its name Rua de Cedofeita from the Roman church of São Martinho de Cedofeita. Shape-wise, Rua de Cedofeita was built with the logic of continuity so it is very straight. The logic of Porto as a scenery was another objective, as the street was created to be in-line with Torre dos Clérigos. Rua de Cedofeita opened in 1762 with the goal of connecting the high Porto area with Ribeira. The person responsible for the work was João de Almada e Melo through the Public Works Board since there were no private projects at the time. The only people that could construct streets were architects and the military.",
              category: "Streets",
              image:
                "https://industriasculturais.files.wordpress.com/2009/02/cedofeita.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.152752,
              lng: -8.617787
            },
            {
              id: 29,
              name: "Rua de São João",
              information:
                "Close to the Ribeira and connecting the river to Rua dos Mercadores, you’ll find one of the most important, culturally relevant and famous streets in Porto. Named after Saint John, the street is one of those streets that come to life around June 23rd, where São João festival celebrations take place. The street was designed by João Almada e Melo, the Marquês de Pombal of Porto. His design had an Italian influence. You can also see the unique 18th century Portuguese architecture called Pombaline style where windows are all on the same level, even the ones with balconies. The reason this street was opened in the 18th century was to build an alternative to Rua dos Mercadores which was getting too small to transport goods. It was really done in an industrial way by putting the street above the river.",
              category: "Streets",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/8/80/Rua_de_S%C3%A3o_Jo%C3%A3o%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_04.JPG",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.152752,
              lng: -8.617787
            },
            {
              id: 30,
              name: "Largo de São Domingos",
              information:
                "Largo do São Domingos connects many famous streets in Porto from different eras: medieval (Rua dos Mercadores), 16th century (Rua das Flores) and 19th century (Rua Mouzinho da Silveira). The name comes from the São Domingos Monastery which was there before the Largo do São Domingos was built. This street was built to answer the questions of accessibility and connection. The street made it possible to go north or to Torre dos Clérigos. It also connects to Ribeira. The gothic São Domingos Monastery which was built between 1239 and 1245. It was destroyed by fire in 1832 and only the façade survived. Later on, it became the place where the municipality would get together for important meetings. At one point in time, Banco de Portugal opened, making Largo do São Domingos financially important. Now the Monastery is a youth foundation.",
              category: "Streets",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/4/4a/Largo_S_Domingos_%28Porto%29.JPG",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.142917,
              lng: -8.614714
            },
            {
              id: 31,
              name: "Rua de Mouzinho da Silveira",
              information:
                "Rua de Mouzinho da Silveira is parallel to Rua das Flores. The street was named after José Xavier Mouzinho da Silveira, one of the most important political figures in the Liberal Revolution of 1820 that started in Porto. The street is straight with a bend towards the end. It took the route of Rio da Vila, concealing the river in a subterranean tunnel which helped solve one of the main public health concerns in the urban center at the time. Planned in 1872 and opened in 1875, Rua Mouzinho da Silveira serves the same purpose as Rua das Flores, connecting the old city’s interior with Ribeira. In the 1870s, there was intense commercial traffic in Ribeira making it difficult to drive in the narrow streets of the old medieval city structures. So, a need for a link between the riverside and the city center to connect São Bento with Rua de São João was urgent.",
              category: "Streets",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rua_Mouzinho_Silveira_%28Porto%29.JPG",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14351,
              lng: -8.613206
            },
            {
              id: 32,
              name: "Rua de Sá da Bandeira",
              information:
                "Close to Aliados and Bolhão, you can find one of the most famous streets in Porto, Rua de Sá da Bandeira. The street was named after Bernardo de Sá Nogueira de Figueiredo, a politician who was involved in the Siege of Porto. The street has one of the most unique and memorable aspects of a street. It makes a cool curve near Sá da Bandeira theater. For some reason, when I think of Sá da Bandeira, I think of an art district. The street opened in 1836 when the land was abandoned by priests who ran away when D. Pedro IV entered the city, leaving the convents behind. The goal of opening Sá da Bandeira was to create a fast connection between Praça de Dom Pedro (now Praça da Liberdade) and Rua do Bonjardim.",
              category: "Streets",
              image:
                "https://lh3.googleusercontent.com/proxy/FQsszpp1t1_FMrQphf3EBxP5AEJJV2HyhrzcAGocgcLwHOHTaR_mXLYITHuYluyBSu_i8ws6eNUeUr4bX7it8zwSyz7JR8ttJUzJ1wInL0y2G_ZUoRYpufefgShwfFlNGfoYl_ifKtm0PxCJ9T4p",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14351,
              lng: -8.613206
            },
            {
              id: 33,
              name: "Rio Douro",
              information:
                "The Douro River is a river that rises in the peaks of the Serra de Urbana, in the Spanish province of Soria, at 2160 meters of altitude, and crosses the north of Portugal to its mouth next to the cities of Porto and Vila Nova de Gaia. It is the third longest river in the Iberian peninsula.",
              category: "Rivers",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/5/55/O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.140188,
              lng: -8.614057
            },
            {
              id: 34,
              name: "TAVI",
              information:
                "A very old confectionery in the city is Tavi - Confeitaria da Foz. Its atmosphere is modern, the view from the store is incredible, so it is worth going to see the place and try at least one of the sweets. They serve breakfast and light dishes, a good option is to eat something salty and then a very tasty dessert. The bakery part of Tavi is also great, with very different bread styles. All types of snacks and sweets are on the site, to see just click here. Tavi has a beautiful view of the sea, one of the best times to go to it is in the late afternoon, when the sun is setting.",
              category: "Gastronomy",
              image:
                "https://www.tavi.pt/static/1094_Tavi_Padaria_Banner_Full.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.152089,
              lng: -8.677469
            },
            {
              id: 35,
              name: "Taylor’s Port",
              information:
                "Taylor’s is quite simply an exemplary Port producer – their vintage releases are routinely considered amongst the finest of the Douro Valley, adored by critics and connoisseurs alike. Produced at the famous Quinta de Vargellas, it is Taylor’s structure, incredible depth, and complexity that sets it apart from other Vintage Ports in the region. The 1985 is very much in the Taylor’s vintage mold: deeply colored, it offers a rich, expressive nose full of black fruits, spices, and cigar-box. The palate is rich, complex and utterly beguiling – one for that special occasion.",
              category: "Wine",
              image:
                "https://www.taylor.pt/content/uploads/maingallery/crops/13_big_1506444185.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.134009,
              lng: -8.614287
            },
            {
              id: 36,
              name: "Quinta Do Noval",
              information:
                "It was Noval’s former owner Jose da Silva who first saw the potential of a small plot of ungrafted vines that continue to produce Nacional, the most sought-after of all Ports. Today run by the amiable Christian Seely of the AXA-Millesimes group, Nacional is not simply an outstanding Port; it is one of the greatest fine wines on earth. Only produced in the best vintages, the 1985 Nacional is a Port of stupendous depth, power, and elegance, with a distinctive earthy, spicy dark plum character. However, for the full potential of Nacional to be seen, the wine must be allowed to age; it becomes a monumental Port after 20-30 years cellaring, age adding flesh, richness and yet more complexity.",
              category: "Wine",
              image:
                "https://www.quintadonoval.com/image/galerie/276/image-moyen-quinta-do-noval-serge-chapuis-2018.jpg?1573124397",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.13781,
              lng: -8.612063
            },
            {
              id: 37,
              name: "Graham’s",
              information:
                "Another top-class producer, Graham’s reputation has long been anchored by its fantastic Vintage Port. Very reasonably priced and consistency excellent, it has proven itself to be one of the top Ports in every declared vintage, perhaps the most consistent of all. The 2003, although still very young, is well on its way toward being another great Vintage Port, full of rich black-fruits and a lush opulence that conceals a strong tannic backbone. Very enjoyable upon release, these wines will nonetheless age for at least 30/40 years, sometimes longer.",
              category: "Wine",
              image:
                "https://www.grahams-port.com/img/general/the-grahams-1980-lodge_img_16_1459873749.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.137448,
              lng: -8.623909
            },
            {
              id: 38,
              name: "Symington Family Estates",
              information:
                "Another member of the Symington group, Smith Woodhouse is celebrated for its consistently high quality but reasonably priced Vintage Port. Produced in the legendary Madalena quinta in the Rio Torto Valley, these Ports are simply wonderful; powerful, spicy, intense and long-lived. The 1985 is very much a case in point, boasting heady aromas and succulent, intense and well-balanced palate. It comes highly recommended.",
              category: "Wine",
              image:
                "https://www.gqportugal.pt/media/gallery/QLR-Armazem-de-Vinho-do-Porto.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.133231,
              lng: -8.616768
            },
            {
              id: 39,
              name: "Mauritânia Real",
              information:
                "For more than two decades, Mauritânia Real has, through its own merit and Artur Moreira's perseverance, managed to stand out with a quality of French that meets the best of Invicta. The French classic here has a version at home, with a fried egg on top, and a special version, which includes three prawns in the game, or not found in Matosinhos. Quality and ready-made cooking are two of the main qualities of the house. Here, even the potatoes, chopsticks or the English, are cut on the same day and fried after ordering. Therefore, a francesinha is fully customizable.",
              category: "Gastronomy",
              image:
                "https://www.allaboutportugal.pt/imagethumb/1700x/resize/751484",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.183492,
              lng: -8.684471
            },
            {
              id: 40,
              name: "Café Santiago",
              information:
                "This family business has in recent years become a location of the city's most famous Frenchmen. One of the secrets of the francesinha is not sauce. It is called `Essence`, a mixture of drinks generated that is used during the process. The filling is made with mortadella, fresh sausage and sausage from Salsicharia Leandro, steak (from veal, pork or turkey), cheese and ham. Above, the egg surrounded by cheese with a yolk shows a kind of signature of the house..",
              category: "Gastronomy",
              image:
                "https://d1bvpoagx8hqbg.cloudfront.net/originals/cafe-santiago-777cf465d51a9526f6894fccafc6caab.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.146572,
              lng: -8.604911
            },
            {
              id: 41,
              name: "Ponte da Arrábida",
              information:
                "The Arrábida Bridge is an arched bridge over the Douro River that connects Porto to Vila Nova de Gaia, in Portugal. Since the 1930s, it was necessary to create alternative alternatives to bridges in an old way to respond to the growing flow of road circulation.",
              category: "Bridges",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/7/71/Ponte_da_Arr%C3%A1bida_by_Ant%C3%B3nio_Amen-2.jpg",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: 41.14739,
              lng: -8.640269
            }
          ]
        });
      }

      if (JSON.parse(localStorage.getItem("suggestions"))) {
        this.$store.commit("SET_SUGGESTION", {
          suggestions: JSON.parse(localStorage.getItem("suggestions"))
        });
      }

      if (JSON.parse(localStorage.getItem("followedItinerary"))) {
        this.$store.commit("SET_FOLLOWS", {
          followedItinerary: JSON.parse(
            localStorage.getItem("followedItinerary")
          )
        });
      }

      if (JSON.parse(localStorage.getItem("itineraries"))) {
        this.$store.commit("SET_ITINERARIES", {
          itineraries: JSON.parse(localStorage.getItem("itineraries"))
        });
      }

      if (JSON.parse(localStorage.getItem("selectedItinerary"))) {
        this.$store.commit(
          "SET_SELECTED_ITINERARY",
          JSON.parse(localStorage.getItem("selectedItinerary"))
        );
      }

      // if (JSON.parse(localStorage.getItem("countries"))) {
      //   this.$store.commit("SET_COUNTRIES", {
      //     users: JSON.parse(localStorage.getItem("countries"))
      //   });
      // } else {
      //   this.$store.commit("SET_COUNTRIES", {
      //     countries: [
      //       {
      //         id: 1,
      //         name: "Cabo Verde"
      //       },
      //       {
      //         id: 2,
      //         name: "Portugal"
      //       },
      //       {
      //         id: 3,
      //         name: "Angola"
      //       },
      //       {
      //         id: 4,
      //         name: "Belgium"
      //       },
      //       {
      //         id: 5,
      //         name: "Brazil"
      //       },
      //       {
      //         id: 6,
      //         name: "Denmark"
      //       },
      //       {
      //         id: 7,
      //         name: "Egypt"
      //       },
      //       {
      //         id: 8,
      //         name: "France"
      //       },
      //       {
      //         id: 9,
      //         name: "Greece"
      //       },
      //       {
      //         id: 10,
      //         name: "Honduras"
      //       },
      //       {
      //         id: 11,
      //         name: "India"
      //       },
      //       {
      //         id: 12,
      //         name: "Japan"
      //       },
      //       {
      //         id: 13,
      //         name: "Kenya"
      //       },
      //       {
      //         id: 14,
      //         name: "Luxembourg"
      //       },
      //       {
      //         id: 15,
      //         name: "Madagascar"
      //       },
      //       {
      //         id: 16,
      //         name: "Norway"
      //       },
      //       {
      //         id: 17,
      //         name: "Oman"
      //       },

      //       {
      //         id: 18,
      //         name: "Qatar"
      //       },
      //       {
      //         id: 19,
      //         name: "Russia"
      //       },
      //       {
      //         id: 20,
      //         name: "Sao Tome and Principe"
      //       },
      //       {
      //         id: 21,
      //         name: "Togo"
      //       },
      //       {
      //         id: 22,
      //         name: "Uganda"
      //       },
      //       {
      //         id: 23,
      //         name: "Venezuela"
      //       },
      //       {
      //         id: 24,
      //         name: "Yemen"
      //       },
      //       {
      //         id: 25,
      //         name: "Zambia"
      //       }
      //     ]
      //   });
      // }
    }
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: #fefefa !important;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 2px;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(54, 54, 54, 0.7);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
