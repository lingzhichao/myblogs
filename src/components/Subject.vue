<template>
  <div class="subjectContainer">
    <div class="homeHeader">
      <div class="navContainer">
        <div class="leftNav">
          <router-link to="/Subject/Home"><img src="../../static/images/logo.png" alt=""></router-link>
          <div class="navBox">
            <div
                    v-for="(item, index) in nav"
                    :key="index"
                    @click= "navStyleBtn(item.titles)">
              <router-link
                      v-bind:to="item.navPaths"
              >
                <div :style="{color: homeNavSelect===item.titles?'red':'#6c517a'}">{{item.titles}}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="changeLogin == 1" class="writeBtn" @click="toWrite">写文章</div>
        <div v-else class="welcome">欢迎来到凌志超的博客~</div>
      </div>
    </div>
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Footer from './Footer/Footer'

export default {
  name: 'Subject',
  data () {
    return {
      // counts: this.$store.getters.counts,
      nav: [
        {titles: '动态', navPaths: '/Subject/Home'},
        // {titles: '博文', navPaths: '/Subject/Article'},
        // {titles: '博文', navPaths: '/Subject/ArticleDetail'},
        {titles: '博文', navPaths: '/Subject/ArticlePage'},
        {titles: '留言', navPaths: '/Subject/MessageBoard'},
        {titles: '关于', navPaths: '/Subject/Person'},
      ],
      count: '',
      psd: '',
    }
  },

  mounted(){
    this.$store.dispatch('changeLogin');
  },
  computed:{
    ...mapGetters(['counts', 'changeLogin', 'homeNavSelect']), // 动态计算属性，相当于this.$store.getters.counts
  },
  methods:{
    toWrite: function(){
      this.$router.push({name: 'WriteArticle'});
    },
    navStyleBtn:function (title) {
      this.$store.dispatch('navStyleBtn', title);
      if (title === '博文') {
        this.$store.dispatch('getAllArticle');
      }
    },
    // asyncCancle(){
    //   this.count = '';
    //   this.psd = '';
    //   this.modal6 = false;
    //   this.loading = true;
    // },
    // asyncOK () {
    //   // 这里请求接口 对数据进行判空处理
    //   if (!this.checkPhone(this.count)) {
    //     this.modal6 = false;
    //     this.count = '';
    //     this.psd = '';
    //     return
    //   }
    //   if (!this.checkPassWord(this.psd, 8)) {
    //     this.modal6 = false;
    //     this.count = '';
    //     this.psd = '';
    //     return
    //   }
    //   var datas = this.$qs.stringify({
    //     count: this.count,
    //     psd: this.psd
    //   });
    //   this.$ajax.post('#', datas).then(res => {
    //     let userInfo = {
    //       phone: res.data.data[0].user_phone,
    //       pass: res.data.data[0].user_pasd,
    //     };
    //     userInfo = JSON.stringify(userInfo); //存cookie时应先转换
    //     this.$cookieStore.setCookie( 'userinfo' ,userInfo, 2); //这是存cookie
    //     this.$router.push({name: 'Home'}) // 这是跳转页面
    //   }).catch(res => {
    //     console.log('请求失败');
    //     this.modal6 = false;
    //   });
    // }
  },
  components:{
    Footer
  }
}
</script>

<style scoped>
  .writeBtn{
    font-size: 14px;
    cursor: pointer;
  }
  .writeBtn:hover{
    color: red;
  }
  .subjectContainer{
    width: 100%;
    overflow: hidden;
  }
  .welcome{
    font-size: 18px;
  }
  /*.footerContainer span{*/
  /*  display: inline-block;*/
  /*  background: red;*/
  /*}*/
  .homeHeader{
    width: 100%;
    height: 120px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    background: white;
    box-shadow: 0 1px 12px 0 #ebebeb ;
    z-index: 1000;
  }
  .navContainer{
    width: 1200px;
    height: 120px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navContainer img{
    /*height: 77px;*/
    display: block;
    margin-right: 100px;
  }
  .navBox{
    width: 500px;
    height: auto;
    /*border: 1px solid blue;*/
    display: flex;
    flex-direction: row;
    font-size: 17px;
    justify-content: space-around;
  }
  .navBox a{
    text-decoration: none;
    color:  #6c517a;
  }
  .navBox a:hover{
    color: red;
  }
  .leftNav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

  }


</style>
