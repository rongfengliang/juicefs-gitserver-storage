const  { Git } = require('node-git-server');
const { join } = require('path');
const port =
  !process.env.PORT || isNaN(process.env.PORT)
    ? 7005
    : parseInt(process.env.PORT);

const repos = new Git(join(__dirname, './mydemoapp'), {
  autoCreate: true,
});


repos.on('push', (push) => {
  console.log(`push ${push.repo}/${push.commit} ( ${push.branch} )`);
  push.accept();
});

repos.on('fetch', (fetch) => {
  console.log(`fetch ${fetch.commit}`);
  fetch.accept();
});

repos.listen(port,{type:'http'},()=>{
  console.log(`node-git-server running at http://localhost:${port}`);

})