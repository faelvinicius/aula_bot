require('dotenv/config');

const puppeteer = require('puppeteer');
const validationUsers = require('../validationUsers');

async function dashzabbix(ctx, name, id) {
  try {
    if (validationUsers(ctx, id) != '-1') {
      const browser = await puppeteer.launch({args: ['--no-sandbox']});
      const page = await browser.newPage();
      await ctx.reply(`Segue a sua solicitação ${name}, aguarde alguns segundos...`);
      await page.setViewport({ width: 2048, height: 1536 })
      await page.goto(`http://207.180.199.61:3000/d/a-aKwt0iz/zabbix-server?orgId=1&refresh=5s&kiosk=tv`);
      await page.type('.css-8e5b3:nth-child(1) > div > .css-1kn3rgh-input-wrapper > .css-1w5c5dq-input-inputWrapper > .css-1bjepp-input-input', email);
      await page.type('.css-8e5b3:nth-child(2) > div > .css-1kn3rgh-input-wrapper > .css-1w5c5dq-input-inputWrapper > .css-1bjepp-input-input', senha);
      await page.click('.css-9h8xxw > .css-1t0mszb > .css-lcb2lo > .css-xs0vux > .css-6ntnx5-button');
      await page.waitForTimeout(7000);
      await page.screenshot({path: '/tmp/dashzabbix.png'});
      await browser.close();
      await ctx.reply(`Segue exemplo do Dash Zabbix no Grafana, ${name}!`);    
      await ctx.replyWithPhoto({source: `/tmp/dashzabbix.png`, fullpage: true});       
    } else {
      ctx.reply(`Você não tem permissão para acessar essas informações ${name}, verifique com administrador.`);          
    }          
  } catch (error) {
    ctx.reply(`Ocorreu uma falha com sua solicitação ${name}, aguarde alguns minutos e tente novamente!`);    
    console.log(Error);       
  }      
};

module.exports = dashzabbix;
