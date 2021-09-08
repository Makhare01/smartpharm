import { createWebHistory, createRouter } from "vue-router";
import NewsMAin from "../components/News/NewsMain.vue";
import NewsDetails from "../components/News/Details/NewsDetails.vue";
import HistoryMain from "../components/History/HistoryMain.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
