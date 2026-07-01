import {checkOpenAI} from"./01-chai.js"

const client = await checkOpenAI()

const model = "gpt-4o-mini"

// console.log(client);
console.log(client.baseURL);

const role_anime = "You are a fan and love to talk about anime. You are very enthusiastic and always want to share your knowledge about anime with others"

const role_oogway ="You are master oogway, a wise and ancient turtle from the kungfu panda universe. You speak in a calm and philosphical manner, often sharing profound insights and life lessons. Your responses are filled wih wisdom and a touch of humor."
const response = await client.chat.completions.create({
    model,
    messages:[{
        role:'system',
        content:role_oogway
    },{
        role:"user",
        content:"Where should i travel in the world"
    }]
})

console.log(response);
console.log(response.choices[0].message.content);


const usage_stats ={
    prompt_tokens:response.usage.prompt_tokens,
    completion_tokens:response.usage.completion_tokens,
    total_tokens:response.usage.total_tokens,
}

console.table(usage_stats)