import { onMounted, ref } from 'vue'
import _random from 'lodash/random'

const config = {
  // 這個之後也是從接口拿（因為之後會有後台管理可以自訂該 config
  type: 200, // 輸入速度 (毫秒)
  delete: 50, // 刪除速度 (毫秒)
  switch: 1500, // 從 輸入完成 到 開始刪除 的間隔 (毫秒)
  next: 300, // 刪除完成後 切換到 下一個副標題　的間隔 (毫秒)
  mode: 'random', // 模式: 'order'(順序), 'random'(隨機)，當 subTitleData.length 大於 1 時生效
}

export const useGetTitle = () => {
  const subTitle = ref('') // 副標題
  const subTitleData = ['愛貓就不要％貓', 'Sakura Miko 是我婆', 'PekoMiko 是真理'] // 暫時假數據（應該要是從接口拿的）

  // TODO: 輸入完成 到 開始刪除 的間隔 添加一個 class 讓 光標有閃爍的動畫

  // 副標題打字效果
  /**
   * @function handleSubTitle
   * 調用核心函式前的模式處理及基本聲明變量
   * @param {string} subTitle - 模式 : order, random
   * @param {string} subTitleData - 副標題陣列
   */
  function handelSubTitle(subTitleData: string[], mode: string = 'order') {
    const subTitleDataLength = subTitleData.length // 副標題資料長度
    const subTitleDataIndexLength = subTitleDataLength - 1 // 索引值總長度
    let nextOrder = 0 // 順序模式下一個索引值

    // 若數量等於 1 則指定索引值為 0
    if (subTitleDataLength === 1) return meow(subTitleData[0])

    // 模式
    switch (mode) {
      case 'order':
        // 順序
        meow(subTitleData[0])
        nextOrder++
        break
      case 'random':
        // 隨機
        meow(subTitleData[_random(0, subTitleDataIndexLength, false)])
        break
    }

    /**
     * @function meow - 核心函數
     *  * 處理打字效果，也包括調用下一次核心函數的模式處理
     * @param {string} subTitle - 副標題
     */
    function meow(title: string) {
      const titleLen = title.length
      new Promise(resolve => {
        // 輸入
        for (let i = 0; i < titleLen; i++) {
          setTimeout(() => {
            subTitle.value += title[i]
            i === titleLen - 1 && setTimeout(() => resolve(null), config.switch)
          }, i * config.type)
        }
      })
        .then(() => {
          // 刪除
          return new Promise(resolve => {
            for (let i = 0; i < titleLen; i++) {
              setTimeout(() => {
                subTitle.value = subTitle.value.split('').slice(0, -1).join('')
                // 下一個
                i === titleLen - 1 && setTimeout(() => resolve(null), config.next)
              }, i * config.delete)
            }
          })
        })
        .then(() => {
          // 調用下一次前的模式處理

          // 若數量等於 1 則指定索引值為 0
          if (subTitleDataLength === 1) return meow(subTitleData[0])

          // 模式
          switch (mode) {
            case 'order':
              // 順序
              nextOrder === subTitleDataLength && (nextOrder = 0) // 超出長度，重置索引值
              meow(subTitleData[nextOrder])
              nextOrder++
              break
            case 'random':
              // 隨機
              meow(subTitleData[_random(0, subTitleDataIndexLength, false)])
              break
          }
        })
    }
  }
  onMounted(() => {
    handelSubTitle(subTitleData, config.mode)
  })

  return { subTitle }
}
