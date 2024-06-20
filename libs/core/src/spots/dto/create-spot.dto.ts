import { SpotStatus } from '@prisma/client';

export class CreateSpotDto {
  name: string;
  description: string;
  date: string;
  status: SpotStatus;
  eventId: string;
}
