<template>
    <div class="loginContainer" id="loginContainer">
        <div class="toLogin">
            <div class="loginBox"></div>
            <div class="nameContaienr" @click="toHome">
                <div>
                    <div class="imgBoxs">
                        <img :src="touris.header" alt="">
                    </div>
                    <p class="p1">{{touris.randomName}}</p>
                </div>
            </div>

        </div>
        <div class="toPush">
            <span @click="toSign">去写文章?</span>
        </div>
        <el-dialog
                title="登录"
                :visible.sync="dialogVisible"
                width="30%"
        >
            <div class="userName">
                姓名：<el-input v-model="names" placeholder="请输入用户名" maxlength="11"  autocomplete="off"></el-input>
            </div>
            <div class="userName">
                密码：<el-input v-model="psd" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="canceling">取 消</el-button>
                <el-button type="primary" @click="sureing">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        mounted() {
            this.winHeight = $(window).height();
            $('#loginContainer').css({
                height: this.winHeight,
            });
        },
        name: "Login",
        data () {
          return {
              winHeight: 0,
              dialogVisible: false,
              names: '',
              psd: ''
          }
        },
        computed: {
            ...mapGetters(['touris'])
        },
        created() {
            this.$store.dispatch('randomName');
        },
        methods: {
            canceling: function() {
                this.names = '';
                this.psd = '';
                this.dialogVisible = false
            },
            sureing: function() {
                if (!this.checkPhone(this.names)) {
                    return
                }
                if (!this.checkPassWord(this.psd, 8)) {
                    return
                }
                let data = {
                    userName: this.names,
                    psd: this.psd,
                };
                this.$store.dispatch('logins', data);// 登录验证
                this.dialogVisible = false;
                this.names = '';
                this.psd = '';
                this.$router.push({name: 'Home'});

                // 这里请求接口
                // let datass = this.$qs.stringify(datas);
                // 这是post请求方式
                // this.$ajax.post('http://api.tianapi.com/meinv/', datass).then((res)=>{
                // 这是get请求
                // this.$ajax.get('http://api.tianapi.com/meinv/', {params: data}).then((res)=>{
                //     console.log('登录成功!');
                //     this.dialogVisible = false;
                //     this.names = '';
                //     this.psd = '';
                //     this.$store.dispatch('changeLogin', true);
                //     this.$router.push({name: 'Home'});
                // }).catch(()=>{
                //     console.log('请求失败');
                // });
            },
            toHome:function () {
                this.$cookieStore.setCookie('isLogin', 0, 1);
                this.$store.dispatch('changeLogin');
                this.$router.push({name: 'Home'});
            },
            toSign:function () {
                this.dialogVisible = true
            },
        }
    }
</script>

<style scoped>
    .userName{
        margin: 10px auto;
        font-size: 16px;
    }
    .toPush{
        text-align: right;
        margin: 10px auto;
        font-size: 15px;
        width: 300px;
        color: white;
    }
    .toPush span:first-child{
        color: white;
        cursor: pointer;
    }
    .imgBoxs{
        position: relative;
        top: 10px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }
    .imgBoxs img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .loginContainer{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url("../../../static/images/bg1.jpg") no-repeat;
        background-position: center;
        background-size: 100% 100%;
    }
    .loginContainer img:first-child{
        position: absolute;
        z-index: 1;
        top: 0;
    }
    .nameBox{
        width: auto;
        height: auto;
        z-index: 2;
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
    }
    .toLogin{
        position: relative;
        z-index: 2;
        width: 400px;
        height: 200px;
        margin: 0 auto;
        /*top: 50%;*/
        /*transform: translateY(-60%);*/
    }


    .loginBox{
        width: 100%;
        height: 100%;
        background: #6c517a;
        position: absolute;
        z-index: 2;
        opacity: .1;
        border-radius: 20px;
    }
    .toLogin:hover .loginBox{
        opacity: .3;
        background: #C8DDF8;
        box-shadow: 0 0 5px 5px #424E77;
    }
    .nameContaienr{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 3;
        text-align: center;
        color: white;
        cursor: pointer;
    }
    .nameContaienr div:first-child{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .p1{
        margin-top: 30px;
        font-size: 24px;
    }
    /*.this-div{*/

    /*    background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);*/
    /*    -webkit-text-fill-color: transparent;*/
    /*    -webkit-background-clip: text;*/
    /*    -webkit-background-size: 200% 100%;*/
    /*    -webkit-animation:  maskedAnimation 4s infinite linear;*/
    /*    font-size: 36px;*/
    /*}*/
    /*@keyframes maskedAnimation {*/
    /*    0% {*/
    /*        background-position: 0 0;*/
    /*    }*/
    /*    100% {*/
    /*        background-position: -100% 0;*/
    /*    }*/
    /*}*/

</style>