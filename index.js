const Discord = require('discord.js');
const bot = new Discord.Client();
//подключаем файл конфигурации
let config = require('./botconfig.json');
//"достаём" токен и префикс
let token = config.token;
let prefix = config.prefix;
var state = false;

let mainGang = [
    { username: 'Zhbul', id: '268076962973483009' },
    { username: 'Ilya', id: '356377478018629633' },
    { username: 'Oleg', id: '268341593726124042' },
    { username: 'Vasya', id: '344882022625574912' },
    { username: 'Kran', id: '209224851452329984' },
    { username: 'Anal', id: '268421246331518976' },
    { username: 'Bamboocho', id: '266598079317278730' },
];



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//создаём ссылку-приглашение для бота
bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
        bot.user.setPresence({
            status: 'available',
            activity: {
                name: 'Тупо отдыхаю',
                type: 'PLAYING',
                url: 'https://discord.com'
            }
        });

        //console.log(mainGang);
    });
});

bot.on('message', msg => {
    if (msg.content === prefix + 'help') {
        msg.reply(`
        !help - Помощь
        !start - Запуск ботяры
        !stop - Остановка ботяры
        !us - Собрать пати в амонгич
        !calc - Калькулятор усатого времени
        ------------------------------
        Голосовые команды:
        !sorry
        !cxc
        !dada9
        !perhot
        !granta
        !kazino
        !probitie
        !kakoy
        ------------------------------
        Текcтовый кринж:
        !bamboocho
        !Oleg
        !Ilya
        `);
    }
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'start') {
        state = true;
        bot.user.setPresence({
            status: 'available',
            activity: {
                name: 'Опять РАБота',
                type: 'PLAYING',
                url: 'https://discord.com'
            }
        });
        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voice.channel) {
            var dispatcher;
            msg.member.voice.channel.join().then(connection => {
                var startSound = getRandomInt(6);
                switch (startSound) {
                    case 0:
                        dispatcher = connection.play('audio/BleepBloop.mp3', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;

                    case 1:
                        dispatcher = connection.play('audio/ready.mp3', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;

                    case 2:
                        dispatcher = connection.play('audio/PeonWhat4.wav', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;
                    case 3:
                        dispatcher = connection.play('audio/PeasantPissed1.wav', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;

                    case 4:
                        dispatcher = connection.play('audio/PeasantWhat3.wav', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;
                    case 5:
                        dispatcher = connection.play('audio/AcolyteWhat1.wav', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;

                    default:
                        break;
                }

            });
        } else {
            msg.reply('Прыгни в канал');
        }
    }
});


bot.on('message', async msg => {
    if (msg.content === prefix + 'stop') {
        state = false;
        bot.user.setPresence({
            status: 'available',
            activity: {
                name: 'Тупо отдыхаю',
                type: 'PLAYING',
                url: 'https://discord.com'
            }
        });
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                var startSound = getRandomInt(1);
                switch (startSound) {
                    case 0:
                        dispatcher = connection.play('audio/stop.mp3', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                msg.member.voice.channel.leave();
                            }
                        });
                        break;

                        /*case 1:
                            dispatcher = connection.play('audio/PeasantYesAttack1.wav', { volume: 0.7 });
                            dispatcher.on("speaking", (speaking) => {
                                if (!speaking) {

                                    msg.member.voice.channel.leave();
                                }
                            });
                            break;
                        */

                    default:
                        break;
                }
            });
        } else {
            msg.reply('Прыгни в канал');
        }
        /*
                const dispatcher = connection.play('audio/stop.mp3', { volume: 1 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else {
            msg.reply('Прыгни в канал');
        }*/
    }
});


bot.on('message', async msg => {
    if (msg.content === prefix + 'sorry' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/sorry.mp3', { volume: 1 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'sorry') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'sorry') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'granta' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play('audio/GyrocopterYes2.wav', { volume: 0.7 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {
                        dispatcher = connection.play('audio/GyrocopterYes3.wav', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {
                                dispatcher = connection.play('audio/GyrocopterDeath1.wav', { volume: 0.7 });
                                dispatcher.on("speaking", (speaking) => {
                                    if (!speaking) {
                                        msg.member.voice.channel.leave();
                                    }
                                });
                            }
                        });

                    }
                });
            });
        } else if (msg.content === prefix + 'granta') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'granta') msg.reply('Включи ботяру');
});


