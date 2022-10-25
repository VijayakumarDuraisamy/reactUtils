export const getPermissions = async () => {
    /*
    Get user permissions helper function
    */
    return new Promise((resolve, reject) => {
        try {
            let userPermissionsList = localStorage.getItem('ipss_user_permissions')
            if (userPermissionsList) {
                resolve(JSON.parse(userPermissionsList))
            } else {
                resolve({})
            }
        } catch (err) {
            reject(err)
        }
    })
}

export const getProjectPermissions = async (projectName) => {
    /*
    Get project permissions helper function
    */
    return new Promise((resolve, reject) => {
        getPermissions().then(permissions => {
            resolve(permissions[projectName])
        }).catch(err => {
            resolve({})
        })
    })
}


export const storeUserPermissions = (user_permissions) => {
    localStorage.setItem('ipss_user_permissions',  JSON.stringify(user_permissions))
}

