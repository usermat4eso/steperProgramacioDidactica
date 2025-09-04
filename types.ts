
import type React from 'react';

export interface Step {
  id: number;
  title: string;
  component: React.FC;
  imageUrl: string;
}
