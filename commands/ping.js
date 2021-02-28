module.exports = {
    name: 'ping',
    description: "this is the !ping command!",
    execute(msg, args) {
        msg.channel.send('pong!')
    }
}