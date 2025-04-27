import { XrayInfoType } from "@/types/types";
// In ImageUpload.tsx


export function parseXrayInfo(text: string): XrayInfoType {
  try {
    const jsonString = text.match(/```json\n([\s\S]*)\n```/)?.[1] || "{}";
    const info = JSON.parse(jsonString);
    return {
      // Detected abnormalities (e.g., fractures, lesions)
      detectedAbnormalities: info["detected_abnormalities"] || "None detected",
      // A potential diagnosis based on identified features
      potentialDiagnosis: info["potential_diagnosis"] || "Not available",
      // Severity of the condition (mild, moderate, or severe)
      severity: info["severity"] || "Unknown",
      // Anatomical region affected (e.g., chest, limb, spine)
      affectedArea: info["affected_area"] || "Unspecified",
      // Recommendations for further tests or treatment options
      recommendations: info["recommendations"] || "No recommendations provided",
      // Any additional observations or notes from the analysis
      additionalObservations: info["additional_observations"] || "",
    };
  } catch (error) {
    console.error("Error parsing X-ray info:", error);
    return {
      detectedAbnormalities: "None",
      potentialDiagnosis: "Error parsing X-ray information.",
      severity: "Unknown",
      affectedArea: "Unknown",
      recommendations: "",
      additionalObservations: "",
    };
  }
}