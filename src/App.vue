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
    async setStorage() {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
      // *All categories
      try {
        await this.$store.dispatch("allCategories");
      } catch (err) {
        alert(err);
        return err;
      }

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
      //* A1

      try {
        await this.$store.dispatch("allUsers");
      } catch (err) {
        alert(err);
        return err;
      }

      // if (JSON.parse(localStorage.getItem("users"))) {
      //   this.$store.commit("SET_USERS", {
      //     users: JSON.parse(localStorage.getItem("users"))
      //   });
      // } else {
      //   this.$store.commit("SET_USERS", {
      //     users: [
      //       {
      //         id: 1,
      //         name: "Nuno",
      //         username: "NunoPereiraSousa",
      //         email: "nunosousa@gmail.com",
      //         // age: 19,
      //         birth: "09-10-2000",
      //         // id_nationality: "Portuguese",
      //         location: "Porto, Portugal",
      //         // description:
      //         //   "Hello! My name is Nuno and currently studying at ESMAD.",
      //         photo: "../src/assets/OurTeam/Nuno.jpg",
      //         id_user_type: 2,
      //         blocked: false,
      //         password: "123"
      //       },
      //       {
      //         id: 2,
      //         name: "Tiago",
      //         username: "Titas",
      //         birth: "14-03-2000",
      //         email: "tiagopina@gmail.com",
      //         // age: 19,
      //         // id_nationality: "Cape Verdean",
      //         location: "Vila do Conde, Portugal",
      //         // description: "Concordo com o Nuno na descrição",
      //         photo: "../src/assets/OurTeam/Titas.png",
      //         id_user_type: 2,
      //         blocked: false,
      //         password: "1234"
      //       },
      //       {
      //         id: 3,
      //         name: "admin",
      //         username: "admin1",
      //         email: "admin@gmail.com",
      //         // age: "19",
      //         birth: "09-10-2000",
      //         // id_nationality: "Portuguese",
      //         location: "Porto, Portugal",
      //         // description: "",
      //         photo: "",
      //         id_user_type: 1,
      //         blocked: false,
      //         password: "12345"
      //       },
      //       {
      //         id: 4,
      //         name: "Kobe",
      //         // surname: "Bryant",
      //         username: "KobeBryant",
      //         email: "kobe24@gmail.com",
      //         // age: "41",
      //         // id_nationality: "American",
      //         location: "United States of America",
      //         // description: "5x NBA Champion. 17x NBA All-Star",
      //         photo:
      //           "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
      //         id_user_type: 2,
      //         blocked: false,
      //         password: "gigi2",
      //         birth: "23-08-1978"
      //       },
      //       {
      //         id: 5,
      //         name: "Anna",
      //         username: "Anna2",
      //         email: "anna@gmail.com",
      //         // age: "18",
      //         // id_nationality: "French",
      //         location: "Paris, France",
      //         // description: "French traveller :)",
      //         photo:
      //           "https://images.squarespace-cdn.com/content/v1/570283d39f72667cfc9ccc8b/1554519481891-KLF6FNI41KK4H5LUGB3I/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Anna%2BPancaldi-5.jpg?format=2500w",
      //         id_user_type: 2,
      //         blocked: true,
      //         password: "anna123",
      //         birth: "17-10-2001"
      //       },
      //       {
      //         id: 6,
      //         name: "Julie",
      //         username: "JulieTyler2",
      //         email: "julieee@gmail.com",
      //         // age: "26",
      //         // id_nationality: "American",
      //         location: "United States of America",
      //         // description: "American travelling around the world",
      //         photo:
      //           "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
      //         id_user_type: 2,
      //         blocked: false,
      //         password: "julieee",
      //         birth: "15-05-1994"
      //       },
      //       {
      //         id: 7,
      //         name: "Stephen",
      //         username: "Curry30",
      //         email: "sc30@gmail.com",
      //         // age: "31",
      //         // id_nationality: "American",
      //         // description: "NBA Champion for Golden State Warriors",
      //         photo:
      //           "https://www.theplayoffs.com.br/wp-content/uploads/2019/01/Curry-em-vit%C3%B3ria-do-Golden-State-Warriors.jpg",
      //         id_user_type: 2,
      //         location: "United States of America",
      //         blocked: false,
      //         password: "curry30",
      //         birth: "14-03-1988"
      //       }
      //     ]
      //   });
      // }

      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

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

      // if (JSON.parse(localStorage.getItem("comments"))) {
      //   this.$store.commit("SET_COMMENTS", {
      //     comments: JSON.parse(localStorage.getItem("comments"))
      //   });
      // } else {
      //   this.$store.commit("SET_COMMENTS", {
      //     comments: [
      //       {
      //         id: 1,
      //         content: "The best place to watch the sun7!",
      //         rating: 5,
      //         date: "29-1-2020, 20:21:59",
      //         userName: "NunoPereiraSousa",
      //         userId: 1,
      //         userPhoto: "../src/assets/OurTeam/Nuno.jpg",
      //         identityId: 19
      //       },
      //       {
      //         id: 2,
      //         content: "The best place to watch the sun7!",
      //         rating: 4,
      //         date: "29-1-2020, 20:21:59",
      //         userName: "Titas",
      //         userId: 2,
      //         userPhoto: "../src/assets/OurTeam/Titas.png",
      //         identityId: 19
      //       },
      //       {
      //         id: 3,
      //         content: "Uau! Gorgeous!",
      //         rating: 5,
      //         date: "29-1-2020, 20:21:59",
      //         userName: "KobeBryant",
      //         userId: 2,
      //         userPhoto:
      //           "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
      //         identityId: 19
      //       },
      //       {
      //         id: 4,
      //         content: "Amazing Stadium! Go FCPorto!",
      //         rating: 5,
      //         date: "29-1-2020, 20:21:59",
      //         userName: "KobeBryant",
      //         userId: 2,
      //         userPhoto:
      //           "https://www.correiodoestado.com.br/upload/dn_noticia/2020/01/kobe-bryant.jpg",
      //         identityId: 7
      //       },
      //       {
      //         id: 5,
      //         content:
      //           "Probably one of the most enjoyable things to do in the world, dip a glass of history under the vines that form the canopy to the terrace. The view of Porto on a sunny day is something and if it’s winter and you are the only ones braving the cold - bonus. And having Sophia serve you is an added pleasure",
      //         rating: 5,
      //         date: "26-1-2020, 18:21:11",
      //         userName: "JulieTyler2",
      //         userId: 6,
      //         userPhoto:
      //           "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
      //         identityId: 37
      //       },
      //       {
      //         id: 6,
      //         content: "Super schöner Ort! Sollte man unbedingt besuchen.",
      //         rating: 4,
      //         date: "26-1-2020, 19:29:37",
      //         userName: "JulieTyler2",
      //         userId: 6,
      //         userPhoto:
      //           "https://media.rtp.pt/thevoiceportugal/wp-content/uploads/sites/76/2019/11/JoanaAbreu.jpg",
      //         identityId: 37
      //       },
      //       {
      //         id: 7,
      //         content:
      //           "Wow what a fantastic place. Port has never been my thing but the history and size of the operation is one you cannot miss. Tasting afterwards was fun but the tour was a wealth of knowledge about port it's history and wine making itself.",
      //         rating: 5,
      //         date: "26-1-2020, 23:46:20",
      //         userName: "Curry30",
      //         userId: 7,
      //         userPhoto:
      //           "https://www.theplayoffs.com.br/wp-content/uploads/2019/01/Curry-em-vit%C3%B3ria-do-Golden-State-Warriors.jpg",
      //         identityId: 37
      //       },
      //       {
      //         id: 8,
      //         content:
      //           "가이아 지역 언덕에 위치하고 있어 오가기가 조금 어려울 수도 있지만, 덕분에 사람도 많지 않아 한적하고 뷰도 훌륭합니다. 설명도 재미있고 볼거리도 많아서 즐거운 시간이었습니다. 그리고 역시 포트 와인 시음은 너무나 알차고 훌륭한 시간이었습니다. 예약 꼭 하고 가세요~~",
      //         rating: 5,
      //         date: "26-1-2020, 22:01:00",
      //         userName: "Anna2",
      //         userId: 5,
      //         userPhoto:
      //           "https://images.squarespace-cdn.com/content/v1/570283d39f72667cfc9ccc8b/1554519481891-KLF6FNI41KK4H5LUGB3I/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Anna%2BPancaldi-5.jpg?format=2500w",
      //         identityId: 37
      //       }
      //     ]
      //   });
      // }

      // if (JSON.parse(localStorage.getItem("notifications"))) {
      //   this.$store.commit("SET_NOTIFICATIONS", {
      //     notifications: JSON.parse(localStorage.getItem("notifications"))
      //   });
      // } else {
      //   this.$store.commit("SET_NOTIFICATIONS", {
      //     notifications: [
      //       {
      //         id: 1,
      //         userId: 4,
      //         relatedTo: "Morro Garden",
      //         sugestionDate: "27/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 2,
      //         userId: 4,
      //         relatedTo: "Rio Ave Stadium",
      //         sugestionDate: "25/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 3,
      //         userId: 4,
      //         relatedTo: "Praia da Memória",
      //         sugestionDate: "28/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "checked"
      //       },
      //       {
      //         id: 4,
      //         userId: 4,
      //         relatedTo: "Praia de Moreiró",
      //         sugestionDate: "22/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 5,
      //         userId: 1,
      //         relatedTo: "Praia de Lavadores",
      //         sugestionDate: "20/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "checked"
      //       },
      //       {
      //         id: 6,
      //         userId: 4,
      //         relatedTo: "Praia das Sereias",
      //         sugestionDate: "30/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 7,
      //         userId: 2,
      //         relatedTo: "Praia do Mindelo",
      //         sugestionDate: "31/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 8,
      //         userId: 2,
      //         relatedTo: "Praia de Matosinhos",
      //         sugestionDate: "29/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "checked"
      //       },
      //       {
      //         id: 9,
      //         userId: 2,
      //         relatedTo: "Passeio Alegre Garden",
      //         sugestionDate: "30/01/2020",
      //         answear: "Your sugestion was accepted",
      //         status: "not-read"
      //       },
      //       {
      //         id: 10,
      //         userId: 4,
      //         relatedTo: "Morro Garden",
      //         sugestionDate: "30/01/2020",
      //         answear: "Your sugestion was not accepted",
      //         status: "not-read"
      //       }
      //     ]
      //   });
      // }

      // try {
      //   await this.$store.dispatch("allCategories");
      // } catch (err) {
      //   alert(err);
      //   return err;
      // }

      // if (JSON.parse(localStorage.getItem("categories"))) {
      //   this.$store.commit("SET_CATEGORIES", {
      //     categories: JSON.parse(localStorage.getItem("categories"))
      //   });
      // } else {
      //   this.$store.commit("SET_CATEGORIES", {
      //     categories: [
      //       {
      //         id: 1,
      //         name: "Beach",
      //         img:
      //           "https://images.unsplash.com/photo-1476129718124-c0494399ab1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
      //       },
      //       {
      //         id: 2,
      //         name: "Bridges",
      //         img:
      //           "https://images.unsplash.com/photo-1552333709-c465f89a4dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      //       },
      //       {
      //         id: 3,
      //         name: "Gastronomy",
      //         img:
      //           "https://lh3.googleusercontent.com/proxy/H-NreOjbwCeeJsWGf9KIDdTDdoGzvnQY4j6kd6kau2auLdRZNO-ECCp2Udb0bgKWH_1NaKLAlizvV0aNNBHsKpp1q9a47QNS9eyd_IwXBJ_R6Bl3_FlVoaMZ"
      //       },
      //       {
      //         id: 4,
      //         name: "Monuments",
      //         img:
      //           "https://images.unsplash.com/photo-1533285860212-c85e7140a408?ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
      //       },
      //       {
      //         id: 5,
      //         name: "Rivers",
      //         img:
      //           "https://images.unsplash.com/photo-1542128219-f00cc5891ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
      //       },
      //       {
      //         id: 6,
      //         name: "Sports",
      //         img:
      //           "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg"
      //       },
      //       {
      //         id: 7,
      //         name: "Streets",
      //         img:
      //           "https://images.unsplash.com/photo-1581118222166-f0602c1f8730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      //       },
      //       {
      //         id: 8,
      //         name: "Wine",
      //         img:
      //           "https://images.unsplash.com/photo-1560089168-4169937e37d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
      //       }
      //     ]
      //   });
      // }
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      // todo
      try {
        await this.$store.dispatch("getAllFavorite");
      } catch (err) {
        alert(err);
        return err;
      }
      // todo

      try {
        await this.$store.dispatch("allItineraries");
      } catch (err) {
        alert(err);
        return err;
      }

      try {
        await this.$store.dispatch("allFullItineraries");
      } catch (err) {
        alert(err);
        return err;
      }

      // getNumFollowers
      // if (JSON.parse(localStorage.getItem("itineraries"))) {
      //   this.$store.commit("SET_ITINERARIES", {
      //     itineraries: JSON.parse(localStorage.getItem("itineraries"))
      //   });
      // } else {
      //   this.$store.commit("SET_ITINERARIES", {
      //     itineraries: [
      //       {
      //         id: 1,
      //         title: "Short Monuments Route",
      //         kids: 0,
      //         adults: "3",
      //         food: "",
      //         Visitelocations: [
      //           {
      //             id: 1,
      //             name: "Clerigos Tower",
      //             information:
      //               "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
      //             category: "Monuments",
      //             image:
      //               "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.14569,
      //             lng: -8.614597
      //           },
      //           {
      //             id: 3,
      //             name: "Church of São Francisco",
      //             information:
      //               "The Franciscan Order was established in Porto around 1223. Initially, the order was antagonised by the secular and clergy of other religious institutions, particularly by the bishop of Porto. It took a papal bull, the Bulla Doelentis accepimus by Pope Innocent V, to restore to the Franciscans the plot of land previously donated to them. They began building the convent and a first, small church dedicated to Saint Francis of Assisi around 1244.",
      //             category: "Monuments",
      //             image:
      //               "https://lonelyplanetimages.imgix.net/a/g/hi/t/efd074643379a5c81f7a6f4a3ba33f62-igreja-de-sao-francisco.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.141183,
      //             lng: -8.615308
      //           },
      //           {
      //             id: 4,
      //             name: "Congregados Church",
      //             information:
      //               "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
      //             category: "Monuments",
      //             image:
      //               "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.146231,
      //             lng: -8.610748
      //           }
      //         ],
      //         userId: 1,
      //         userName: "NunoPereiraSousa",
      //         fallowedCount: 0
      //       },
      //       {
      //         id: 2,
      //         title: "Monuments",
      //         kids: 1,
      //         adults: "2",
      //         food: "",
      //         Visitelocations: [
      //           {
      //             id: 1,
      //             name: "Clerigos Tower",
      //             information:
      //               "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
      //             category: "Monuments",
      //             image:
      //               "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.14569,
      //             lng: -8.614597
      //           },
      //           {
      //             id: 3,
      //             name: "Church of São Francisco",
      //             information:
      //               "The Franciscan Order was established in Porto around 1223. Initially, the order was antagonised by the secular and clergy of other religious institutions, particularly by the bishop of Porto. It took a papal bull, the Bulla Doelentis accepimus by Pope Innocent V, to restore to the Franciscans the plot of land previously donated to them. They began building the convent and a first, small church dedicated to Saint Francis of Assisi around 1244.",
      //             category: "Monuments",
      //             image:
      //               "https://lonelyplanetimages.imgix.net/a/g/hi/t/efd074643379a5c81f7a6f4a3ba33f62-igreja-de-sao-francisco.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.141183,
      //             lng: -8.615308
      //           },
      //           {
      //             id: 4,
      //             name: "Congregados Church",
      //             information:
      //               "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
      //             category: "Monuments",
      //             image:
      //               "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.146231,
      //             lng: -8.610748
      //           },
      //           {
      //             id: 2,
      //             name: "Lello Library",
      //             information:
      //               "The origins of Livraria Lello take us back to 1881, when the brothers José and António Lello opened in Porto an establishment dedicated to the commerce and edition of books. José Lello, a man of culture, reading enthusiast, book and music lover, dreamed of becoming a bookseller, which came true in 1881. Several years later, his brother, António Lello, also came into this bookseller business.",
      //             category: "Monuments",
      //             image:
      //               "https://www.movenoticias.com/wp-content/uploads/2017/01/livraria-lello.jpg",
      //             webite_link: "https://www.livrarialello.pt/en-us/",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.146922,
      //             lng: -8.614776
      //           },
      //           {
      //             id: 5,
      //             name: "Carmo Church",
      //             information:
      //               "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
      //             category: "Beach",
      //             image:
      //               "https://lonelyplanetimages.imgix.net/a/g/hi/t/b3e546ad8de973b91df9bcde2e380b1f-lpl-igreja_do_carmo_porto_em-2.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0
      //           }
      //         ],
      //         userId: 2,
      //         userName: "Titas",
      //         fallowedCount: 3
      //       },
      //       {
      //         id: 3,
      //         title: "Contemporary Monuments",
      //         kids: 0,
      //         adults: "3",
      //         food: "",
      //         Visitelocations: [
      //           {
      //             id: 1,
      //             name: "Clerigos Tower",
      //             information:
      //               "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
      //             category: "Monuments",
      //             image:
      //               "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.14569,
      //             lng: -8.614597
      //           },
      //           {
      //             id: 4,
      //             name: "Congregados Church",
      //             information:
      //               "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
      //             category: "Monuments",
      //             image:
      //               "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.146231,
      //             lng: -8.610748
      //           }
      //         ],
      //         userId: 2,
      //         userName: "Titas",
      //         fallowedCount: 0
      //       },
      //       {
      //         id: 4,
      //         title: "Sports",
      //         kids: 0,
      //         adults: "3",
      //         food: "",
      //         Visitelocations: [
      //           {
      //             id: 1,
      //             name: "Clerigos Tower",
      //             information:
      //               "The architectural complex of Clerics, considered a National Monument since 1910, is one of the main points of interest for its Tower, Museum and Church, and a must-see location for all those who visit the city of Porto. The church and the Tower are part of a baroque-inspired building from the 18th century, which marked the city's urban configuration, located on an uneven street, but brilliantly used by Nicolau Nasoni, who managed to create a landmark building. The Church and the Tower are adjoined to the House of the Brotherhood, which since 2014, after it became a museum, is open to the public.",
      //             category: "Monuments",
      //             image:
      //               "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vitoria-Igreja_e_Torre_dos_Cl%C3%A9rigos_%281%29_%28cropped%29.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.14569,
      //             lng: -8.614597
      //           },
      //           {
      //             id: 4,
      //             name: "Congregados Church",
      //             information:
      //               "In English this means the Church of St Anthony's Congregation. It is attractively decorated with blue and white tiles and can be found just north of the main Porto Sao Bento Railway Station.",
      //             category: "Monuments",
      //             image:
      //               "https://cdn.olhares.pt/client/files/foto/big/890/8900547.jpg",
      //             webite_link: "",
      //             kids_allowed: "",
      //             rating: 0,
      //             lat: 41.146231,
      //             lng: -8.610748
      //           }
      //         ],
      //         userId: 2,
      //         userName: "Titas",
      //         fallowedCount: 0
      //       }
      //     ]
      //   });
      // }
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!

      try {
        await this.$store.dispatch("allIdentities");
      } catch (err) {
        alert(err);
        return err;
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
