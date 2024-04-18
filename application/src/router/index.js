import { nextTick } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from "@/i18n/translation"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView, 
          meta: {
            title: "MexIHC 2024 - An AmexIHC conference",
          },
        },        
        {
          path: 'call-for-participation',
          name: 'call-for-participation',
          component: () => import('../views/CallsView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for participation",
          },
        },
        /*Begin: Nuevos */
        {
          path: 'call-for-papers',
          name: 'call-for-papers',
          component: () => import('../views/CallsForPapersView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for papers",
          },
        },
        {
          path: 'call-for-posters',
          name: 'call-for-posters',
          component: () => import('../views/CallsForPostersView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for poster track",
          },
        },
        {
          path: 'call-for-workshops-and-tutorials',
          name: 'call-for-workshops-and-tutorials',
          component: () => import('../views/CallsForWorkshopsAndTutorialsView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for poster track",
          },
        },
        {
          path: 'student-design-competition',
          name: 'student-design-competition',
          component: () => import('../views/CallsForCompetitionView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for poster track",
          },
        },
        {
          path: 'graduate-colloquium',
          name: 'graduate-colloquium',
          component: () => import('../views/CallsForColloquiumView.vue'), 
          meta: {
            title: "MexIHC 2024 - Call for poster track",
          },
        },
        /*End: Nuevos */      
        {
          path: 'accessibility-recommendations-for-authors',
          name: 'accessibility-recommendations-for-authors',
          component: () => import('../views/AccessibilityForAuthorsView.vue'), 
          meta: {
            title: "MexIHC 2024 - Accessibility recommendations for authors",
          },
        },
        {
          path: 'organizers',
          name: 'organizers',
          component: () => import('../views/OrganizersView.vue'), 
          meta: {
            title: "MexIHC 2024 - Organizers",
          },
        },
        {
          path: 'schedule',
          name: 'schedule',
          component: () => import('../views/ScheduleView.vue'), 
          meta: {
            title: "MexIHC 2024 - Schedule",
          },
        },    
        {
          path: 'keynote-speakers',
          name: 'keynote-speakers',
          component: () => import('../views/SpeakersView.vue'), 
          meta: {
            title: "MexIHC 2024 - Keynote speakers",
          },
        },
        {
          path: 'accepted-papers',
          name: 'accepted-papers',
          component: () => import('../views/AcceptedPapersView.vue'), 
          meta: {
            title: "MexIHC 2024 - Schedule",
          },
        },    
        {
          path: 'getting-started',
          name: 'getting-started',
          component: () => import('../views/GettingStartedView.vue'), 
          meta: {
            title: "MexIHC 2024 - Getting started",
          },
        },
        {
          path: 'registration',
          name: 'registration',
          component: () => import('../views/RegistrationView.vue'), 
          meta: {
            title: "MexIHC 2024 - Registration",
          },
        },
        {
          path: 'accessibility-FAQ',
          name: 'accessibility-FAQ',
          component: () => import('../views/AccessibilityFAQView.vue'), 
          meta: {
            title: "MexIHC 2024 - Accessibility FAQs",
          },
        },        
        {
          path: 'video-archives',
          name: 'videoArchives',
          component: () => import('../views/VideoArchivesView.vue'), 
          meta: {
            title: "MexIHC 2024 - Video archives",
          },
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import("../views/PageNotFound.vue"), 
      meta: {
          title: "Not found",
      }, 
    },
  ],
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          console.log('savedPosition')
          return savedPosition;
      }

      if (to.hash) {
          return { el: to.hash,
            behavior: 'smooth',
            top: 80
          };
      }

      return {left: 0, top: 0};
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  document.head.querySelector("[property~='og:title'][content]").content = `${to.meta.title}`;
  document.head.querySelector("[name='twitter:title'][content]").content = `${to.meta.title}`;
  next();
})
export default router
