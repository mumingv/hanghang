<template>
  <div class="health-check">
    <h1>检查结果</h1>
    <el-table
      :data="tableData"
      border
      style="width: 99%"
    >
      <el-table-column
        prop="date"
        label="日期"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="item"
        label="项目"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="reference"
        label="参考区间"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="comment"
        label="备注"
        header-align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  // import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [{
        	date: '2018-04-10',
        	item: '铁蛋白',
        	result: '21.8',
        	unit: 'ng/ml',
        	reference: '28-397',
        	comment: '医生：陆小彦（神经科）'
        }, {
        	date: '2018-06-09',
        	item: '铁蛋白',
        	result: '45.0',
        	unit: 'ng/ml',
        	reference: '28-397',
        	comment: '医生：陆小彦（神经科）'
        }]
      }
    },
    mounted() {
    }
  }
</script>
<style>
  .el-table {
    margin: 0 auto;
  }
</style>