<template>
    <!-- <div>
        <input type="checkbox" v-model="checkedNames"></input>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>

    </div> -->
</template>

<script setup>
import { ref } from 'vue';
import rolePermission from '@/data/rolePermission.json'
import permission from '@/data/permission.json'
console.log("🚀 ~ rolePermission:", rolePermission)
console.log("🚀 ~ permission:", permission)
const checkedNames = ref([])


const test = [{
    "moduleName": "permissionModule",
    "permissions": {
        "account": {
            "display": [
                "accountDisplay"
            ],
            "create": [
                "createUser"
            ],
            "modify": [
                "updateUser",
                "resetUserPassword",
                "updateUserStatus"
            ]
        },
        "role": {
            "display": [
                "roleDisplay"
            ],
            "create": [
                "createRole"
            ],
            "modify": [
                "updateRole"
            ],
            "delete": [
                "deleteRole"
            ]
        }
    },
    "sort": 1
},
{
    "moduleName": "dashboard",
    "permissions": {
        "dashboard": {
            "display": [
                "memberDashboard",
                "memberTransactionDashboard",
                "memberTransactionModelDashboard"
            ]
        }
    },
    "sort": 2
}]

// const testPermissionList = test.map((item) => {
//     return {
//         moduleName: item.moduleName,
//         permissions: Object.entries(item.permissions).map((key) => {
//             return {
//                 [key[0]]: Object.entries(key[1]).map((permission) => {
//                     return {
//                         [permission[0]]: permission[1]
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("🚀 ~ testPermissionList ~ testPermissionList:", testPermissionList)

const permissionList = [
    {
        moduleName: 'all',
        permissions: [
            {
                moduleName: "permissionModule",
                permissions: {
                    account: [
                        'accountDisplay',
                        'createUser',
                        'updateUser',
                        'resetUserPassword',
                        'updateUserStatus'
                    ],
                    role: [
                        'roleDisplay',
                        'createRole',
                        'updateRole',
                        'deleteRole'
                    ]
                },
                sort: 1,
            },
            {
                moduleName: "dashboard",
                permissions: {
                    dashboard: [
                        'memberDashboard',
                        'memberTransactionDashboard',
                        'memberTransactionModelDashboard'
                    ]
                },
                sort: 2,
            }
        ],
    }
]

defineOptions({
    name: 'PermissionView'
})
</script>