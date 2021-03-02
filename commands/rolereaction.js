module.exports = {
    run: async(client, message, args) => {
        if(args.length != 1) {
            message.channel.send("too many arguments, please only enter 1")
        }else{
            try{
                let fetchedMsg = await message.channel.messages.fetch(args)
                if(fetchedMsg) {
                    console.log("message was found")
                }
            }catch(err){
                console.log(err)
            }
        }
    }
}