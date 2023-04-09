import pagination from '@/components/Pagination'

import tableComponents from '@/components/Table'

const tableMixins = {
  data() {
    return {
      filter: {
        searchWord: '',
        page: 1,
        pageSize: 10
      },
      total: 0,
      tableData: []
    }
  },

  components: {
    tableComponents,
    pagination

  },

  async mounted() {
    this.getTableData && await this.getTableData()
  },

  methods: {
    handleSearch(keyword) {
      this.filter.searchWord = keyword
      this.filter.page = 1
      this.getTableData && this.getTableData()
    },

    handleSizeChange(pageSize) {
      this.filter.page = 1
      this.filter.pageSize = pageSize
      this.getTableData && this.getTableData()
    },

    handleCurrentChange(page) {
      this.filter.page = page
      this.getTableData && this.getTableData()
    }
  }
}

export default tableMixins
