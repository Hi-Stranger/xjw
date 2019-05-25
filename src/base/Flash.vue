<template>
  <div class="flash-box margin-auto min-1000 max-1000">
    <div id="ad-flash ">
      <param name="LOOP" value="false">
      <object width="600" height="350"
              codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"
              classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
        <param value="/upload/898/flash/170706055634.swf" name="movie">
        <param value="transparent" name="wmode">
        <param value="high" name="quality">
        <embed width="600" height="350" wmode="transparent" type="application/x-shockwave-flash"
               pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high"
               src="../../static/img/banner.swf">
      </object>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Flash"
  }
</script>

<style lang="less">
  .flash-box {
    z-index: 10;
  }
</style>
