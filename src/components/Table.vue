<script>
export default {
  props: {
    tableProps: {
      type: Object,
      default: () => ({})
    },
    isAllChecked: {
      type: Boolean,
      default: false
    },
    configs: {
      required: true,
      type: Array
    },
    height: {
      type: String,
      default: 'auto'
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    // eslint-disable-next-line vue/require-prop-types
    tableData: {
      required: true
    },

    defaultExpandAll: {
      type: Boolean,
      default: false
    },

    // eslint-disable-next-line vue/require-prop-types
    hasCheckbox: {
      default: true
    },

    headerStyle: {
      type: Object,
      default: () => ({})
    },

    expandRowKeys: {
      type: Array,
      default: () => ([])
    },

    cellStyle: {
      type: Object,
      default: () => ({})
    },

    tableSize: {
      type: String,
      default: 'medium'
    },
  },
  methods: {
    renderItem(config, index) {
      if (!config || !config.prop) return
      const headerRender = Object.hasOwnProperty.call(config, 'headerRender') && {
        header: config.headerRender
      }
      const render = Object.hasOwnProperty.call(config, 'render') && { default: config.render }

      const label = config.label
      const props = Object.assign(config, { label })
      return (
        !config.hide && (
          <el-table-column {...{ props }} key={index} sortable={!!config.sortable}
            show-overflow-tooltip={config.overflow}
            scopedSlots={Object.assign({}, headerRender, render)}/>
        )
      )
    },

    getRowKeys(row) {
      return row[this.rowKey] || row.id
    },

    handleRowClick(row, column, event) {
      this.$emit('handleRowClick', row)
    }

  },
  render() {
    const spread = {
      props: {
        ...this.$props.tableProps,
        data: this.tableData,
        rowKey: this.getRowKeys
      },
      on: {
        'row-click': this.handleRowClick
      }
    }
    return (
      <el-table
        {...spread}
        stripe
        ref='table'
        maxHeight={this.height}
        size={this.tableSize}
        data={this.tableData}
        rowKey={this.getRowKeys}
        headerCellStyle={this.headerStyle}
        cellStyle={this.cellStyle}
        default-expand-all={this.defaultExpandAll}
        expand-row-keys={this.expandRowKeys}
      >
        {this.$props.hasCheckbox ? (
          <el-table-column align='center' type='selection' width='55'
            reserve-selection={this.$props.tableProps.reserveSelection}/>
        ) : (
          <el-table-column width='20' prop='' label=' '/>
        )}
        {this.configs.map(this.renderItem)}
      </el-table>
    )
  }
}
</script>

<style></style>
