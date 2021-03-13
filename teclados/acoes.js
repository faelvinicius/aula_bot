require('dotenv/config');

const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')

const acoes = Markup.keyboard([ 
    ['Demo Grafana', 'Demo API Zabbix']
]).resize().extra()


module.exports = acoes;
