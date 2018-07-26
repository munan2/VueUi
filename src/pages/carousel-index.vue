<template>
    <div class="container">
        <carousel :carouselImg="imgsList"></carousel>
    </div>
</template>
<script>
    import carousel from '../components/Carousel'
    export default {
        components: {
            carousel
        },
        data () {
            return {
                imgsList: [
                    {
                        index: 0,
                        url: require('../assets/imgs/1.jpg')
                    },{
                        index: 1,
                        url: require('../assets/imgs/2.jpg')
                    },{
                        index: 2,
                        url: require('../assets/imgs/3.jpeg')
                    },{
                        index: 3,
                        url: require('../assets/imgs/4.jpeg')
                    },{
                        index: 4,
                        url: require('../assets/imgs/5.jpeg')
                    }
                ]
            }
        }
    }
</script>
<style lang='less'>
    .container {
        width: 100vw;
        overflow: hidden;
    }
</style>