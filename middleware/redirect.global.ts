export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/bio') {
    return navigateTo('/')
  }
})
