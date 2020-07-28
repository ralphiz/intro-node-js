const { users, posts } = require('./data')

const getUserById = (id, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const filtered = posts.filter(post => post.createdBy === userId)
    cb(filtered)
  }, 150)
}

module.exports = {
  getUserById,
  getPostsForUser
}
