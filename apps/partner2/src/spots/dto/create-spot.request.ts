import { SpotStatus } from '@prisma/client';

export class CreateSpotRequest {
  name: string;
  description: string;
  date: string;
  status: SpotStatus;
  eventId: string;
}
