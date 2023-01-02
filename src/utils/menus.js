
export const getMenuData = (routes) => {
  const result = []
  routes.forEach(item => {
    if (!item.hideInMenu) {
      result.push(item)
    }
  })
  return result
}
