import { TicketKind } from '@prisma/client';

export class ReserveSpotRequest {
  spots: [];
  ticket_kind: TicketKind;
  email: string;
}
