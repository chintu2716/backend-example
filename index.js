require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData={
  "login": "chintu2716",
  "id": 90671589,
  "node_id": "MDQ6VXNlcjkwNjcxNTg5",
  "avatar_url": "https://avatars.githubusercontent.com/u/90671589?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chintu2716",
  "html_url": "https://github.com/chintu2716",
  "followers_url": "https://api.github.com/users/chintu2716/followers",
  "following_url": "https://api.github.com/users/chintu2716/following{/other_user}",
  "gists_url": "https://api.github.com/users/chintu2716/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chintu2716/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chintu2716/subscriptions",
  "organizations_url": "https://api.github.com/users/chintu2716/orgs",
  "repos_url": "https://api.github.com/users/chintu2716/repos",
  "events_url": "https://api.github.com/users/chintu2716/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chintu2716/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-14T04:52:01Z",
  "updated_at": "2023-09-18T18:41:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{
    res.send('facebook.com')
})
app.get('/signup',(req,res)=>{
    res.send('<h2>please signup at chai aur code</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})