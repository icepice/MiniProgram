// components/wp-header/wp-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: {
      type: Array,
      value: ['alpha', 'bravo', 'charlic']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {    
    curActive: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activate(e) {      
      const {id} = e.currentTarget.dataset;
      this.setData({
        curActive: id
      });
      
      this.triggerEvent('tabclick', {id, name: this.properties.titleList[id]})
    }
  }
})
