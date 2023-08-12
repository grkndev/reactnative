import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chatgpt = async (message, model = "gpt-3.5-turbo") => {
  const completion = await openai.createChatCompletion({
    model: model,
    messages: [
      {
        role: "user",
        content: message + "\n",
      },
    ],
    // stop: [""],
    temperature: 1,
    top_p: 1,
    max_tokens: 2000,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  
  return completion?.data ? completion.data.choices[0].message.content : "Hata oluştu";
};

export default chatgpt;
