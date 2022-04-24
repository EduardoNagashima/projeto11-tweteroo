import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [{
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}];

const tweets = [{
	username: "bobesponja",
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub",
}];

app.post('/sign-up', (req, res)=>{
    const usuario = req.body;
    usuarios.push({
        username: usuario.username,
        avatar: usuario.avatar
    });
    res.send("OK");
});

app.post('/tweets', (req,res)=>{
    const tweet = req.body;

    const avatar = usuarios.find(el => el.username === tweet.username);
    
    console.log(avatar);
    tweets.push({
        username: tweet.username,
      tweet: tweet.tweet,
      avatar: avatar.avatar
    });
    res.send("OK");
});

app.get('/tweets', (req,res)=>{
    res.send(tweets);
})

app.listen(5000);