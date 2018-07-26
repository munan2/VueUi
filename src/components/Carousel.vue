<template>
  <div class="carousel-container" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <img :src="carouselImg[prevIndex].url"  :class="{'css-move-left':bigFlagLeft, 'css-move-big-right':bigFlagRight}">
    <img :src="carouselImg[currentIndex].url" :class="{'middle-img':true, 'css-move-small-left':smallFlagLeft, 'css-move-small-right': smallFlagRight}">
    <img :src="carouselImg[nextIndex].url" :class="{'css-move-big-left':bigFlagLeft, 'css-move-right':smallFlagRight}">
  </div>
</template>

<script>
  // import Swipe from '../assets/js/touchMove.1.js'
  export default {
    props: [
      'carouselImg'
    ],
    data () {
      return {
        currentIndex: 1,
        prevIndex: 0,
        nextIndex: 2,
        bigFlagLeft: false,
        smallFlagLeft: false,
        bigFlagRight: false,
        smallFlagRight: false,
        canMove: true
      }
    },
    methods: {
      touchstart (e) {
        this.initDisX = e.touches[0].clientX
        this.changeDisX = e.touches[0].clientX
      },
      touchmove (e) {
        this.changeDisX = e.touches[0].clientX
      },
      touchend (e) {
        this.moveDisX = this.changeDisX - this.initDisX
        if (this.canMove) {
          this.canMove = false
          if (this.moveDisX > 0) {
            this.position = 'right'
            this.bigFlagRight = true
            this.smallFlagRight = true
            setTimeout(function () {
              this.changeImg(this.position)
              this.canMove = true
            }.bind(this), 1000)
          } else if (this.moveDisX < 0) {
            this.position = 'left'
            this.smallFlagLeft = true
            this.bigFlagLeft = true
            setTimeout(function () {
              this.changeImg(this.position)
              this.canMove = true
            }.bind(this), 1000)
          }
        }
      },
      changeImg (pos) {
        if (pos == 'left') {
            this.currentIndex++
        } else {
            this.currentIndex--
        }
        if (this.currentIndex > this.carouselImg.length -1 ) {
            this.currentIndex = 0
          }
        if (this.currentIndex < 0) {
            this.currentIndex = this.carouselImg.length - 1
        }
            this.nextIndex = this.currentIndex + 1
            this.prevIndex = this.currentIndex - 1
        if (this.currentIndex == (this.carouselImg.length - 1)) {
            this.nextIndex = 0
        }
        if (this.currentIndex == 0) {
            this.prevIndex = this.carouselImg.length - 1
        }
        this.smallFlagLeft = false
        this.bigFlagLeft = false
        this.smallFlagRight = false
        this.bigFlagRight = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .carousel-container {
    width: 20.4rem;
    margin-left: -5rem;
    height: 7.9rem;
    line-height: 7.9rem;
    img {
      width: 5.1rem;
      height: 6.9rem;
      display: inline-block;
      float: left;
      margin: 0.5rem 0.1rem;
      border-radius: 0.2rem;
    }
    .middle-img {
      width: 6.6rem;
      height: 7.9rem;
      margin-top: 0;
    }
    .css-move-small-left {
      width: 5.1rem;
      height: 6.9rem;
      margin: 0.5rem 0;
      transform: translate(-5.2rem);
      transition: all 1s ease;
    }
    .css-move-left {
      transform: translate(-2rem);
      transition: transform 1s ease;
    }
    .css-move-big-left {
      width: 6.6rem;
      height: 7.9rem;
      margin-top: 0;
      transform: translate(-5.1rem);
      transition: all 1s ease;
    }
    .css-move-small-right {
      width: 5.1rem;
      height: 6.9rem;
      margin: 0.5rem 0;
      transform: translate(5.4rem);
      transition: all 1s ease;
    }
    .css-move-big-right {
      width: 6.6rem;
      height: 7.9rem;
      margin-top: 0;
      transform: translate(5.3rem);
      transition: all 1s ease;
    }
    .css-move-right {
      transform: translate(2rem);
      transition: transform 1s ease;
    }
  }
</style>
