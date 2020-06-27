import { mount, shallowMount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";
import ItineraryCard from "@/components/ItineraryCard.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "../../src/views/Home.vue";
import Footer from "@/components/Footer.vue";
import AboutUs from "../../src/views/AboutUs.vue";
import OurTeam from "../../src/views/OurTeam.vue";
import ErrorPage from "../../src/views/ErrorPage.vue";
import AdminNavbar from "@/components/AdminNavBar.vue";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    loggedUser: "",
    identities: [],
    itineraries: [
      {
        id: 1,
        name: "Classic",
        kids: 4,
        adults: 5,
        food: true,
        Visitelocations: [
          {
            id: 1,
            name: "Clérigos Tower",
            information:
              "The Clérigos Church (Portuguese: Igreja dos Clérigos) is a Baroque church in the city of Porto, in Portugal. Its tall bell tower, the Torre dos Clérigos, can be seen from various points of the city and is one of its most characteristic symbols.",
            category: "Monuments",
            image: "",
            webite_link: "",
            kids_allowed: "",
            rating: 0,
            lat: 41.1457,
            lng: -8.6146
          }
        ],
        userId: 3,
        username: "Jacobbb",
        followedCount: 0
      }
    ]
  },
  getters: {
    getItineraryById() {
      return {
        id: 1,
        name: "Classic",
        kids: 4,
        adults: 5,
        food: true,
        Visitelocations: [
          {
            id: 1,
            name: "Clérigos Tower",
            information:
              "The Clérigos Church (Portuguese: Igreja dos Clérigos) is a Baroque church in the city of Porto, in Portugal. Its tall bell tower, the Torre dos Clérigos, can be seen from various points of the city and is one of its most characteristic symbols.",
            category: "Monuments",
            image: "",
            webite_link: "",
            kids_allowed: "",
            rating: 0,
            lat: 41.1457,
            lng: -8.6146
          }
        ],
        userId: 3,
        username: "Jacobbb",
        followedCount: 0
      };
    },
    getLoggedUser() {
      return [
        {
          id_user: 134,
          name: "hacker1",
          email: "haker0@gmail.com",
          photo: "",
          id_user_type: 2,
          block: 0,
          username: "haker0",
          location: "China",
          password:
            "$2a$10$2ULPA2h3dtpeUbUSAKLjkeMGSiud1ElHDoE/FjdBaRiepK0inzIii",
          birth: "20-05-1999"
        }
      ];
    }
  }
});

describe("CategoryCard.vue", () => {
  it("Check if the image and the title are passed by props", () => {
    const image =
      "https://lh3.googleusercontent.com/proxy/5el7RjcUsmbnzD1UYabg-6tSfwt-8DLQzwqKVvJnTf9HR8fYUnxsfw7uWggWwB9nVGiN1IPrwTXgj7dWr3aO2BLFj5edjpbJO8ibDTZpRHaX17mEJmBdM2zoi4P1nj4shAtNWw";
    const title = "Monuments";
    const wrapper = mount(CategoryCard, {
      propsData: {
        image: image,
        title: title
      }
    });
    expect(wrapper.props().image).toBe(image);
    expect(wrapper.props().title).toBe(title);
  });

  it("Check image existence", () => {
    const wrapper = mount(CategoryCard);
    expect(wrapper.find("img").isVisible()).toBe(true);
  });

  it("Check if title appears", () => {
    const wrapper = mount(CategoryCard);
    expect(wrapper.find("p").isVisible()).toBe(true);
  });

  it("Check if the id is passed by props in Itinerary Card", () => {
    const passed_id = 1;
    const wrapper = shallowMount(
      ItineraryCard,
      {
        store: store
      },
      {
        propsData: {
          id: passed_id
        }
      }
    );
    expect(wrapper.props().id).toBe(passed_id);
  });
});

describe("Navbar.vue", () => {
  test("Expect the navbar to have an dropDown", async () => {
    const wrapper = shallowMount(Navbar, {
      store: store
    });
    await wrapper.setData({
      user: {
        id_user: 134,
        name: "hacker1",
        email: "haker0@gmail.com",
        photo: "",
        id_user_type: 2,
        block: 0,
        username: "haker0",
        location: "China",
        password:
          "$2a$10$2ULPA2h3dtpeUbUSAKLjkeMGSiud1ElHDoE/FjdBaRiepK0inzIii",
        birth: "20-05-1999"
      }
    });
    expect(wrapper.find("p").isVisible()).toBe(false);
  });
});

describe("Home.vue", () => {
  test("Expect Home to show Porto's Image", async () => {
    const wrapper = mount(Home);
    expect(wrapper.find("img").exists()).toBe(false);
  });
});

describe("Footer.vue", () => {
  test("Check if footer is well formed", async () => {
    const wrapper = mount(Footer);
    expect(wrapper.find(".col-lg-6.col-sm-12").exists()).toBe(true);
  });

  test("Check if footer Shows developers and year of development", async () => {
    const wrapper = mount(Footer);
    expect(wrapper.find(".col-lg-6.col-sm-12").exists()).toBe(true);
  });
});

describe("AdminNavbar.vue", () => {
  test(" confirm that there is a logout Button", async () => {
    const wrapper = mount(AdminNavbar);
    expect(wrapper.find("a").exists()).toBe(true);
  });

  test("Check if GoPorto logo (it is a button too) exists", async () => {
    const wrapper = mount(AdminNavbar);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});

describe("AboutUs.vue", () => {
  test(" confirm if it says who we are", async () => {
    const wrapper = mount(AboutUs);
    expect(wrapper.find("p.lead.text-justify").exists()).toBe(true);
  });
});

describe("OurTeam.vue", () => {
  test(" confirm if the team is showed", async () => {
    const wrapper = mount(OurTeam);
    expect(wrapper.find(".col-lg-6.col-sm-12.pt-lg-0.pt-4").exists()).toBe(
      true
    );
  });

  test("confirm if the team photos are there", async () => {
    const wrapper = mount(OurTeam);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});

describe("ErrorPage.vue", () => {
  test("confirm reconnect button", async () => {
    const wrapper = mount(ErrorPage);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
