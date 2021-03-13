require('dotenv/config');

const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')

const demografana = Markup.keyboard([ 
    ['Dash Zabbix']
]).resize().extra()


module.exports = demografana;