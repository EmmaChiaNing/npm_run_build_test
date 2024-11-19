<template>
	<div v-for="item in permissionList" :key="item.moduleName">
		<h1>{{item.moduleName}}</h1>
		<label>
			<input type="checkbox"  :value="item.moduleName" :checked="item.checked">
			全選
		</label>
		<div v-for="permissionModule in item.permissions" :key="permissionModule.moduleName">
			<h2>{{ permissionModule.moduleName }}</h2>
			<fieldset v-for="(permissionItem, permissionName) in permissionModule.permissions" :key="permissionName">
				<legend>{{ permissionName }}</legend>
				<div class="checkboxes-grid">
					<div :class="{'width': permissionIndex === 0}" class="checkboxes-item"  v-for="(permission, permissionIndex) in permissionItem">
						<input type="checkbox" :id="permission.name"  :value="permission.name" :checked="permission.checked">
						<label :for="permission.name">{{ permission.name }}</label>
					</div>
				</div>
			</fieldset>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import rolePermission from '@/data/rolePermission.json'
import permission from '@/data/permission.json'


console.log("🚀 ~ rolePermission:", rolePermission)
console.log("🚀 ~ permission:", permission)

const permissionList = [
  {
    moduleName: 'all',
    permissions: permission.map(({ moduleName, permissions, sort }) => {
        const flattenedPermissions = {};
				// Object.entries 和 flat：將每個模組的權限整理成一個平面的陣列。
        Object.entries(permissions).forEach(([key, value]) => {
          const permissionArray = Object.values(value)
            .flat()
            .map(permission => ({
              name: permission,
              checked: false
            }));

          // 加入 "全選"
          permissionArray.unshift({
            name: "全選",
            checked: false
          });

          flattenedPermissions[key] = permissionArray;
        });

        return {
          moduleName,
          permissions: flattenedPermissions,
          sort,
        };
      })
			// 按 sort 排序
      .sort((a, b) => a.sort - b.sort) 
  }
];

console.log("🚀 ~ permissionList:", permissionList)

defineOptions({
    name: 'PermissionView'
})
</script>

<style lang="css" scoped>
.checkboxes-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
}
.checkboxes-item {
  display: flex;
  gap: 5px;
}
.checkboxes-grid label {
  word-break: break-all;
  line-height: 1rem;
  flex-shrink: 1;
  cursor: pointer;
}
.checkboxes-grid input {
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
}
</style>