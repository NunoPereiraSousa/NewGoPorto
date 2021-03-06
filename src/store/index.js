import categoryService from "@/api/categories.config";
import commentService from "@/api/comments.config";
import identityService from "@/api/identities.config";
import itineraryService from "@/api/itineraries.config";
import mainConfig from "@/api/main.config";
import notificationService from "@/api/notifications.config";
import suggestionService from "@/api/suggestions.config";
import userService from "@/api/users.config";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedUser: "",
    identities: [],
    itineraries: [],
    categories: [],
    selectedItinerary: {},
    identity: "",
    identity_id: "",
    inLogInAndReg: false,
    suggestions: [],
    suggestion: {},
    notifications: [],
    comments: [],
    emails: [],
    visitedUser: "",
    visitedUserId: null,
    category: "Monuments",
    favoritesList: [],
    followedItinerary: [],
    publications: [],
    loginForm: {
      input: null,
      password: null
    },
    editProfileForm: {
      name: null,
      location: null,
      birth: null,
      email: null,
      photo: null
    },
    addUsersAdmin: {
      id_user_type: null,
      name: null,
      username: null,
      password: null,
      email: null,
      photo: null,
      location: null,
      birth: null
    },
    newPostForm: {
      userId: null,
      content: null,
      date: null,
      block: null
    },
    userPosts: {},
    deletePostId: 0,
    deleteUserId: 0,
    blockUserId: 0,
    block: 0,
    editUserId: 0,
    newSuggestion: {
      id_user: null,
      photo: null,
      content: null,
      new_identity: null,
      id_status: null,
      category_name: null
    },
    registerForm: {
      name: null,
      username: null,
      email: null,
      password: null,
      photo: null
    },
    sharesCard: {
      title: null,
      author: null,
      num_shares: null
    },
    token: null,
    resStatus: null,
    userInfo: {
      name: null,
      location: null,
      birth: null,
      email: null
    },
    deleteRouteId: 0,
    deleteIdentityId: 0,
    editIdentityId: 0,
    editIdentityForm: {
      name: null,
      information: null,
      category_name: null,
      lat: null,
      lng: null,
      image: null
    },
    deleteCategory: null,
    newCategoryForm: {
      category_name: null,
      photo: null
    },
    newComment: {
      date_hour: null,
      id_user: null,
      id_identity: null,
      comment_text: null,
      num_star: null
    },
    newItineraryInfo: {
      name: null,
      kids_num: null,
      adults_num: null,
      id_deslocation: 3,
      start_location: null,
      num_shares: 0,
      block: 1
    },
    itineraryID: null,
    inIdentityId: null,
    notificationData: {
      id_notif: null,
      id_user: null,
      id_suggestion: null,
      answer: null,
      id_status: null
    }
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id_user === id);
    },

    getIndexById: state => id => {
      return state.users.findIndex(user => user.id == id);
    },

    getUserByInput: state => logInInput => {
      return state.users.find(
        user => user.username === logInInput || user.email === logInInput
      );
    },

    getLastId(state) {
      if (state.users.length > 0) {
        return state.users[state.users.length - 1].id + 1;
      }
      return 1;
    },

    getUserByPasswordInput: state => (logInInput, password) => {
      return state.users.find(
        user =>
          (user.username === logInInput || user.email === logInInput) &&
          user.password === password
      );
    },

    getLoggedUser: state => {
      return state.loggedUser;
    },

    getResStatus: state => {
      let status = state.resStatus;
      state.resStatus = null;
      return status;
    },

    getNAdmins: state => {
      return state.users.filter(user => user.id_user_type === 1).length;
    },

    getNBlockedUsers: state => {
      return state.users.filter(user => user.block === 1).length;
    },

    getUsers: state => {
      return state.users;
    },

    getUserUsername: state => username => {
      return state.users.find(user => user.username == username);
    },

    getUserPhoto: state => photo => {
      return state.users.find(user => user.photo === photo);
    },

    getInLogInAndReg: state => {
      return state.inLogInAndReg;
    },

    getIdentities: state => {
      return state.identities;
    },

    getIdentity: state => {
      return state.identity;
    },

    getIdentityByIds: state => id => {
      return state.identities.find(identity => identity.id_identity == id);
    },

    getIdentityLastId(state) {
      if (state.identities.length > 0) {
        return state.identities[state.identities.length - 1].id + 1;
      }
      return 1;
    },

    getIdentitiesName: state => name => {
      return state.identities.find(
        identity => identity.name.toLowerCase() == name.toLowerCase()
      );
    },

    getIdentitiesSelectedCategory: state => {
      return state.category;
    },

    getIdentitiesByCategory: state => category => {
      return state.identities.filter(
        identity =>
          identity.category_name.toLowerCase() == category.toLowerCase()
      );
    },

    getIdentityById: state => id => {
      return state.identities.findIndex(identity => identity.id == id);
    },

    getSuggestions: state => {
      return state.suggestions;
    },

    getSuggestionsLastId(state) {
      if (state.suggestions.length > 0) {
        return state.suggestions[state.suggestions.length - 1].id + 1;
      }
      return 1;
    },

    getSuggestionByName: state => name => {
      return state.suggestions.find(
        suggestion => suggestion.name.toLowerCase() === name.toLowerCase()
      );
    },

    getSuggestionsByStatusName: state => statusName => {
      return state.suggestions.filter(
        suggestion =>
          suggestion.status.toLowerCase() === statusName.toLowerCase()
      );
    },

    getSuggestionsByUser: state => id => {
      return state.suggestions.filter(suggestion => suggestion.userId === id);
    },

    getSuggestionByIds: state => id => {
      return state.suggestions.find(suggestion => suggestion.id == id);
    },

    getSuggestionIndexById: state => id => {
      return state.suggestions.findIndex(suggestion => suggestion.id == id);
    },
    getNotifications: state => {
      return state.notifications;
    },

    getNotificationsByUser: state => id => {
      return state.notifications.filter(suggestion => suggestion.userId === id);
    },

    getNotificationStatus: state => status => {
      return state.notifications.filter(
        suggestion => suggestion.status === status
      );
    },

    getAmountNotificationsNotRead: state => {
      let count = 0;
      if (state.notifications.length) {
        state.notifications.forEach(notification => {
          if (notification.status == "not-read") {
            count++;
          }
        });
      }
      return count;
    },

    getAmountNotificationsNotReadById: state => id => {
      let count = 0;
      if (state.notifications.length) {
        state.notifications.forEach(notification => {
          if (notification.status == "not-read" && notification.userId == id) {
            count++;
          }
        });
      }
      return count;
    },

    getNotificationIndexById: state => id => {
      return state.notifications.findIndex(
        notification => notification.id === id
      );
    },

    getCommentsLastId(state) {
      if (state.comments.length > 0) {
        return state.comments[state.comments.length - 1].id + 1;
      }
      return 1;
    },

    getComments: state => {
      return state.comments;
    },

    getCommentsByIdentity: state => id => {
      return state.comments.filter(comment => comment.identityId === id);
    },

    getCommentsByUser: state => id => {
      return state.comments.filter(comment => comment.userId === id);
    },

    getVisitedUser: state => {
      return state.visitedUser;
    },
    getFavoritesList: state => {
      return state.favoritesList;
    },
    getMyFavorites: state => userId => {
      return state.favoritesList.filter(
        favorite => favorite.id_user === userId
      );
    },
    getFavoriteByIds: state => (userId, identityId) => {
      return state.favoritesList.find(
        favorite =>
          favorite.id_user === userId && favorite.id_identity == identityId
      );
    },
    getFavoritesByDifferentIds: state => (userId, identityId) => {
      return state.favoritesList.filter(favorite => {
        let identityConfirm = true;
        let userConfirm = true;

        if (favorite.identityId == identityId) {
          identityConfirm = false;
        }
        if (favorite.userId == userId) {
          userConfirm = false;
        }
        return identityConfirm || userConfirm;
      });
    },

    getFollowByIds: state => (itineraryId, userId) => {
      return state.followedItinerary.find(
        following =>
          following.id_user === userId && following.id_itinerary == itineraryId
      );
    },

    getMyFollowsById: state => userId => {
      return state.followedItinerary.filter(
        following => following.id_user === userId
      );
    },

    getNumFollowers: state => id => {
      let num = 0;
      for (const data of state.followedItinerary) {
        if (data.id_itinerary == id) {
          num++;
        }
      }
      return num;
    },

    getItineraries: state => {
      return state.itineraries;
    },

    getItinerariesLastId(state) {
      if (state.itineraries.length > 0) {
        return state.itineraries[state.itineraries.length - 1].id + 1;
      }
      return 1;
    },

    getNewItineraryId: state => {
      return state.itineraryID;
    },

    getItinerariesVotes: state => {
      const follows = state.itineraries.reduce(
        (sum, itinerary) => sum + itinerary.followedCount,
        0
      );
      return follows;
    },

    getItinerariesNPeople: state => {
      const persons = state.itineraries.reduce(
        (sum, itinerary) => sum + parseInt(itinerary.adults) + itinerary.kids,
        0
      );
      return persons;
    },

    getSelectedItinerary: state => {
      return state.selectedItinerary;
    },
    getItinerariesByUser: state => id => {
      return state.itineraries.filter(itinerary => itinerary.userId === id);
    },

    getItineraryById: state => id => {
      return state.itineraries.find(itinerary => itinerary.id === id);
    },

    getItineraryId: state => {
      return state.itineraryId;
    },

    getCategories: state => {
      return state.categories;
    },

    getCategoryByName: state => name => {
      return state.categories.find(
        category => category.category_name.toLowerCase() === name.toLowerCase()
      );
    },

    getCategoriesLastId(state) {
      if (state.categories.length > 0) {
        return state.categories[state.categories.length - 1].id + 1;
      }
      return 1;
    },

    getEmails: state => {
      return state.emails;
    },

    getEmailLastId(state) {
      if (state.emails.length > 0) {
        return state.emails[state.emails.length - 1].id + 1;
      }
      return 1;
    },

    getPublicationsLastId(state) {
      if (state.publications.length > 0) {
        return state.publications[state.publications.length - 1].id + 1;
      }
      return 1;
    },

    getPublications: state => {
      return state.publications;
    },

    getPublicationByUser: state => userId => {
      return state.publications.filter(
        publication => publication.userId === userId
      );
    },
    getPublicationIndexById: state => id => {
      return state.publications.findIndex(publication => publication.id === id);
    },

    getUserPosts: state => {
      return state.userPosts;
    }
  },
  mutations: {
    NEW_USER(state, payload) {
      state.users.push(payload);
    },

    SET_USERS(state, payload) {
      state.users = payload.users;
      state.resStatus = payload.resStatus;
    },

    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload;
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
    },

    SET_TOKEN(state, payload) {
      state.token = payload.token;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    SET_LOGGED_USER_IN_LOGIN(state, payload) {
      state.loggedUser = payload.loggedUser;
      state.token = payload.token;
      state.resStatus = payload.resStatus;

      localStorage.setItem("token", JSON.stringify(payload.token));
      localStorage.setItem("loggedUser", JSON.stringify(payload.loggedUser));
    },

    SET_REGISTER_STATUS(state, payload) {
      state.resStatus = payload.resStatus;
    },

    SET_LOGGED_USER_LOG_OUT(state, payload) {
      state.loggedUser = payload.loggedUser;
    },

    SET_IN_LOG_IN_AND_REG(state, payload) {
      state.inLogInAndReg = payload.bool;
    },

    SET_NEW_ITINERARY_INFO(state, payload) {
      state.newItineraryInfo.name = payload.name;
      state.newItineraryInfo.kids_num = payload.kids_num;
      state.newItineraryInfo.adults_num = payload.adults_num;
      state.newItineraryInfo.id_deslocation = payload.id_deslocation;
      state.newItineraryInfo.start_location = "";
      state.newItineraryInfo.num_shares = 0;
      state.newItineraryInfo.block = 1;
    },

    SET_IN_IDENTITY_ID(state, payload) {
      state.inIdentityId = payload;
    },

    SET_ITINERARY_ID(state, payload) {
      state.itineraryID = payload.itinerary.id_itinerary;
    },

    NEW_ITINERARY(state, payload) {
      state.itineraries.push(payload);
    },

    SET_ITINERARIES(state, payload) {
      state.itineraries = payload.itineraries;
      state.resStatus = payload.resStatus;
    },
    SET_FULL_ITINERARIES(state, payload) {
      let fullItineraries = [];
      for (const data of state.itineraries) {
        let object = {
          id: data.id_itinerary,
          name: data.name,
          kids: data.kids_num,
          adults: data.adults_num,
          food: true,
          Visitelocations: [],
          userId: data.id_user,
          username: "",
          followedCount: this.getters.getNumFollowers(data.id_itinerary)
        };
        fullItineraries.push(object);
      }

      for (const itinerary of fullItineraries) {
        for (const data of payload.itineraries) {
          if (data.id_itinerary == itinerary.id) {
            let username = data.username;
            let obj = {
              id: data.id_identity,
              name: data.name,
              information: data.information,
              category: data.category_name,
              image: "",
              webite_link: "",
              kids_allowed: "",
              rating: 0,
              lat: data.lat,
              lng: data.lng
            };
            itinerary.Visitelocations.push(obj);
            itinerary.username = username;
          }
        }
      }
      state.itineraries = fullItineraries;
      state.resStatus = payload.resStatus;

      localStorage.setItem("itineraries", JSON.stringify(state.itineraries));
    },

    SET_SELECTED_ITINERARY(state, payload) {
      state.selectedItinerary = payload;
      localStorage.setItem(
        "selectedItinerary",
        JSON.stringify(state.selectedItinerary)
      );
    },

    SET_FOLLOWS(state, payload) {
      state.followedItinerary = payload.followedItinerary;
      localStorage.setItem(
        "followedItinerary",
        JSON.stringify(state.followedItinerary)
      );
    },

    SET_IDENTITY(state, payload) {
      state.identities = payload.identities;
      state.resStatus = payload.resStatus;
    },

    NEW_IDENTITY(state, payload) {
      state.identities.push(payload);
    },

    SET_IDENTITY_SELECTED(state, payload) {
      state.identity = payload.identity;
    },

    SET_IDENTITY_SELECTED_ID(state, payload) {
      state.identity_id = payload;
      localStorage.setItem("identity_id", JSON.stringify(state.identity_id));
    },
    SET_IDENTITY_SELECTED_PROTECTION(state, payload) {
      state.identity = payload.identity;
      localStorage.setItem("identity", JSON.stringify(state.identity));
    },

    NEW_SUGGESTION(state, payload) {
      state.suggestions.push(payload);
    },
    SET_SUGGESTION(state, payload) {
      state.suggestions = payload.suggestions;
    },

    NEW_NOTIFICATION(state, payload) {
      state.notifications.push(payload);
    },

    SET_NOTIFICATION_DATA(state, payload) {
      state.notificationData.id_notif = payload.id_notif;
      state.notificationData.id_user = payload.id_user;
      state.notificationData.id_suggestion = payload.id_suggestion;
      state.notificationData.answer = payload.answer;
      state.notificationData.id_status = payload.id_status;
    },

    SET_NOTIFICATIONS(state, payload) {
      state.notifications = payload.notifications;
    },

    NEW_COMMENT(state, payload) {
      state.newComment.date_hour = payload.date;
      state.newComment.id_user = state.loggedUser[0].id_user;
      state.newComment.id_identity = JSON.parse(
        localStorage.getItem("identity_id")
      );
      state.newComment.comment_text = payload.content;
      state.newComment.num_star = payload.rating;
    },

    SET_COMMENTS(state, payload) {
      state.comments = payload.comments;
    },

    CHANGE_COMMENT_PHOTO_BY_USER(state, payload) {
      if (state.comments.length > 0) {
        for (const comment of state.comments) {
          if (comment.userId == payload.id) {
            comment.userPhoto = payload.photo;
          }
        }
      }
    },

    SET_VISITED_USER(state, payload) {
      state.visitedUser = payload.user;
      state.resStatus = payload.resStatus;
    },
    SET_VISITED_USER_ID(state, payload) {
      state.visitedUserId = payload;
      localStorage.setItem(
        "visitedUserId",
        JSON.stringify(state.visitedUserId)
      );
    },

    SET_VISITED_USER_PROTECTION(state, payload) {
      state.visitedUser = payload.user;
    },

    SET_MONUMENTS_SELECTED_CATEGORY(state, payload) {
      state.category = payload.category;
      localStorage.setItem("selectedCategory", JSON.stringify(state.category));
    },

    SET_COUNTRIES(state, payload) {
      state.category = payload.countries;
      localStorage.setItem("countries", JSON.stringify(state.countries));
    },

    SET_FAVORITES_LIST(state, payload) {
      state.favoritesList = payload.list;
    },

    NEW_CATEGORY(state, payload) {
      state.categories.push(payload);
    },

    SET_CATEGORIES(state, payload) {
      state.categories = payload.categories;
      state.resStatus = payload.resStatus;
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },

    NEW_EMAIL(state, payload) {
      state.emails.push(payload);
    },

    SET_EMAILS(state, payload) {
      state.emails = payload.emails;
    },

    SET_PUBLICATIONS(state, payload) {
      state.publications = payload.publications;
    },

    SET_LOGIN_FORM(state, payload) {
      state.loginForm.input = payload.input;
      state.loginForm.password = payload.password;
    },

    SET_REGISTER_FORM(state, payload) {
      state.registerForm.name = payload.name;
      state.registerForm.username = payload.username;
      state.registerForm.email = payload.email;
      state.registerForm.password = payload.password;
    },

    SET_CARD_FOLLOWS(state, payload) {
      state.sharesCard.title = payload.title;
      state.sharesCard.author = payload.author;
      state.sharesCard.num_shares = payload.num_shares;
    },

    SET_PROFILE_EDIT_FORM(state, payload) {
      state.editProfileForm.name = payload.name;
      state.editProfileForm.location = payload.location;
      state.editProfileForm.birth = payload.birth;
      state.editProfileForm.email = payload.email;
      state.editProfileForm.photo = payload.photo;
    },

    SET_NEW_POST(state, payload) {
      state.newPostForm.userId = payload.userId;
      state.newPostForm.content = payload.content;
      state.newPostForm.date = payload.date;
      state.newPostForm.block = payload.block;
    },

    SET_DELETE_POST(state, payload) {
      state.deletePostId = payload.deletePostId;
    },

    SET_USER_POSTS(state, payload) {
      state.userPosts = payload.response;
    },

    SET_NEW_SUGGESTION(state, payload) {
      state.newSuggestion.id_user = payload.id_user;
      state.newSuggestion.photo = payload.photo;
      state.newSuggestion.content = payload.content;
      state.newSuggestion.new_identity = payload.new_identity;
      state.newSuggestion.id_status = payload.id_status;
      state.newSuggestion.category_name = payload.category_name;
    },

    SET_NEW_USER_ADMIN(state, payload) {
      state.addUsersAdmin.id_user_type = payload.id_user_type;
      state.addUsersAdmin.name = payload.name;
      state.addUsersAdmin.username = payload.username;
      state.addUsersAdmin.password = payload.password;
      state.addUsersAdmin.email = payload.email;
      state.addUsersAdmin.photo = payload.photo;
      state.addUsersAdmin.location = payload.location;
      state.addUsersAdmin.birth = payload.birth;
    },

    SET_EDIT_USER_ADMIN(state, payload) {
      state.editUserId = payload.editUserId;
      state.addUsersAdmin.id_user_type = payload.id_user_type;
      state.addUsersAdmin.name = payload.name;
      state.addUsersAdmin.username = payload.username;
      state.addUsersAdmin.password = payload.password;
      state.addUsersAdmin.email = payload.email;
      state.addUsersAdmin.photo = payload.photo;
      state.addUsersAdmin.location = payload.location;
      state.addUsersAdmin.birth = payload.birth;
    },

    SET_DELETE_USER(state, payload) {
      state.deleteUserId = payload.deleteUserId;
    },

    SET_BLOCK_USER(state, payload) {
      state.blockUserId = payload.blockUserId;
      state.block = payload.block;
    },

    SET_EDIT_USER(state, payload) {
      state.editUserId = payload.editUserId;
    },

    SET_DELETE_ROUTE(state, payload) {
      state.deleteRouteId = payload.deleteRouteId;
    },

    SET_DELETE_IDENTITY(state, payload) {
      state.deleteIdentityId = payload.deleteIdentityId;
    },

    SET_EDIT_IDENTITY(state, payload) {
      state.editIdentityId = payload.editIdentityId;
    },

    SET_EDIT_IDENTITY_ADMIN(state, payload) {
      state.editIdentityId = payload.editIdentityId;
      state.editIdentityForm.name = payload.name;
      state.editIdentityForm.information = payload.information;
      state.editIdentityForm.category_name = payload.category_name;
      state.editIdentityForm.lat = payload.lat;
      state.editIdentityForm.lng = payload.lng;
      state.editIdentityForm.image = payload.image;
    },

    SET_NEW_IDENTITY_ADMIN(state, payload) {
      state.editIdentityForm.name = payload.name;
      state.editIdentityForm.information = payload.information;
      state.editIdentityForm.category_name = payload.category_name;
      state.editIdentityForm.lat = payload.lat;
      state.editIdentityForm.lng = payload.lng;
      state.editIdentityForm.image = payload.image;
    },
    SET_DELETE_CATEGORY(state, payload) {
      state.deleteCategory = payload.deleteCategory;
    },
    SET_NEW_CATEGORY(state, payload) {
      state.newCategoryForm.category_name = payload.category_name;
      state.newCategoryForm.photo = payload.photo;
    }
  },
  actions: {
    async signIn({ commit }) {
      commit(
        "SET_LOGGED_USER_IN_LOGIN",
        await userService.signIn(
          this.state.loginForm.input,
          this.state.loginForm.password
        )
      );
    },
    async signUp({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.signUp(
          this.state.registerForm.name,
          this.state.registerForm.username,
          this.state.registerForm.email,
          this.state.registerForm.password
        )
      );
    },
    async allUsers({ commit }) {
      commit("SET_USERS", await userService.getAllUsers());
    },
    async addUsersAdmin({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.addUsersAdmin(
          this.state.addUsersAdmin.id_user_type,
          this.state.addUsersAdmin.name,
          this.state.addUsersAdmin.username,
          this.state.addUsersAdmin.password,
          this.state.addUsersAdmin.email,
          this.state.addUsersAdmin.photo,
          this.state.addUsersAdmin.location,
          this.state.addUsersAdmin.birth
        )
      );
    },
    async getVisitedUserProfile({ commit }) {
      commit("SET_VISITED_USER", await userService.getUserById());
    },

    async editProfile({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.editProfile(
          this.state.editProfileForm.name,
          this.state.editProfileForm.location,
          this.state.editProfileForm.birth,
          this.state.editProfileForm.email,
          this.state.editProfileForm.photo
        )
      );
    },
    async editProfileNormalUser({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.editProfileNormalUser(
          this.state.editProfileForm.name,
          this.state.editProfileForm.location,
          this.state.editProfileForm.birth,
          this.state.editProfileForm.email,
          this.state.editProfileForm.photo
        )
      );
    },

    async addPost({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.addPost(
          this.state.newPostForm.userId,
          this.state.newPostForm.content,
          this.state.newPostForm.date,
          this.state.newPostForm.block
        )
      );
    },
    async deletePost({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.deletePost(this.state.deletePostId)
      );
    },
    async userPosts({ commit }) {
      commit("SET_USER_POSTS", await userService.getUserPosts());
    },
    async VisitedUserPosts({ commit }) {
      commit("SET_USER_POSTS", await userService.getVisitedUserPosts());
    },
    async addSuggestion({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.addSuggestion(
          this.state.newSuggestion.id_user,
          this.state.newSuggestion.photo,
          this.state.newSuggestion.content,
          this.state.newSuggestion.new_identity,
          this.state.newSuggestion.id_status,
          this.state.newSuggestion.category_name
        )
      );
    },
    async numSharesCard({ commit }) {
      commit(
        "SET_CARD_FOLLOWS",
        await mainConfig.numSharesCard(
          this.state.sharesCard.title,
          this.state.sharesCard.author,
          this.state.sharesCard.num_shares
        )
      );
    },
    async deleteUser({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.deleteUsersAdmin(this.state.deleteUserId)
      );
    },
    async blockUser({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.blockUsersAdmin(
          this.state.blockUserId,
          this.state.block
        )
      );
    },
    async editUser({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await userService.editUserAdmin(
          this.state.editUserId,
          this.state.addUsersAdmin.id_user_type,
          this.state.addUsersAdmin.name,
          this.state.addUsersAdmin.username,
          this.state.addUsersAdmin.password,
          this.state.addUsersAdmin.email,
          this.state.addUsersAdmin.photo,
          this.state.addUsersAdmin.location,
          this.state.addUsersAdmin.birth
        )
      );
    },
    async allItineraries({ commit }) {
      commit("SET_ITINERARIES", await itineraryService.getAllItineraries());
    },

    async allFullItineraries({ commit }) {
      commit(
        "SET_FULL_ITINERARIES",
        await itineraryService.getAllFullItineraries()
      );
    },

    async deleteRoute({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await itineraryService.deleteRoutesAdmin(this.state.deleteRouteId)
      );
    },

    async addItinerary({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await itineraryService.addItinerary(
          this.state.newItineraryInfo.name,
          this.state.newItineraryInfo.kids_num,
          this.state.newItineraryInfo.adults_num,
          this.state.newItineraryInfo.id_deslocation,
          this.state.newItineraryInfo.start_location
        )
      );
    },

    async addIdentityItinerary({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await itineraryService.addIdentityItinerary(
          this.state.itineraryID,
          this.state.inIdentityId
        )
      );
    },

    async itineraryLastId({ commit }) {
      commit("SET_ITINERARY_ID", await itineraryService.getItineraryLastId());
    },
    async allIdentities({ commit }) {
      commit("SET_IDENTITY", await identityService.getAllIdentities());
    },

    async getIdentity({ commit }) {
      commit("SET_IDENTITY_SELECTED", await identityService.getIdentityById());
    },

    async deleteIdentity({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await identityService.deleteIdentitiesAdmin(this.state.deleteIdentityId)
      );
    },
    async editIdentity({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await identityService.editIdentitiesAdmin(
          this.state.editIdentityId,
          this.state.editIdentityForm.name,
          this.state.editIdentityForm.information,
          this.state.editIdentityForm.category_name,
          this.state.editIdentityForm.lat,
          this.state.editIdentityForm.lng,
          this.state.editIdentityForm.image
        )
      );
    },
    async newIdentity({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await identityService.addIdentitiesAdmin(
          this.state.editIdentityForm.name,
          this.state.editIdentityForm.information,
          this.state.editIdentityForm.category_name,
          this.state.editIdentityForm.lat,
          this.state.editIdentityForm.lng,
          this.state.editIdentityForm.image
        )
      );
    },
    async getCommentsIdIdentity({ commit }) {
      commit("SET_COMMENTS", await commentService.getCommentsByIdentityId());
    },

    async addNewComment({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await commentService.addComment(
          this.state.newComment.date_hour,
          this.state.newComment.id_user,
          this.state.newComment.id_identity,
          this.state.newComment.comment_text,
          this.state.newComment.num_star
        )
      );
    },
    async allCategories({ commit }) {
      commit("SET_CATEGORIES", await categoryService.getAllCategories());
    },
    async deleteCategory({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await categoryService.deleteCategoriesAdmin(this.state.deleteCategory)
      );
    },
    async newCategory({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await categoryService.addCategoriesAdmin(
          this.state.newCategoryForm.category_name,
          this.state.newCategoryForm.photo
        )
      );
    },
    async getAllFollowedItinerary({ commit }) {
      commit("SET_FOLLOWS", await itineraryService.getAllFollowedItinerary());
    },
    async addNewFollowedItinerary({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await itineraryService.addFollowedIItinerary(this.state.itineraryID)
      );
    },
    async deleteFollowedItinerary({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await itineraryService.removeFollowed(this.state.itineraryID)
      );
    },
    async getAllFavorite({ commit }) {
      commit("SET_FAVORITES_LIST", await identityService.getAllFavorites());
    },
    async addNewFavorite({ commit }) {
      commit("SET_REGISTER_STATUS", await identityService.addFavorite());
    },
    async deleteFavorite({ commit }) {
      commit("SET_REGISTER_STATUS", await identityService.removeFavorite());
    },
    async getAllUserNotifications({ commit }) {
      commit(
        "SET_NOTIFICATIONS",
        await notificationService.getAllNotificationByUserId()
      );
    },
    async addNewNotification({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await notificationService.addNotification(
          this.state.notificationData.id_user,
          this.state.notificationData.id_suggestion,
          this.state.notificationData.answer
        )
      );
    },
    async deleteNotification({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await notificationService.removeNotification(
          this.state.notificationData.id_notif
        )
      );
    },
    async getAllSuggestions({ commit }) {
      commit("SET_SUGGESTION", await suggestionService.getAllSuggestions());
    },

    async updateSuggestion({ commit }) {
      commit(
        "SET_REGISTER_STATUS",
        await suggestionService.updateSuggestion(
          this.state.notificationData.id_suggestion,
          this.state.notificationData.id_status
        )
      );
    }
  },
  modules: {}
});
