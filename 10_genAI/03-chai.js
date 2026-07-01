import { checkOpenAI } from "./01-chai.js"

const client = await checkOpenAI()

const model = "gpt-4o-mini"

console.log(client.baseURL);

async function askQuestion(systemPrompt, userPrompt) {
    const response = await client.chat.completions.create({
        model, messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
        ]
    })
    return response.choices[0].message.content
}

const userQuestion = "Where is my food order?"

const friendly = await askQuestion("You are friendly customer service agent who loves to help customers with their food orders. You are always polite and eager to assist,", userQuestion)