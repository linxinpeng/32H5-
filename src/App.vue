<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

!function(b, a){
    var c = b.documentElement;
    a = function() {
        var a = c.clientWidth;
        a && (c.style.fontSize = a/375 * 100 + "px")
    };
    window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", a, !1);
    b.addEventListener("DOMContentLoaded", a, !1)
}(document, window);

export default {
  name: 'App',
}
</script>

<style>
#app {
 
}
</style>
