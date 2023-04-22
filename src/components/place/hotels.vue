<template>
  <div style=" height:Height">
    <el-row style="height:Height;">
      <!-- <search-bar>你好<arch-bar> -->
      <el-button class="test" type="primary" style="width:10%;background: #505458;border: none" v-on:click="getinf">给我信息</el-button>
      <div    v-for="item in hotels.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              :key="item.id" class="showhotel">
        <el-card style="width: 1000px;margin-bottom: 20px;height: 300px;float: left;margin-right: 15px" class="show"
                 bodyStyle="padding:20px">
          <div class="cover">
            <img :src="item.url" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.name}}</a>
            </div>
          </div>
          <div class="description">
            {{item.describe}}
          </div>
        </el-card>
      </div>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        style="position:static"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="hotels.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'hotel',
  data () {
    return {
      hotels: [],
      currentPage: 1,
      pagesize: 5,
      Height:'',
    }
  },
  methods: {
    created () {
    //获取屏幕高度
    let screenHeight = document.documentElement.clientHeight-350 + "px";
    this.$nextTick(() => {
      this.Height = screenHeight;
    })
    alert('Height')
   },
   mounted () {
    const that = this;
    window.onresize = () => {
      return (() => {
        let screenHeight = document.documentElement.clientHeight-350 + "px";
        that.Height = screenHeight;
        alert('Height')
      })()
    }
  },
    getinf () {
      this.$axios
        .post('/hotel', {
          username: '123'
        })
        .then(res => {
          // eslint-disable-next-line eqeqeq
          console.log(res)
          console.log(res.data.code)
          // eslint-disable-next-line eqeqeq
          if (res.data.code == 200)
          // eslint-disable-next-line no-undef,brace-style
          {
            this.created()
            this.mounted()
            console.log(this.Height)
            // eslint-disable-next-line no-undef
            console.log(res.data.result[1])
            // eslint-disable-next-line no-undef
            this.hotels = res.data.result
          }
        })
        .catch(failResponse => {
          alert('连接失败！')
        })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    }

  }
}
</script>


<style scoped>
  .showhotel{
    display: flex;
  }
  .test{
    display: inline-block;
  }
  .cover {
    width: 280px;
    height: 240px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
    float: left;
  }

  img {
    width: 240px;
    height: 240px;
    /*margin: 0 auto;*/
    display: flex;
  }
  .title {
    font-size: 14px;
    height: 100px;
    text-align: middle;
    display: flex;
  }

  .description {
    color: #333;
    width: 400px;
    font-size: 13px;
    margin-bottom: 16px;
    display: flex;
  }

  .abstract {
    display: block;
    line-height: 17px;
    text-align:right
  }
  .pagination{
    margin-top: 40px;
  }
  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>
