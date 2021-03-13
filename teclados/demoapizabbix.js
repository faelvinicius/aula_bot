require('dotenv/config');

const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')

const demoapizabbix = Markup.keyboard([ 
    ['API Zabbix']
]).resize().extra()


module.exports = demoapizabbix;