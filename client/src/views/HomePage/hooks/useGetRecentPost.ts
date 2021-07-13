import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { loliGet } from '@/utils/loli'
import { homePage } from '@/api'

interface Post {
  id: number
  title: string
  content: string
  publishTime: string
  updateTime?: string
  category?: string
  tag?: string
  picture?: string
}

export const useGetRecentPost = () => {
  const recentPost = ref() // 請求數據
  const getRecentPostStatus = ref(false) // 请求是否成功

  onMounted(async () => {
    try {
      // 请求最近文章
      const res: { data: Post[] } = await loliGet(homePage.recently, {
        pageNum: 1,
        pageSize: 10,
      })

      // 更改状态
      getRecentPostStatus.value = true

      // 格式化日期
      recentPost.value = res.data.map(item => {
        item.publishTime = dayjs(item.publishTime).format('YYYY/DD/MM')
        return item
      })
    } catch (error) {
      console.log('请检查网络')
    }
  })

  return { recentPost, getRecentPostStatus }
}
