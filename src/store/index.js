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
    inLogInAndReg: false,
    suggestions: [],
    suggestion: {},
    notifications: [],
    comments: [],
    emails: [],
    visitedUser: "",
    category: "Monuments",
    favoritesList: [],
    followedItinerary: [], // follow system like on instagram,
    publications: []
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id === id);
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

    getNAdmins: state => {
      return state.users.filter(user => user.id_user_type === 1).length;
    },

    getNBlockedUsers: state => {
      return state.users.filter(user => user.blocked === true).length;
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
      return state.identities.find(identity => identity.id == id);
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
      return state.identities.filter(identity => identity.category == category);
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

    // *counts from all users
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

    // *counts from an user based on his id
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
      return state.favoritesList.filter(favorite => favorite.userId === userId);
    },
    getFavoriteByIds: state => (userId, identityId) => {
      return state.favoritesList.find(
        favorite =>
          favorite.userId === userId && favorite.identityId == identityId
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

    // *follows
    getFollowByIds: state => (itineraryId, userId) => {
      return state.followedItinerary.find(
        following =>
          following.userId === userId && following.itineraryId == itineraryId
      );
    },

    getMyFollowsById: state => userId => {
      return state.followedItinerary.filter(
        following => following.userId === userId
      );
    },
    // *follows

    // * Itineraries
    getItineraries: state => {
      return state.itineraries;
    },

    getItinerariesLastId(state) {
      if (state.itineraries.length > 0) {
        return state.itineraries[state.itineraries.length - 1].id + 1;
      }
      return 1;
    },

    getItinerariesVotes: state => {
      const follows = state.itineraries.reduce(
        (sum, itinerary) => sum + itinerary.fallowedCount,
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

    // * Categories Getters
    getCategories: state => {
      return state.categories;
    },

    getCategoryByName: state => name => {
      return state.categories.find(
        category => category.name.toLowerCase() === name.toLowerCase()
      );
    },

    getCategoriesLastId(state) {
      if (state.categories.length > 0) {
        return state.categories[state.categories.length - 1].id + 1;
      }
      return 1;
    },

    // getCategoryByName: state => name => {
    //   return state.categories.find(
    //     category => category.name.toLowerCase() === name.toLowerCase()
    //   );
    // },

    // * Categories Getters>

    getEmails: state => {
      return state.emails;
    },

    getEmailLastId(state) {
      if (state.emails.length > 0) {
        return state.emails[state.emails.length - 1].id + 1;
      }
      return 1;
    },

    // * <publications getters

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
    // !in case of delete
    getPublicationIndexById: state => id => {
      return state.publications.findIndex(publication => publication.id === id);
    }

    // *publications getters>
  },
  mutations: {
    NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    SET_USERS(state, payload) {
      state.users = payload.users;
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload;
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
    },

    SET_LOGGED_USER_LOG_OUT(state, payload) {
      state.loggedUser = payload.loggedUser;
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
    },

    SET_IN_LOG_IN_AND_REG(state, payload) {
      state.inLogInAndReg = payload.bool;
    },

    // * itineraries

    NEW_ITINERARY(state, payload) {
      state.itineraries.push(payload);
      localStorage.setItem("itineraries", JSON.stringify(state.itineraries));
    },

    SET_ITINERARIES(state, payload) {
      state.itineraries = payload.itineraries;
      localStorage.setItem("itineraries", JSON.stringify(state.itineraries));
    },

    SET_SELECTED_ITINERARY(state, payload) {
      state.selectedItinerary = payload;
      localStorage.setItem(
        "selectedItinerary",
        JSON.stringify(state.selectedItinerary)
      );
    },

    ADD_FOLLOW(state, payload) {
      // *obs : payload = id
      let index = 0;
      index = state.itineraries.findIndex(
        itinerary => itinerary.id === payload.id
      );
      state.itineraries[index].fallowedCount++;
      localStorage.setItem("itineraries", JSON.stringify(state.itineraries));

      state.followedItinerary.push({
        itineraryId: payload.id,
        userId: payload.userId,
        title: state.itineraries[index].title
      });
      localStorage.setItem(
        "followedItinerary",
        JSON.stringify(state.followedItinerary)
      );
    },
    REMOVE_FOLLOW(state, payload) {
      // *obs : payload.id
      let index = 0;
      index = state.itineraries.findIndex(
        itinerary => itinerary.id === payload.id
      );
      state.itineraries[index].fallowedCount--;
      localStorage.setItem("itineraries", JSON.stringify(state.itineraries));

      state.followedItinerary = state.followedItinerary.filter(following => {
        let itineraryConf = true;
        let userConfirm = true;

        if (following.userId == payload.userId) {
          itineraryConf = false;
        }
        if (following.itineraryId == payload.id) {
          userConfirm = false;
        }
        return itineraryConf || userConfirm;
      });

      localStorage.setItem(
        "followedItinerary",
        JSON.stringify(state.followedItinerary)
      );
    },

    SET_FOLLOWS(state, payload) {
      state.followedItinerary = payload.followedItinerary;
      localStorage.setItem(
        "followedItinerary",
        JSON.stringify(state.followedItinerary)
      );
    },

    // *itineraries

    SET_IDENTITY(state, payload) {
      state.identities = payload.identities;
      localStorage.setItem("identities", JSON.stringify(state.identities));
    },

    NEW_IDENTITY(state, payload) {
      state.identities.push(payload);
      localStorage.setItem("identities", JSON.stringify(state.identities));
    },

    SET_IDENTITY_SELECTED(state, payload) {
      state.identity = payload;
      localStorage.setItem("identity", JSON.stringify(state.identity));
    },

    SET_IDENTITY_SELECTED_PROTECTION(state, payload) {
      state.identity = payload.identity;
      localStorage.setItem("identity", JSON.stringify(state.identity));
    },

    NEW_SUGGESTION(state, payload) {
      state.suggestions.push(payload);
      localStorage.setItem("suggestions", JSON.stringify(state.suggestions));
    },

    SET_SUGGESTION(state, payload) {
      state.suggestions = payload.suggestions;
      localStorage.setItem("suggestions", JSON.stringify(state.suggestions));
    },

    NEW_NOTIFICATION(state, payload) {
      state.notifications.push(payload);
      localStorage.setItem(
        "notifications",
        JSON.stringify(state.notifications)
      );
    },

    SET_NOTIFICATIONS(state, payload) {
      state.notifications = payload.notifications;
      localStorage.setItem(
        "notifications",
        JSON.stringify(state.notifications)
      );
    },

    NEW_COMMENT(state, payload) {
      state.comments.push(payload);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },

    SET_COMMENTS(state, payload) {
      state.comments = payload.comments;
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },

    CHANGE_COMMENT_PHOTO_BY_USER(state, payload) {
      if (state.comments.length > 0) {
        for (const comment of state.comments) {
          if (comment.userId == payload.id) {
            comment.userPhoto = payload.photo;
          }
        }
        localStorage.setItem("comments", JSON.stringify(state.comments));
      }
    },

    SET_VISITED_USER(state, payload) {
      state.visitedUser = payload;
      localStorage.setItem("visitedUser", JSON.stringify(state.visitedUser));
    },

    SET_VISITED_USER_PROTECTION(state, payload) {
      state.visitedUser = payload.user;
      localStorage.setItem("visitedUser", JSON.stringify(state.visitedUser));
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
      localStorage.setItem(
        "favoritesList",
        JSON.stringify(state.favoritesList)
      );
    },

    // * Categories Setters
    NEW_CATEGORY(state, payload) {
      state.categories.push(payload);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },

    SET_CATEGORIES(state, payload) {
      state.categories = payload.categories;
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },

    NEW_EMAIL(state, payload) {
      state.emails.push(payload);
      localStorage.setItem("emails", JSON.stringify(state.emails));
    },

    SET_EMAILS(state, payload) {
      state.emails = payload.emails;
      localStorage.setItem("emails", JSON.stringify(state.emails));
    },

    //* publications setters
    SET_PUBLICATIONS(state, payload) {
      state.publications = payload.publications;
      localStorage.setItem("publications", JSON.stringify(state.publications));
    }
  },
  actions: {},
  modules: {}
});
