const env = require('./telegram')
const Telegraf = require('telegraf')
const dashzabbix = require('./prints/dashzabbix');
const demografana = require('./teclados/demografana')
const acoes = require('./teclados/acoes')
const demoapizabbix = require('./teclados/demoapizabbix')
const exemploapizabbix = require('./api_zabbix/exemploapi');
const bot = new Telegraf(env.token) 

bot.start(ctx => {
    try {
        ctx.reply(`Olá, seja bem vindo ${ctx.update.message.from.first_name}! Esse é o seu Bot de exemplo.\n`
        + '\nDigite /menu - Lista de acções disponíveis'
        ); 
    } catch (error) {
        ctx.reply(`Ocorreu uma falha ${ctx.update.message.from.first_name}, tente novamente!`);    
        console.log(Error);  
    }
});


bot.hears(['Dash Zabbix'], async (ctx) => {
    await dashzabbix(ctx, ctx.update.message.from.first_name, ctx.update.message.from.id);
});

bot.hears(['API Zabbix'], async (ctx) => {
    await exemploapizabbix(ctx, ctx.update.message.from.first_name, ctx.update.message.from.id);
});


bot.command(['/menu'], ctx => 
ctx.reply('Dashboards disponíveis:'
    + '\n - Demo Grafana'
    + '\n - Demo Api Zabbix', acoes));

bot.hears(['Demo Grafana'], async (ctx) => {
    await ctx.reply(`Dashboards Demo Grafana:`
    + '\n - Dash Zabbix', demografana)});

bot.hears(['Demo API Zabbix'], async (ctx) => {
    await ctx.reply(`Metricas Item Api Zabbix:`
    + '\n - Api Zabbix', demoapizabbix)});    


module.exports = bot;   
