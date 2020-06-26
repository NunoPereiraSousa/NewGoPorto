// import { mount } from "@vue/test-utils";
// import CategoryCard from "@/components/CategoryCard.vue";

// describe("CategoryCard.vue", () => {
//   it("Check if the image and the title are passed by props", () => {
//     const image =
//       "https://lh3.googleusercontent.com/proxy/5el7RjcUsmbnzD1UYabg-6tSfwt-8DLQzwqKVvJnTf9HR8fYUnxsfw7uWggWwB9nVGiN1IPrwTXgj7dWr3aO2BLFj5edjpbJO8ibDTZpRHaX17mEJmBdM2zoi4P1nj4shAtNWw";
//     const title = "Monuments";
//     const wrapper = mount(CategoryCard, {
//       propsData: {
//         image: image,
//         title: title
//       }
//     });
//     expect(wrapper.props().image).toBe(image);
//     expect(wrapper.props().title).toBe(title);
//   });

//   it("Check image existence", () => {
//     const wrapper = mount(CategoryCard);
//     expect(wrapper.find("img").isVisible()).toBe(true);
//   });
// });

import { mount } from "@vue/test-utils";
import Profile from "@/views/Profile.vue";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let mocked = new Vuex.Store({
  state: {
    loggedUser: [
      {
        id_user: 134,
        name: "hacker1",
        email: "haker0@gmail.com",
        photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
        id_user_type: 1,
        block: 0,
        username: "haker0",
        location: "China",
        password:
          "$2a$10$2ULPA2h3dtpeUbUSAKLjkeMGSiud1ElHDoE/FjdBaRiepK0inzIii",
        birth: "20-05-1999"
      }
    ]
  }
});

describe("Profile.vue", () => {
  test("Check if name is hacker1", () => {
    const wrapper = mount(Profile, { store: mocked });
    expect(wrapper.find("#name").text()).toEqual("hacker1");
  });
});
