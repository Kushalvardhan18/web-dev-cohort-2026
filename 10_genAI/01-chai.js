import dotenv from "dotenv"

dotenv.config()

const API_KEY = process.env.OPEN_AI_KEY

export const apikeyChecker = () => {
    if (!API_KEY) {
        console.error('Error: OPEN_AI_KEY is not set in the environment variables');
        process.exit(1)

    }
}

export const checkOpenAI = async () => {
    const openai = (await import('openai')).default

    const client = new openai.OpenAI({
        apiKey:API_KEY
    })
    if(!client){
        console.error("Error:Failed to initialize OpenAI client");
        process.exit(1)
    }
    console.log("OPENAI client initialized successfully");
    return client
}