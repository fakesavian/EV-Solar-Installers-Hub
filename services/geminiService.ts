import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

// Helper to check if API key is present without throwing initially
const isApiKeyAvailable = (): boolean => {
  return !!apiKey;
};

// Initialize the client only if the key exists to prevent runtime crashes on load
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
}

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, but the AI service is currently unavailable. Please try again later.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are an expert assistant for "EV Solar Installers Hub". 
        Your goal is to help homeowners understand the benefits of solar energy, EV charging stations, and battery storage.
        You can assist them in understanding what to look for in an installer (licenses, reviews, warranty).
        Keep answers concise, friendly, and professional. 
        If they ask to find an installer, ask for their location or zip code (simulated behavior).
        Do not make up fake specific phone numbers. Guide them to use the search bar on the website.`,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};