import { mount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";

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
});
