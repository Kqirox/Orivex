export interface Candidate {
  id: number;
  name: string;
  initials: string;
  title: string;
  location: string;
  skills: string[];
  totalModules: number;
  completedModules: number;
  credentials: OnChainCredential[];
}

export interface OnChainCredential {
  id: number;
  title: string;
  description: string;
  earnedDate: string;
  txHash: string;
}
