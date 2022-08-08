<template>
  <dv-full-screen-container class="fullScreenContainer">
    <dv-loading class="loading" v-if="showLoading" style="color:#ffffff">Loading...</dv-loading>
    <template v-else>
      <div class="top">
        <dv-decoration-8 style="width:300px;height:50px;" />
        <div class="title">
          这是一个标题
          <dv-decoration-5 style="width:800px;height:40px;"/>
        </div>
        <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
      </div>
      <div class="content">
        <div class="left">
          <dv-border-box-10 class="left_01">
            <ScrollRankingBoard class="left_01_content"></ScrollRankingBoard>
          </dv-border-box-10>
          <dv-border-box-10 class="left_02">
            <ActiveRingChart class="left_02_content"></ActiveRingChart>
          </dv-border-box-10>
        </div>
        <div class="center">
          <dv-border-box-10 class="center_01">
            <Map class="center_01_content"></Map>
          </dv-border-box-10>
        </div>
        <div class="right">
          <dv-border-box-10 class="right_01">
            <CapsuleChart class="right_01_content"></CapsuleChart>
          </dv-border-box-10>
          <dv-border-box-10 class="right_02">
            <ScrollBoard class="right_02_content"></ScrollBoard>
          </dv-border-box-10>
        </div>
      </div>
    </template>
  </dv-full-screen-container>
</template>
<script setup>
import  { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import ScrollRankingBoard from '../components/ScrollRankingBoard.vue'
import ActiveRingChart from '../components/ActiveRingChart.vue'
import CapsuleChart from '../components/CapsuleChart.vue'
import ScrollBoard from '../components/ScrollBoard.vue'
import Map from '../components/map.vue'

const router = useRouter()
const showLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    showLoading.value = false
  }, 1000)
})
</script>
<style lang="scss" scoped>
.fullScreenContainer {
  background-color: #010b36;
  .top {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: #FFFFFF;
      font-size: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .content {
    height: calc(100vh - 120px);
    display: flex;
    justify-content: space-around;
    .left {
      width: 430px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .left_01 {
        width: 100%;
        height: 390px;
        padding: 10px;
        overflow: hidden;
        .left_01_content {
          width: 100%;
          height: 100%;
          padding: 3%;
          box-sizing: border-box;
        }
      }
      .left_02 {
        // height: 383px;
        width: 100%;
        flex: 1;
        padding: 10px;
        margin-top: 10px;
        overflow: hidden;
        .left_02_content {
          width: 100%;
          height: 100%;
          padding: 3%;
          box-sizing: border-box;
        }
      }
    }
    .center {
      width: 900px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .center_01 {
        width: 100%;
        // height: 383px;
        flex: 1;
        .center_01_content {
          width: 100%;
          height: 100%;
          padding: 3%;
          box-sizing: border-box;
        }
      }
      .center_02 {
        width: 100%;
        height: 383px;
      }
    }
    .right {
      width: 430px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .right_01 {
        width: 100%;
        height: 390px;
        padding: 10px;
        overflow: hidden;
        .right_01_content {
          width: 100%;
          height: 100%;
          padding: 5% 3%;
          box-sizing: border-box;
        }
      }
      .right_02 {
        // height: 383px;
        width: 100%;
        flex: 1;
        padding: 10px 10px 15px;
        margin-top: 10px;
        overflow: hidden;
        .right_02_content {
          width: 100%;
          height: 100%;
          padding: 5% 3%;
          overflow: hidden;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
