const cachedFetch = (url, options) => {
  // 将 URL 作为 sessionStorage 的 key
  let cacheKey = url

  // 命中缓存的新代码开始
  let cached = sessionStorage.getItem(cacheKey)
  if (cached !== null) {
    // it was in sessionStorage! Yay!
    let response = new Response(new Blob([cached]))
    return Promise.resolve(response)
  }
  // 命中缓存的新代码结束

  return fetch(url, options).then(response => {
    // 仅在结果为 JSON 或其他非二进制数据情况下缓存结果
    if (response.status === 200) {
      let ct = response.headers.get('Content-Type')
      if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
        // 当然，除了 .text()，也有 .json() 方法
        // 不过结果最终还是会以字符串形式存在 sessionStorage 中
        // 如果不克隆 response，在其返回时就会被使用
        // 这里用这种方式，保持非入侵性
        response.clone().text().then(content => {
          sessionStorage.setItem(cacheKey, content)
        })
      }
    }
    return response
  })
}

export default cachedFetch