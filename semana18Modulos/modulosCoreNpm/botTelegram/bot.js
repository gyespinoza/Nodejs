const { Telegraf } = require('telegraf')
const bot = new Telegraf('1760351987:AAFOTWo_9Iekf8DcBbeS_CGzL77mQQcHx9w') //token


bot.start((ctx)=>{
    ctx.reply(`Bienvenido, este es mi primer bot ${ctx.from.first_name}!`) //capturamos el nombre dle usuario
})


//crear comando personalizado
bot.command(['saludo','Saludo', 'SALUDO'], (ctx)=>{
    ctx.reply('Comando personalizado')
})

//escuchar cuando el usuario envie un sticker
bot.on('sticker', (ctx)=>{
    ctx.reply('Has enviado un sticker')
})

//iniciar bot
bot.launch()