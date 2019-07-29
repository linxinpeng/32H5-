
export default function MapLoader () {   // <-- 原作者这里使用的是module.exports
    return new Promise((resolve, reject) => {
      if (window.AMap) {
        resolve(window.AMap)
      } else {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = 'http://webapi.amap.com/maps?v=1.4.4&callback=initAMap&key=98a6a23976daf83d52bf0c0137a179be'
        script.onerror = reject
        document.head.appendChild(script)
        // console.log(script)
      }
      window.initAMap = () => {
        resolve(window.AMap)
      }
    })
  }
  