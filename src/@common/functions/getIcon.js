
export const getIcon = (name) => {
    try {
        const image = require('../../assets/icon/'+ name +'.svg')
        return image
    } catch (error) {
        return null
    }
}