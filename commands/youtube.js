module.exports = {
    name: "youtube",
    description: "this command returns Brendon's youtube link",
    execute(msg,args,youtube_link){
        msg.channel.send(youtube_link)
    }
}