require('dotenv/config');

const request = require("superagent");
const validationUsers = require('../validationUsers');

async function Login(){
    try {
        const { body } = await request.post("http://endereco_zabbix/zabbix/api_jsonrpc.php").send({
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": `${process.env.ZABBIX_USER}`,
                "password": `${process.env.ZABBIX_PASSWORD}`
            },
            "id": 1,
            "auth": null
        });
        return body.result;
    } catch (e) {
        console.log(e)
    }   
}

async function exemploapi(ctx, name, id){
    try {
        if (validationUsers(ctx, id) != '-1') {
            const { body } = await request.post("http://endereco_zabbix/zabbix/api_jsonrpc.php").send({
            "jsonrpc": "2.0",
            "method": "item.get",
            "params": {
                "output": "extend",
                "hostids": "colocar_host_id",
                "search": {
                    "key_": "colocar_key_item"
                }            },
            "id": 2,
            "auth": `${await Login()}`
       });
       const value = body.result[0].lastvalue;
       return await ctx.reply(`Segue exemplo de item no zabbix ${name}: ${value}`);            
        } else {
            ctx.reply(`Você não tem permissão para acessar essas informações, ${name}.`);          
        }
    } catch (error) {
        ctx.reply(`Ocorreu uma falha com sua solicitação verifique com Administrador, ${name} e tente novamente!`);    
        console.log(Error); 
    }   
}

module.exports = exemploapi;