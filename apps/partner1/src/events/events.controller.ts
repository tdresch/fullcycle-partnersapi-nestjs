import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from '@app/core/events/events.service';
import { CreateEventRequest } from './dto/create-event.request';
import { UpdateEventRequest } from './dto/update-event.request';
import { ReserveSpotRequest } from './dto/reserve-spot.request';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventRequest) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventRequest) {
    return this.eventsService.update(id, updateEventDto);
  }
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Post(':id/reserve')
  reserveSpots(@Body() dto: ReserveSpotRequest, @Param('id') eventId: string) {
    return this.eventsService.reserveSpot({ ...dto, eventId });
  }
}
