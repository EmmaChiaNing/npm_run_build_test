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
				<div class="flex wrap">
					<div :class="{'width': permissionIndex === 0}" class="mr-1"  v-for="(permission, permissionIndex) in permissionItem">
						<label >
							<input type="checkbox"  :value="permission.name" :checked="permission.checked">
							{{ permission.name }}
						</label>
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