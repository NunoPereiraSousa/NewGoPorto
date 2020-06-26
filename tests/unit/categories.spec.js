import { mount, shallowMount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";
import ItineraryCard from "@/components/ItineraryCard.vue";

// import navbar from "@/components/Navbar.vue";
// import home from "../../src/views/PlacesCatalog.vue";

// import routes from '@/routes'
// import VueRouter from 'vue-router'
// import {
//   mockRouterComponents
// } from 'vue-test-utils-helpers'

// !Import the store
// import store from "../../src/store/index";
// !Import vue X
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let fakeStore = new Vuex.Store({
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
    getItineraryById: state => id => {
      return state.itineraries.find(itinerary => itinerary.id === id);
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
});

describe("ItineraryCard.vue", () => {
  it("Check if the id is passed by props", () => {
    const passed_id = 1;
    const wrapper = shallowMount(
      ItineraryCard,
      {
        store: fakeStore
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
