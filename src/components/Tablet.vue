<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
export default {
  name: "Tablet",
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      columns,
      data,
    };
  },
};
const columns = [
  {
    name: "AUTHOR",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "FUNCTIONS",
    dataIndex: "functions",
    key: "funtions",
  },
 
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "IMPLOYED",
    dataIndex: "employed",
    key: "employed",
   
  },
  {
    title: "",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    functions: "Manager",
    status: "online",
    employed: "1/1/2024"

  },
  {
    key: "2",
    name: "John Brown",
    functions: "Programmer",
    status: "offline",
    employed: "1/2/2024"
  },
  {
    key: "3",
    name: "John Wich",
    functions: "Executive",
    status: "offline",
    employed: "9/4/2024"
  },
];
</script>

<template>
  <div class="bg-white w-full rounded-[20px] p-[50px]">
    <div class="p-[20px]">
      <span> Authors Table </span>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span> Author </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>

        <template v-if="column.key === 'functions'">
          <a>
            {{ record.functions }}
          </a>
        </template>
        
        <template v-if="column.key === 'status'">
          <a>
            {{ record.status }}
          </a>
        </template>

        <template v-if="column.key === 'employed'">
          <a>
            {{ record.employed }}
          </a>
        </template>
        
      </template>
    </a-table>
  </div>

  <div class="bg-white w-full rounded-[20px] p-[50px] mt-[30px]">
    <div class="p-[20px]">
      <span> Authors Table </span>
    </div>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span> Author </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>

        <template v-if="column.key === 'functions'">
          <a>
            {{ record.functions }}
          </a>
        </template>
        
        <template v-if="column.key === 'status'">
          <a>
            {{ record.status }}
          </a>
        </template>

        <template v-if="column.key === 'employed'">
          <a>
            {{ record.employed }}
          </a>
        </template>
        
      </template>
    </a-table>
  </div>
</template>

