import { onMounted, ref } from 'vue'

const config = {
  // 這個之後也是從接口拿（因為之後會有後台管理可以自訂該 config
  type: 200, // 輸入速度 (毫秒)
  delete: 50, // 刪除速度 (毫秒)
  switch: 1500, // 從 輸入完成 到 開始刪除 的間隔 (毫秒)
  next: 300, // 刪除完成後 切換到 下一個副標題　的間隔 (毫秒)
}

export const useGetTitle = () => {
  const subTitle = ref('') // 副標題

  const subTitleData = '愛貓就不要％貓' // 暫時假數據（應該要是從接口拿的）
  const subTitleDataLen = subTitleData.length

  // TODO: 輸入完成 到 開始刪除 的間隔 添加一個 class 讓 光標有閃爍的動畫
  // TODO: 支援 array 類型，兩種模式：順序、隨機

  onMounted(() => {
    handelSubTitle()
  })

  // 副標題打字效果
  function handelSubTitle() {
    new Promise(resolve => {
      // 輸入
      for (let i = 0; i < subTitleDataLen; i++) {
        setTimeout(() => {
          subTitle.value += subTitleData[i]
          if (i === subTitleDataLen - 1) setTimeout(() => resolve(null), config.switch)
        }, i * config.type)
      }
    }).then(() => {
      // 刪除
      for (let i = 0; i < subTitleDataLen; i++) {
        setTimeout(() => {
          subTitle.value = subTitle.value.split('').slice(0, -1).join('')
          // 下一個
          if (i === subTitleDataLen - 1) setTimeout(() => handelSubTitle(), config.next)
        }, i * config.delete)
      }
    })
  }

  return { subTitle }
}
