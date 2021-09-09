import { createWebHistory, createRouter } from "vue-router";
import NewsMAin from "../components/News/NewsMain.vue";
import NewsDetails from "../components/News/Details/NewsDetails.vue";
import HistoryMain from "../components/History/HistoryMain.vue";
import BlogMain from "../components/Blog/Main/BlogMain.vue";
import BlogsDetails from "../components/Blog/Details/BlogsDetails.vue";

const routes = [
  {
    path: "/news",
    name: "News",
    component: NewsMAin,
  },
  {
    path: "/news/:id",
    name: "NewsDetails",
    component: NewsDetails,
  },
  {
    path: "/history",
    name: "HistoryMain",
    component: HistoryMain,
  },
  {
    path: "/blog",
    name: "BlogMain",
    component: BlogMain,
  },
  {
    path: "/blog/:id",
    name: "BlogsDetails",
    component: BlogsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
