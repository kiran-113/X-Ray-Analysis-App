// export const PROMPT =
//   "Identify this plant and provide the following information in JSON format: Plant name, Scientific name, Plant family, Native region, Brief description, Care instructions, medicinal value.";

const axios = require('axios');

export const PROMPT = `
Analyze this X-ray image with Gemini AI and provide the following diagnostic details in JSON format:
{
  "detected_abnormalities": "A list of any observed abnormalities, such as fractures, lesions, or unusual opacities.",
  "potential_diagnosis": "A possible diagnosis based on the detected issues.",
  "severity": "Assessment of the condition's severity (e.g., mild, moderate, severe).",
  "affected_area": "The specific anatomical region affected (e.g., chest, limb, spine).",
  "recommendations": "Suggestions for further tests, consultations, or treatment options.",
  "additional_observations": "Any extra notes that might be beneficial for diagnosis."
}
`;

const generationConfig = {
  temperature: 1,
  top_p: 0.95,
  top_k: 40,
  max_output_tokens: 8192,
  response_mime_type: "text/plain",
};

const safetySettings = [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
  {
    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
    threshold: "BLOCK_MEDIUM_AND_ABOVE",
  },
];



// export const PROMPT = `
// Analyze this X-ray image with Gemini AI and provide the following diagnostic details in JSON format:
// {
//   "detected_abnormalities": "A list of any observed abnormalities, such as fractures, lesions, or unusual opacities.",
//   "potential_diagnosis": "A possible diagnosis based on the detected issues.",
//   "severity": "Assessment of the condition's severity (e.g., mild, moderate, severe).",
//   "affected_area": "The specific anatomical region affected (e.g., chest, limb, spine).",
//   "recommendations": "Suggestions for further tests, consultations, or treatment options.",
//   "additional_observations": "Any extra notes that might be beneficial for diagnosis."
// }
// `;