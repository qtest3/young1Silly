// [rule: 摸鱼1]
// [cron: 0 8,11,16 * * *]

let content = request('https://api.j4u.ink/proxy/remote/moyu.json', (err, resp, body) => {
let data = JSON.parse(body);
let my = image(data.data.moyu_url)
let groups = [
     {
        //  imType: "wx",
         imType: "qq",
         groupCode: 1064511696 ,//微信群号
     }
]

for (let i = 0; i < groups.length; i++) {
    groups[i]["content"] = my
    push(groups[i])
}
});