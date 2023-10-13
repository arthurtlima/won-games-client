import { build, fake } from '@jackfranklin/test-data-bot'

export type User = {
  username: string
  email: string
  password: string
}

export const createUser = build<User>('User', {
  fields: {
    username: fake(f => { 
      let username: string;
      do {
        username = f.internet.userName();
      } while (username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username));
      return username
    }),
    password: fake(f => f.internet.password()),
    email: ''
  },
  postBuild: user => ({
    ...user,
    email: `${user.username.toLowerCase()}+e2e@wongames.com`
  })
})