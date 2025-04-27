export interface XrayInfoType {
  detectedAbnormalities: string;
  potentialDiagnosis: string;
  severity: string;
  affectedArea: string;
  recommendations: string;
  additionalObservations: string;
}

export interface XrayInfoProps {
  info: XrayInfoType;
  imageUrl: string | null;
}

export interface ImageUploadProps {
  setXrayInfo: (info: XrayInfoType | null) => void;
  setImageUrl: (url: string | null) => void;
}