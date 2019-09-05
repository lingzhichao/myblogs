import Vue from 'vue'
import Router from 'vue-router'
import Subject from '@/components/Subject'
import Home from '../components/Home/Home'
import Person from '../components/Person/Person'
import MessageBoard from '../components/MessageBoard/MessageBoard'
import WriteArticle from '../components/Article/WriteArticle'
import ArticlePage from '../components/Article/ArticlePage'
import Login from '../components/Login/Login'
import ArticleDetail from '../components/Article/ArticleDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Subject',
      name: 'Subject',
      component: Subject,
      children: [
        {
          path: '/Subject/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Subject/Person',
          name: 'Person',
          component: Person
        },
        {
          path: '/Subject/MessageBoard',
          name: 'MessageBoard',
          component: MessageBoard
        },
        {
          path: '/Subject/WriteArticle',
          name: 'WriteArticle',
          component: WriteArticle
        },
        {
          path: '/Subject/ArticlePage',
          name: 'ArticlePage',
          component: ArticlePage
        },
        {
          path: '/Subject/ArticleDetail',
          name: 'ArticleDetail',
          component: ArticleDetail
        }
      ]
    }
  ]
})
