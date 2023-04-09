<template>
  <div class="pagination-wrapper clearfix">
    <el-pagination
      ref="pagination"
      class="pull-right"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :layout="layout"
      :current-page="currentPage"
      :page-size="currentPageSize"
      :total="total"
      :small="small"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    layout: {
      type: String,
      default: 'sizes,total,prev,pager,next,jumper'
    },
    pageSizes: {
      type: Array,
      default: () => [2, 10, 20, 50, 100]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pagerCount: {
      type: Number,
      default: 7 // 大于等于5 小于21的奇数
    },
    currentPage: {
      type: Number,
      default: 1
    },
    currentPageSize: {
      type: Number,
      default: 10
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$refs.pagination.$el.querySelector('.el-pagination__editor').setAttribute('title', '输入数字，按Enter键查询')
  },
  methods: {
    handleSizeChange(size) {
      this.$emit('sizeChange', size)
    },
    handleCurrentChange(current) {
      this.$emit('currentChange', current)
    }
  }
}
</script>

<style lang='scss' scoped>
.pagination-wrapper {
  padding: 10px;
  .pull-right{
    float: right;
  }
}
</style>