bot.on('message', async msg => {
    if (msg.content === prefix + 'perhot' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/perhot.mp3', { volume: 0.5 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'perhot') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'perhot') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'kazino' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/kazino.mp3', { volume: 0.5 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'kazino') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'kazino') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'probitie' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/probit.m4a', { volume: 0.5 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'probitie') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'probitie') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'cxc' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/cxc.mp3', { volume: 0.9 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'cxc') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'cxc') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'kakoy' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/lya.mp3', { volume: 0.5 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'kakoy') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'kakoy') msg.reply('Включи ботяру');
});

bot.on('message', async msg => {
    if (msg.content === prefix + 'dada9' && state == true) {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/dada9.mp3', { volume: 0.7 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        } else if (msg.content === prefix + 'dada9') msg.reply('Прыгни в канал, потом командуй, фраер');
    } else if (msg.content === prefix + 'dada9') msg.reply('Включи ботяру');
});

bot.on('message', msg => {
    if (msg.content === prefix + 'bamboocho' && state == true) {
        msg.reply('Усатое ЧМЁ!');
        if (msg.member.voice.channel) {
            msg.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/bamb2.m4a', { volume: 0.4 });
                dispatcher.on("speaking", (speaking) => {
                    if (!speaking) {

                        msg.member.voice.channel.leave();
                    }
                });
            });
        }
    } else if (msg.content === prefix + 'bamboocho') msg.reply('Включи ботяру');
});

bot.on('message', msg => {
    if (msg.content === prefix + 'Oleg' && state == true) {
        msg.reply('Гвардии рядовой!');
    } else if (msg.content === prefix + 'Oleg') msg.reply('Включи ботяру');
});

bot.on('message', msg => {
    if (msg.content === prefix + 'Ilya' && state == true) {
        msg.reply('ASSPyrant');
    } else if (msg.content === prefix + 'Ilya') msg.reply('Включи ботяру');
});

bot.on('message', msg => {
    if (msg.content === prefix + 'calc' && state == true) {
        msg.reply(`Калькулятор усатого времени: 
        https://zhbel.github.io/bamboocho_arrive_time/`);
    } else if (msg.content === prefix + 'calc') msg.reply('Включи ботяру');
});

bot.on('message', msg => {
    if (msg.content === prefix + 'us' && state == true) {
        var role = msg.guild.roles.cache.find(role => role.id === '800275702800580659');
        msg.channel.send("<@&" + role.id + "> Го в Усачей");
    } else if (msg.content === prefix + 'us') msg.reply('Включи ботяру');
});




bot.on('voiceStateUpdate', (oldState, newState) => {
    let newUserChannel = newState.channelID;
    let oldUserChannel = oldState.channelID;

    if (state == false) return;


    if (oldState.id == bot.user.id || newState.id == bot.user.id) {
        console.log('ботяра');
        return;
    }

    if (oldUserChannel === null && newUserChannel !== undefined) {
        console.log('join')

        const channel = bot.channels.cache.get(newUserChannel);
        var connectedUser = newState.id;
        var dispatcher;
        channel.join().then(connection => {
            switch (connectedUser) {
                case mainGang[0].id:
                    dispatcher = connection.play('audio/Dungeon_master.mp3', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[1].id:
                    dispatcher = connection.play('audio/Ass_we_can.mp3', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[2].id:
                    dispatcher = connection.play('audio/AcolyteWhat2.wav', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[3].id:
                    dispatcher = connection.play('audio/Vaseka.mp3', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[4].id:
                    dispatcher = connection.play('audio/Kran2.mp3', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[5].id:
                    dispatcher = connection.play('audio/anal.mp3', { volume: 0.7 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                case mainGang[6].id:
                    dispatcher = connection.play('audio/admiral.mp3', { volume: 0.6 });
                    dispatcher.on("speaking", (speaking) => {
                        if (!speaking) {

                            channel.leave();
                        }
                    });
                    break;

                default:
                    channel.join().then(connection => {
                        dispatcher = connection.play('audio/Join.mp3', { volume: 0.7 });
                        dispatcher.on("speaking", (speaking) => {
                            if (!speaking) {

                                channel.leave();
                            }
                        });
                    });
                    break;

            }
        })


    }

    if (oldUserChannel != null && newUserChannel !== null && oldUserChannel != newUserChannel) {
        console.log('switch')

    } else if (newUserChannel === null) {

        const channel = bot.channels.cache.get(oldUserChannel);
        channel.join().then(connection => {





            const dispatcher = connection.play('audio/Disconnect.mp3', { volume: 1 });
            dispatcher.on("speaking", (speaking) => {
                if (!speaking) {

                    channel.leave();
                }
            });
        });
        console.log('leave')
    }
})

bot.login(token);