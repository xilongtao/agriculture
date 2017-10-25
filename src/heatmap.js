export function HEATMP() {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(BMapLib)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js";
    script.onerror = reject;
    document.head.appendChild(script);
  })
}