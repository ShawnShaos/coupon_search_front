Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    TabListCur: 0
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  tabListSelect(e) {
    this.setData({
      TabListCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
})