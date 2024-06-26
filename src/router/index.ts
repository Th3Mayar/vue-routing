import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsView from "../views/PostsView.vue";
import PostListAllViewVue from "@/views/PostListAllView.vue";
import AboutViewVue from "../views/AboutView.vue";
import SocialViewVue from "../views/SocialView.vue";
import ContactViewVue from "../views/ContactView.vue";
import MessagesView from "@/views/MessagesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutViewVue,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostListAllViewVue,
  },
  {
    path: "/social",
    name: "social",
    component: SocialViewVue,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactViewVue,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostsView,
    props: true,
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
