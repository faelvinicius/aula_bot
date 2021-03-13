require('dotenv/config');

const user = process.env.USERS_ID;
const users_id = user.split(',');
console.log(users_id);

function validationUsers(ctx, id) {
  try {
      if(users_id.indexOf(id.toString()) >= 0){
        console.log('autentiquei');
        return '1';    
      } else {
        console.log('não autentiquei');
        console.log(id);
        console.log(users_id)
        return '-1';    
      }
  }catch (error) {
    ctx.reply(`Ocorreu uma falha com sua autenticação, entre em contato com os responsáveis!`);    
    console.log(Error); 
  }
};

module.exports = validationUsers;