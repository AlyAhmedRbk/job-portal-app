import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// API Controller function to manage clerk user with database
export const clerkWebHooks = async (req, res) => {
    
    try {
        
        // create a svix instance with clerk webhook secret.
        const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET);

        // verifing headers
        await whook.verify(JSON.stringify(req.body), {
            'svix-id' : req.headers['svix-id'],
            'svix-timestamp' : req.headers['svix-timestamp'],
            'svix-signature' : req.headers['svix-signature'],
        });

        // Getting data from request body
        const  {data, type} = req.body;

        // Switch case for different event
        switch(type){
            case 'user.created':{

                const userData = {
                    _id:data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image : data.image_url,
                    resume : '',
                }

                await userModel.create(userData);
                res.json({});
                break;
            }

            case 'user.updated':{

                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image : data.image_url,
                }         
                
                await userModel.findByIdAndUpdate(data.id, userData);
                res.json({})
                break; 
            }

            case 'user.deleted':{
                await userModel.findByIdAndDelete(data.id);
                res.json({})
                break;
            }

            default:
                break;
        }

    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : 'Webhooks error'})
    }
}