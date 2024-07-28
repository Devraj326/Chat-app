import Conversation from "../models/conversation.model.js";

export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }   
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage){
            conversation.messages.push(newMessage._id);
        }

        //Socket io functionality

        // await newMessage.save();
        // await conversation.save();

        await Promise.all([newMessage.save(), conversation.save()]);

        res.status(201).json({newMessage});

    
    } catch(error){
        console.log("Error on sendMessage controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages = async (req, res) => {
    try{

        const {id: receiverId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        }).populate("messages");

        if(!conversation)return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);


    } catch(error){
        console.log("Error on getMessages controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}
